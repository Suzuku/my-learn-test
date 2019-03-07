
//关于await和try...catch的联系 具体见博客
async function test() {
  try {
    await Promise.reject()
  } catch (error) {
    return Promise.reject(e)
  }
    
}

async function kiri() { 
  try {
    await test()
     console.log(123)
  } catch (error) {
    console.log('I am error')
  }
 }

 kiri()//I am error
