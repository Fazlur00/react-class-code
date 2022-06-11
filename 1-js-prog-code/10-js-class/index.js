let displayName = ()=>{
    setTimeout(() =>{
    }, 1000)
    return "Displaying...!"
}

async function f() {
let result = await displayName();
console.log(result); 
}
f();


