Function.prototype.myBind = function(newThis) {
    //arguments is object which has first key as this and
    //second key as arguments of bind function, so removing this with slice
    const argument = Array.prototype.slice.call(arguments, 1);
    let currentFunction = this;
    return function() {
      currentFunction.apply(newThis, argument);
    }
   }
   const person = {
       firstName: 'John',
       lastName: 'Doe',
       printName: function(salutation, prefix) {
           log(salutation, prefix, this.firstName, this.lastName);
       }
   }
   const user = {
       firstName: 'Ross',
       lastName: 'Geller',
   }
   const newFunc = person.printName.myBind(user, "Hi", "Mrs.");
   newFunc();