const obj = {
  a: 10,
  b: 20,
  c: 10,
  d: {
    x: 20,
    y: {
      c: 88,
      k: 8
    },
    l: {
      h: 55,
      t: 15
    }
  },
  p: {
    g: 15
  }
};

function flatObject(obj, target = {}, temp = "") {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      temp = temp + key + ".";
      flatObject(value, target, temp);
    } else {
      let k = temp.length > 0 ? temp + key : key;
      // console.log(temp,key)
      target[k] = value;
    }
    //temp=""
  }
  temp = "";
  return target;
}
console.log(flatObject(obj));
