let screen=document.getElementById("answer");
buttons=document.querySelectorAll("button");
let answervalue="";
for(item of buttons){
item.addeventlistener("click",(e)=> {
    buttonText=e.target.innertext;
    console.log("button text is' , button);
    if(buttonTEXT=="-") {
        buttonTEXT=="*" 
        answervalue+=buttontext;
        answer.value =answervalue;
    }
    elseif (buttontext =="c"){
        answervalue="";
        answer.value =answervalue; 
 }
 elseif(buttonText=="="){
    answer.value =answervalue;
 }
else{
    answervalue +=buttonText;
    answer.value =answervalue;
}
}}s
