// let obj ={
//     username:"priya",
//     password:143
// }
// let jsondata=JSON.stringify(obj)
// console.log(jsondata);    //obj to json


// let JSONdata={
//     "username":"priya",
//     "password":1234
// }
// let objdata=JSON.parse(JSONdata)
// console.log(objdata);   //json to obj


// let gp=document.getElementById("gp")
// let pt=document.getElementById("pt")
// let cd=document.getElementById("cd")

// gp.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     gp.style.border="2px solid black"
//     gp.style.height="400px"
//     gp.style.backgroundColor="red"
//     console.log("grandparent clicked");
    
// })

// pt.addEventListener("click",(e)=>{
//    //e.stopPropagation()
//     pt.style.border="2px solid "
//     pt.style.height="250px"
//     pt.style.backgroundColor="blue"
//     pt.style.borderImage="URL(a.jpg) 70% round"
//     console.log("parent clicked");
// })

// cd.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     cd.style.border="2px solid black"
//     cd.style.height="100px"
//     cd.style.backgroundColor="green"
//         console.log("child clicked");
    
// })


let promise = new Promise((resolve,reject)=>{
    let iswaterfetched = false
    if(iswaterfetched == true)
    {
        resolve(document.body.style.backgroundColor="green")
    }
    else
    {
        reject(document.body.style.backgroundColor="red")
    }
}
)
promise.then((x)=>console.log(x)).catch((y)=>console.log(y))