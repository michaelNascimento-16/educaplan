function showform() {
 let item = document.querySelector(".item");
 let formulario = document.querySelector(".formulario")

 if (window.matchMedia("screen and (max-width: 600px").matches) {
  formulario.style.left = "10%"
  formulario.style.width = "360px"
  item.style.backgroundColor = "rgba(34, 34, 38, 0.92)"
 }
 else {
  item.style.width = "50vw";
  formulario.style.left = "50%";
  item.style.backgroundColor = "rgba(34, 34, 38, 0.96)"

 }
}


function hideform() {
 let item = document.querySelector(".item");
 let formulario = document.querySelector(".formulario")

 if (window.matchMedia("screen and (max-width:").matches) {
  formulario.style.top = "120%"
 }
 else {

  item.style.width = "100vw";
  item.style.backgroundColor = "rgba(34, 34, 38, 0)"

  formulario.style.left = "100%";
 }
}




function handleSubmit(event) {
 event.preventDefault(); // Impede o envio padrão do formulário

 // Obtém os valores dos campos do formulário
 const nome = document.getElementById('nome').value;
 const email = document.getElementById('email').value;

 // Cria o conteúdo para a div
 const result = `
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Email:</strong> ${email}</p>
 `;

 // Atualiza a div com os dados do formulário
 document.getElementById('resultado').innerHTML = result;
   }
