const alturaImc = document.getElementById('altura');
const pesoImc = document.getElementById('peso');
const calcularImc = document.getElementById('buttons');
const resultImc = document.getElementById('result');
const resultImcPeso = document.getElementById('result2');
const voltarPagina = document.getElementById('voltar');
const paginaPrincipal = document.getElementById('container_principal')
const paginaSecund = document.querySelector('.container_segundo')
const nomeImc = document.getElementById('name');
const nomeNoSite = document.getElementById('myname');

calcularImc.addEventListener('click', () => {
    const alturaInput = alturaImc.value
    const pesoInput = pesoImc.value
    const nomeInput = nomeImc.value


    const resultImcR = pesoInput/(alturaInput*alturaInput).toFixed(2)

    resultImc.innerHTML = resultImcR.toFixed(2);
    nomeNoSite.innerHTML = nomeInput


    if (resultImcR < 18.5){
        resultImcPeso.innerHTML = 'MAGREZA'
    } else if (resultImcR >= 18.5 && resultImcR <= 24.9){
        resultImcPeso.innerHTML = 'NORMAL'
    } else if (resultImcR >= 25 && resultImcR <= 29.9 ){
        resultImcPeso.innerHTML = 'SOBREPESO'
    } else if (resultImcR >= 30 && resultImcR <= 39.9){
        resultImcPeso.innerHTML = 'OBESIDADE'
    } else if (resultImcR >= 40){
        resultImcPeso.innerHTML = 'OBESIDADE GRAVE'
    }

    

    paginaPrincipal.style.display = 'none'

    if (paginaPrincipal.style.display = 'none'){
        paginaSecund.style.display = 'block'
    }
})
voltarPagina.addEventListener('click', () => {

    paginaSecund.style.display = 'none'

    if(paginaSecund.style.display = 'none'){
        paginaPrincipal.style.display = 'block'
        alturaInput = ''
        pesoInput = ''
        nomeInput = ''
    }






})