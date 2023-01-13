document.querySelector('#clear').addEventListener('click',()=>{
  document.querySelector("#display").value = " ";
})



//backspace function
const silmeTusu = () =>{
  const num= document.querySelector("#display").value.slice(0,-1);
  document.querySelector("#display").value=num;
} 

//fonksiyon bir

const bir=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="1";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "1";
  }
}

const iki=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="2";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "2";
  }
}
const uc=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="3";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "3";
  }
}
const dort=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="4";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "4";
  }
}
const bes=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="5";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "5";
  }
}

const alti=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="6";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "6";
  }
}
const yedi=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="7";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "7";
  }
}
const sekiz=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="8";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "8";
  }
}
const dokuz=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="9";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "9";
  }
}
const sifir=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value="0";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + "0";
  }
}
const nokta=()=>{
  if(document.querySelector("#display").value == " "){
    document.querySelector("#display").value=".";
  }
  else{
    document.querySelector("#display").value=document.querySelector("#display").value + ".";
  }
}
