function callMe (delay){
    setTimeout(()=>{
        console.log("called");
        
    },delay)
};
const delays = [500,100,1500]
for(let delay of delays){
    callMe(delay);
}