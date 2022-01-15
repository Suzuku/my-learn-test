import { existsSync, readFileSync, rmdirSync, readdirSync, lstatSync, stat, writeFileSync } from 'fs';
import { resolve, join, basename } from 'path';
import inquirer from 'inquirer';
import consola from 'consola';
import { config } from 'process';

// 检索路径下所有文件
function getFilesByReg(path: string, fileRegExp: any, dirRegExp: any, readFunc: (path: string) => any[]) {
  const _stat = lstatSync(path);
  let newArr: any[] = [];
  // 如果是文件而非文件夹，则赋值并return
  if (_stat.isFile()) {
    const fileName = basename(path);
    // 如果为目标文件 则执行读取方法
    if (fileRegExp.test(fileName)) {
      newArr = readFunc(path);
    } else {
      return [];
    }
    return newArr;
  }
  // 为文件夹
  const dirName = basename(path);
  if (dirRegExp.test(dirName)) {
    const filePathArr = readdirSync(path, 'utf-8');
    //   文件夹下没有子文件的时候
    if (filePathArr && filePathArr.length === 0) {
      return [];
    }
    for (let fileItem of filePathArr) {
      const filePath = join(path, fileItem);
      newArr = newArr.concat(getFilesByReg(filePath, fileRegExp, dirRegExp, readFunc));
    }
  }
  return newArr;
}
// 获取module上的extensions对应的version
function getConfigVersion(path: string): any[] {
  const fileStr = readFileSync(path, 'utf-8');
  const fileObj = JSON.parse(fileStr);
  const moduleArr = fileObj.modules;
  // console.log(path, moduleArr.length);
  const result = [];
  for (let module of moduleArr) {
    const { extensionVersion, extensionName } = module;
    result.push({
      name: extensionName,
      version: extensionVersion,
    });
  }
  return result;
}

// 获取extensions.json文件的数据
function getExtensionVersion(path: string): any[] {
  const fileStr = readFileSync(path, 'utf-8');
  const fileObj = JSON.parse(fileStr);
  const result = [];
  result.push({
    name: fileObj.name,
    version: fileObj.version,
  });
  return result;
}
// 组成Extensions相对路径
function generatorExtensionsPath() {
  return `src`;
}
// 组成Extensions相对路径
function generatorRantaConfigPath() {
  return `src/ranta-config`;
}

// 组成绝对路径
function generatorAbsolutePath(path: string) {
  return resolve(process.cwd(), path);
}
// 去重，有多个extensions版本的存为数组
function solveDuplicate(arr: any[]) {
  const result = [];
  // 使用map来去重
  const mapTest = new Map();

  for (let item of arr) {
    if (!mapTest.has(item.name)) {
      result.push({
        name: item.name,
        version: [item.version],
      });
      mapTest.set(item.name, item.version);
    } else {
      for (let resultItem of result) {
        if (resultItem.name === item.name && resultItem.version.indexOf(item.version) === -1) {
          resultItem.version.push(item.version);
        }
      }
    }
  }
  return result;
}
// 输出存在使用多个版本号的extensions name以及版本号
function printDuplicateVersion(arr: any[]) {
  for (let extension of arr) {
    if (extension.version.length > 1) {
      consola.warn(`extension:${extension.name},使用了多个版本号${extension.version.toString()}`);
    }
  }
}
// 首先数组1肯定是比数组2全的，所以比对数组1和数组2 列出不相同的extensions及版本号即可
function compareArr(extensionArr: any[], configArr: any[]) {
  const result = [];
  for (let extensionItem of extensionArr) {
    for (let configItem of configArr) {
      // 表明是同一个extensions
      if (extensionItem.name === configItem.name && !configItem.version.includes(extensionItem.version)) {
        result.push({
          extensionName: extensionItem.name,
          extensionVersion: extensionItem.version,
          configVersion: configItem.version.toString(),
        });
      }
    }
  }
  consola.error('以下extensions的版本与config版本不符',result);
}
async function main() {
  try {
    // extensions文件
    const extensionsFilesPath = generatorExtensionsPath();
    const extensionAbsolutePath = generatorAbsolutePath(extensionsFilesPath);

    // 检索出路径下所有的extensions的版本，输出数组1
    const extensionFileVersionArr = getFilesByReg(
      extensionAbsolutePath,
      new RegExp('extension.json'),
      new RegExp('^((?!ranta-temp).)+'),
      getExtensionVersion
    );
    console.log('数组1', extensionFileVersionArr);
    console.log('------------------------------------------');
    // ranta-config
    const configFilesPath = generatorRantaConfigPath();
    const configAbsolutePath = generatorAbsolutePath(configFilesPath);
    // 直接遍历ranta-config，输出各个extensions对应的版本的数组2
    const rantaConfigArr = getFilesByReg(
      configAbsolutePath,
      new RegExp('(app.config.json)|(page.json)$'),
      new RegExp(''),
      getConfigVersion
    );
    // 做一次去重，有多个extensions版本的存为数组
    const noDuplicateArr = solveDuplicate(rantaConfigArr);
    console.log('数组2', noDuplicateArr);
    printDuplicateVersion(noDuplicateArr);
    compareArr(extensionFileVersionArr, noDuplicateArr);
  } catch (error) {
    consola.error(error);
  }
}

// ------------------------
main();
