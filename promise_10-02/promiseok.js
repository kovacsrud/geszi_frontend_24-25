let p1=new Promise((resolve,reject)=>{
    resolve(100);
});

p1.then(adat=>console.log(adat)).catch(err=>console.log(err));

let p2=function(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("Az a értéke nem lehet kisebb, mint b!");
        }
    });
}

p2(10,5).then(adat=>console.log(adat)).catch(err=>console.log(err));

p2(5,10).then(adat=>console.log(adat)).catch(err=>console.log(err));

p1.then(adat=>p2(adat,800)).then(adat=>console.log(adat)).catch(err=>console.log(err));