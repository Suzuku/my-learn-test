const pa={
    str:'233',
    test:this,
    init:function(){
        console.log(this.str);
    }
}
this.str='244'
console.log(pa);
pa.init()