export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario não é maior de idade')
    }
}

function validaIdade (data){
    const dataAtual = new Date(); /* constante para identicar dia atual que ia somar apos 18 anos a mais com a proxima const*/
    const dataMais18  = new Date (data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate()); /*ia verificar  dia mes e ano*/

    return dataAtual >= dataMais18;
}