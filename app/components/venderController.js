//PRIVATE
import VenderService from "./venderService.js";


//DATA HERE
let venderService = new VenderService;

function drawSnacks() {
  let snackDictionary = venderService.SnackDictionary;
  let template = '';
  let b = venderService.Balance

  for (const prop in snackDictionary) {
    let snack = snackDictionary[prop]
    template += `<div class="col-12 col-md-4">
 <img class="img-fluid mt-3" src="${snack.img}">
   <h1>${snack.name}</h1>
   <h2>$${snack.price.toFixed(2)}</h2>
   <button class="btn btn-success w-100" onclick="app.controllers.venderController.purchase(${snack.price})">${prop}</button>
</div>`
  }
  document.getElementById('draw-vm').innerHTML = template
  document.getElementById('bal').innerText = b.toFixed(2);
};




//PUBLIC
export default class VenderController {
  constructor() {
    console.log('building controller');
    drawSnacks();
  }
  addMoney(num) {
    venderService.addMoney(num);
    drawSnacks();
  }
  purchase(num) {
    venderService.purchase(num);
    if (venderService.Transaction) {
      document.getElementById('results').innerText = 'Enjoy!';
    } else {
      document.getElementById('results').innerText = 'You\'re broke!';
    }
    drawSnacks();
  }
};