import { existsSync, readFileSync, rmdirSync, readdirSync, lstatSync, stat, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import inquirer from 'inquirer';
import consola from 'consola';

// 根据输入的路径输出结构的json，格式为dirName:{filename:filePath}
export function exportStructJson(path: string, excludePath: string): void {
  try {
    const _stat = lstatSync(path);
    if (_stat.isFile()) {
      return consola.error('请输入文件夹的路径！');
    }
    let struct: Record<string, any> = {};
    const excludePathResult: string[] = excludePath.split(',');
    const excludePathArray = excludePathResult.map((item) => {
      return join(process.cwd(), item);
    });
    // 开始主流程
    const structResult = getStructParams(join(process.cwd(), path), struct, excludePathArray);
    writeFileSync(`exportJSON/${path.split('/').slice(-1)[0]}.json`, JSON.stringify(structResult, null, '\t'));
    console.log(structResult);
  } catch (error) {
    console.log(error);
    consola.error('路径不合法！');
  }
}

// stat对象获取嵌套结构
function getStructParams(path: string, struct: Record<string, any>, excludePathArray: string[]): object {
  const _stat = lstatSync(path);
  // 全字路径匹配
  if (excludePathArray.includes(path)) {
    return struct;
  }
  // 如果是文件而非文件夹，则赋值并return
  if (_stat.isFile()) {
    struct[path.split('/').slice(-1)[0]] = path;
    return struct;
  }

  const filePathArr = readdirSync(path, 'utf-8');
  //   文件夹下没有子文件的时候
  if (filePathArr && filePathArr.length === 0) {
    struct[path.split('/').slice(-1)[0]] = {};
    return struct;
  }
  filePathArr.forEach((fileItem) => {
    const filePath = join(path, fileItem);
    const _stat_file = lstatSync(filePath);
    //   如果是文件夹则递归
    if (_stat_file.isDirectory()) {
      struct[fileItem] = {};
      getStructParams(`${path}/${fileItem}`, struct[fileItem], excludePathArray);
      return struct;
    }
    struct[fileItem] = filePath;
  });
  return struct;
}
