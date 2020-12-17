let arr=[{from:3000,to:4000},{from:4000,to:4400},{from:5000,to:5500},{from:2000,to:2300}]

console.log(arr.sort((a,b)=>{
    return a.from-b.from
}));