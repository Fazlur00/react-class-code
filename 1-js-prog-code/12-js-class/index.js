
function tryV(){
    let newError = false
try{
    console.log("sample")
    St()
}catch(err){
    if(err){ newError = true}
    let error  = new SyntaxError("Something went wrong")
    console.log(error.message)
}finally{
   if(newError){
    console.log("Error stored")
   }else{
    console.log("no error occured")
   }
}
}

tryV()