function copyPrompt(button){

let text =
button.previousElementSibling.innerText;

navigator.clipboard.writeText(text);

button.innerText = "Copied!";

setTimeout(()=>{
button.innerText = "Copy Prompt";
},2000);

}
