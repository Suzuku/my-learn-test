function Animals(name){
     this.name=name
}

function Dogs(name){
    this.name=name
}

Animals.prototype.getName=function(){
    console.log(this.name);
}

const f=new Animals('233')
Dogs.prototype=f
const c=new Dogs('344')
c.getName()