let incrementButton=document.getElementById("increment-btn");
let count=0;
let countEl=document.getElementById("count-el");
let decrementButton=document.getElementById("decrement-btn");
let saveButton=document.getElementById("save-btn");
let saveEl=document.getElementById("save-el");
let newButton=document.getElementById("new-btn");
incrementButton.addEventListener("click",()=>{
    count++;
    countEl.innerText=count;

})
saveButton.addEventListener("click",()=>{
    countEl.innerText=0;
    saveEl.innerText +=` ${count} -`
    count=0;
})
newButton.addEventListener("click",()=>{
     countEl.innerText=0;
     saveEl.innerText="Previous-Entries: ";
     count=0
})
// decrementButton.addEventListener("click",()=>{
//     count--;
//     countEl.innerText=count;
// })