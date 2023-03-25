const textarea=document.querySelector(".textarea");
const toatalc=document.querySelector(".totalcounter");
const rem=document.querySelector(".remainingcounter")
textarea.addEventListener("keyup",function(){

    toatalc.innerHTML=textarea.value.length;
    rem.innerHTML=textarea.getAttribute("maxlength")-textarea.value.length;
});