import { existsSync, readFileSync, rmdirSync, readdirSync } from 'fs';
import { resolve, join } from 'path';
import inquirer from 'inquirer';
import {exportStructJson} from './utils'
// try {
//   readFile('routers/order-detail.ts', 'utf-8', (error, data) => {
//     if (error) {
//       throw error;
//     }
//     console.log(data);
//   });
// } catch (error) {
//   console.log(error);
// }
let dirAbsolutePath=''
getPath().then((path)=>{
  // TODO 加入文件
  getExcludePath().then((excludePath)=>{
    exportStructJson(path,excludePath)
  })
})


async function getPath():Promise<string>{
  const {path} = await inquirer.prompt([
    {
      name: 'path',
      type: 'input',
      message: '请输入目标文件夹路径',
    },
  ])
  return path
}


async function getExcludePath():Promise<string>{
  const {path} = await inquirer.prompt([
    {
      name: 'path',
      type: 'input',
      message: '请输入需要排除的文件或文件夹路径（请用逗号隔开）',
    },
  ])
  return path
}
// 根据用户输入的路径里获取到文件夹下的所有文件
function getFiles(path: string):string[] {
    const absolutePath=resolve(process.cwd(),path)
    dirAbsolutePath=absolutePath
    try {
        const pathResult=readdirSync(absolutePath,'utf-8')
        return pathResult
    } catch (error) {
        console.log(error)
        return []
    }
}
// 获取文件的数据
async function getFilesData(files:string[]) {
    let filesData=[]
    for(let file of files){
        const fileObj=require(resolve(process.cwd(),`${dirAbsolutePath}/${file}`))
        console.log(fileObj) 
    }
}

