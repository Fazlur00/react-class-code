function displayDName(name){
    console.log(name);
}


function connectDatabase(a,b){
    console.log("Connecting to the database")
    b(a);
}

connectDatabase("React DB", displayDName);