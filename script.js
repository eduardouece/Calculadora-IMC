var calcular = document.getElementById('calcular');

function imc (){
  let nome = document.getElementById('nome').value;
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;
  let resultado = document.getElementById('resultado');
   
    if (nome !== '' && altura !== '' && peso !== ''){
      let valorIMC = (peso / (altura * altura)).toFixed(1);
      let classificacao =  document.getElementById("resultado");

        if (valorIMC < 18.5){
         classificacao.innerHTML = "abaixo do peso.";
        } else if (valorIMC < 25){
          classificacao.innerHTML = 'com peso ideal. Parabéns!!';
        }else if (valorIMC < 30) {
          classificacao.innerHTML = 'levemente acima do peso';
        }else if (valorIMC < 35) {
          classificacao.innerHTML = 'obesidade grau I.';
        }else if (valorIMC < 40) {
          classificacao.innerHTML = 'com obesidade grau II'
        } else {
          classificacao.innerHTML = 'com obesidade grau III. Cuidado!!!'
        }

    }else {
      resultado.textContent = 'Preencha todos os campos!!!'
    }
}
calcular.addEventListener('click', imc);

  


