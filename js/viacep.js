const formu = document.querySelector("[required]");
async function buscaEndereco(cep){
   var mensagemErro = document.querySelector('#erro');
   mensagemErro.innerHTML = "";
    try{
       var consultaCEP =  await fetch(`http://viacep.com.br/ws/${cep}/json/`) /*foi feita a requisição */
       var consultaCEPConvertida = await consultaCEP.json(); /* vai ser convertido por uma variável que sera mais assíncrono("await" é utilizado para esperar por uma Promise)*/
       if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente');
       }
       var cidade = document.querySelector('#cidade');
       var logradouro = document.querySelector('#endereco');
       var estado = document.querySelector('#estado');
       var bairro = document.querySelector('#bairro');

       cidade.value = consultaCEPConvertida.localidade;
       logradouro.value = consultaCEPConvertida.logradouro;
       estado.value = consultaCEPConvertida.uf;
       bairro.value = consultaCEPConvertida.bairro;

       console.log(consultaCEPConvertida);
       return consultaCEPConvertida;
    } catch (erro){
      mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
     }
   
}

var cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
