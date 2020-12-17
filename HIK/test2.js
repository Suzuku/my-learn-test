class Pa{
    constructor(){
        this.str='233'
        this.test={
            str:'788',
            op:{
                str:'555',
                str2:this.str,
                str3:'444'
            }

        }
    }
    init(){
        console.log(this.test);
    }
   
}
const t=new Pa()
t.init()
//{ str: '788', op: { str: '555', str2: '233', str3: '444' } }