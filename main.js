// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((promise)=>{
//         return promise.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     //    for(let i of data){
//     //     console.log(i.id);
//     //    }
//     }
//     )
//     .catch(()=>{
//         console.log("Something went wrong !!!");
//     })

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res)=> res.json())
//     .then((data)=>console.log(data))

const button=document.querySelector("button");
const ul=document.querySelector("ul");

const fetchtodos=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await response.json();
    data.forEach((todo)=>{
        let li=document.createElement("li");
        li.innerText=todo.title;
        li.className="list-group-item";
        ul.appendChild(li);
    });
};

button.addEventListener("click",fetchtodos);