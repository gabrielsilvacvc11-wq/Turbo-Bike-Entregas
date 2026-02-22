function salvar(){
 const dados = {
  titulo: document.getElementById('titulo').value,
  descricao: document.getElementById('descricao').value
 }
 localStorage.setItem("siteDados", JSON.stringify(dados));
 alert("Dados salvos com sucesso!");
}
