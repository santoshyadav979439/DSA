const obj={
    name:"santosh"
}
Object.prototype.fullname=function (lastName) {
    return this.name+" "+lastName;
    
}
obj.fullname("yadav")