//PRIVATE
import VendingMachine from "../models/vendingMachine.js";


//DATA HERE
let _vm = new VendingMachine();




//PUBLIC
export default class VenderService {
  constructor() {

  }
  get SnackDictionary() {
    return _vm.snacks;
  }

  get Balance() {
    return _vm.balance;
  }
};