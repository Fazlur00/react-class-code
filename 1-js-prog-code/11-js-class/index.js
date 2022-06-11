let promise = new Promise(function(resolve, reject){
    resolve("done")
    reject("error")
})

promise.then(()=>{}).then(()=>{}).finally(()=>{return "succes"}).catch(()=>{})