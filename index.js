let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el");
console.log(countEl)
let count =0;
function increament(){
    count+=1;
    countEl.textContent=count;

}
function save(){
    let countStr=count+"_";
    saveEl.textContent+=countStr;
    // console.log(count);
    countEl.textContent=0;
    count=0;

}

