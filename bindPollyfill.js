Function.prototype.bind= function(context,...arg1){
    const callingFunction= this;
    return function(...arg2){
       return callingFunction.apply(context,[...arg1,...arg2])
    }
}

let person={
   getfullName(){
        return this.firstName+" "+ this.lastName;
    },
    getAddress(add)
        {
            return `
            ${this.firstName} ${this.lastName}
                ${add}
`
        }
}

let person1= {
    firstName:"santosh",
    lastName:"yadav"
}
console.log(person.getfullName.bind(person1)())
person.getAddress.bind(person1)("kolghat Azamgarh")