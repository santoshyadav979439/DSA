const arr=[2,3,4,4,6,7,2];
const obj={};
for (let name of arr) {
    obj[name]= name;
}
console.log(Object.keys(obj))