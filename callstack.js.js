function two(v){
    console.log(v)
}
function one(){
    console.log(1)
    setTimeout(()=>{
       console.log(12) 
    },0);
     console.log(13)
    two(21);
    two(22)
}
one();