function walk(amount) {

  return new Promise((resolve,reject) => {

    if (amount > 500) {

      reject ("the value is too big");

    }

    setTimeout(() => resolve(`you walked for ${amount}ms`),amount);

  });

}



async function go() {
  try{

  const res = await walk(500);

  console.log(res);  // you walked for 500ms

  const res2 = await walk(300);

  console.log(res2);  //  // you walked for 300ms

  const res3 = await walk(200);

  console.log(res3); // you walked for 200ms

  const res4 = await walk(700);

  console.log(res4); //Error
    console.log("oops some error occured!!")

  const res5 = await walk(400);

  console.log(res5); // error

  console.log("finished");
  }
    
  catch(error){
    console.log(error)
  }

}
go();