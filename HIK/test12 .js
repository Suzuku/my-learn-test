function importFileTypeCheck(fileName,...fileTypeStr){
    let sub=fileName.substr(fileName.lastIndexOf('.'))
    let statusList=fileTypeStr.filter((item)=>{
        return sub===item
    })
    if(statusList.length>0){
        return true
    }
        return false
}
