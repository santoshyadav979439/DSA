function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(this.name, this.age);
};

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const emp = new Employee('Mike', 20, 4000);
console.log(emp); // { name: 'Mike', age: 20, salary: 4000 }
emp.display(); // Mike 20