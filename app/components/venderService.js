//PRIVATE
import VendingMachine from "../models/vendingMachine.js";


//DATA HERE
let _vm = new VendingMachine();
let transaction = false



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

  addMoney(num) {
    _vm.balance += num;
  }

  get Transaction() {
    return transaction;
  }

  purchase(num) {
    if (_vm.balance >= num) {
      _vm.balance -= num;
      transaction = true;
    } else {
      transaction = false;
    }
  }
};