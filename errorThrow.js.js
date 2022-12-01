function fun(){
  
          console.log(1);
    try {
          throw new Error("some error occured");
    } catch (error) {
        console.log(error)
    }
  
    console.log(2);
    console.log(3);
   
  
}
fun();