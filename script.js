let btn = document.getElementById('btn');
let cont = document.getElementById('cont');
const listColor = [0 ,1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];

let geraNumero = Math.ceil(Math.random() * 12)
console.log(geraNumero)

btn.addEventListener('click', function(){
  let lineColor = '#';

  for (let index = 0; index < 6; index += 1) {
    let geraNumero = Math.ceil(Math.random() * 12)
    lineColor += listColor[geraNumero];
  }

  cont.innerHTML = lineColor;
  document.body.style.backgroundColor = lineColor;
})