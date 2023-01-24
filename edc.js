const n1=document.querySelector(".ni");
const n2=document.querySelector(".ghostheader");
const activate=() => {
n2.classList.toggle("active");

}
n1.addEventListener("click",() => activate());
