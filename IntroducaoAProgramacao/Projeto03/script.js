const numeroDoAndar = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20];

//============== Estrutura for ===============
for(let i = numeroDoAndar.length - 1; i >= 0 ; i--) {
  console.log(numeroDoAndar[i]);
}

//============== Estrutura while ===============
//Definição do índice 
let i = numeroDoAndar.length -1; 

while (i >=0) {
  console.log(numeroDoAndar[i]);
  i--;
}