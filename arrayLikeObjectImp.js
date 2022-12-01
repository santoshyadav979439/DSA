const arrayLikeObject = {
    length: 0,
    push: function (item) {
        Array.prototype.push.call(this, item);
    },
    pop: function () {
        Array.prototype.pop.call(this);
    }
};

// driver code
arrayLikeObject.push('first');
arrayLikeObject.push('second');
//arrayLikeObject.pop();
arrayLikeObject[1];  
