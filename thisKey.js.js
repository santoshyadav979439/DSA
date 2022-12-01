 var myObject = {

      foo: "bar",

      func: function() {

          var self = this;
           foo=10;

          console.log("outer func:  this.foo = " + this.foo); // bar=>1

          console.log("outer func:  self.foo = " + self.foo); // bar=>2

          function inner() {
              console.log(this);

              console.log("inner func:  this.foo = " + this.foo); // undefined

              console.log("inner func:  self.foo = " + self.foo); // bar

          }
       inner();

      }

  };

  myObject.func();