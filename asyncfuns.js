function greet(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
         resolve ("Hello world")
       }, 1000)
    })
}

//  One question different solving approach
// Approach A
greet().then ((message)=>{
    console.log(message)
});
// Approach B
async function asyncFuction(){
    const message = await greet()
    console.log(message)
}
asyncFuction()

// Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks
// Solution A
function performTask(task, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (`${task} completed!!!`)
        }, delay)

    })}
performTask("Washing" , 1000)
.then((result1)=>{
    console.log(result1);
    return performTask("Ironing" ,2000)
    
})
.then((result2)=>{
    console.log(result2);
    return performTask("Cooking", 3000)
}).then((result3)=>{
    console.log(result3);
    console.log("All tasks completed");    
});


// Solution B
function chainTask(tasks){
    let chain = Promise.resolve()
    tasks.forEach(([taskName, delay])=>{
        chain = chain.then(()=>{
            return performTasks(taskName,delay)
        }).then((result)=>{
            console.log(result);
            
        })
    })
}
function performTasks(taskName,delay){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (`${taskName}`)
        }, delay)
    })
}
const task = [["Washing", 1000],["Ironing", 1500],["Sweeping", 2000]]
console.log(chainTask(task));



