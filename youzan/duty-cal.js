




function calDuty(dateStr) {
    const date = new Date(dateStr)
    for(let i=0;i<20;i++){
        const time =date.getTime()+i*1000*3600*24*8;
        const dateTime = new Date(time)
        console.log(`${dateTime.getFullYear()}-${dateTime.getMonth()+1}-${dateTime.getDate()}`);

    }
}

calDuty('2022-11-7')