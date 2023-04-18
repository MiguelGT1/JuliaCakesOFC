document.querySelector(".btn-menu").addEventListener("click", function() {
   document.querySelector(".menu").style.display = "block";
 });
 
 document.querySelector(".btn-close").addEventListener("click", function() {
   document.querySelector(".menu").style.display = "none";
 });

 

 var paragrafo = document.querySelector('.p-sobre')
var texto = paragrafo.innerHTML.replace(/<br>/g, '¬')
var index = 0

const escrever = () => {
  paragrafo.innerHTML = texto.substring(0, index).replace(/¬/g, '<br>')
  if(texto.length > index) {
    paragrafo.innerHTML += '|'
    index++
    setTimeout(escrever, 50)
  } else {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')
  }
}

escrever()

 



 