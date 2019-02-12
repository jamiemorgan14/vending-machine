import Snack from "../models/snack.js";


export default class VendingMachine {
  constructor() {
    this.snacks = {
      A1: new Snack('Doritos', 1.00, 'assets/images/dorito.png'),
      A2: new Snack('Snickers', 1.50, 'assets/images/snickers.png'),
      A3: new Snack('Takis', 1.00, 'assets/images/takis.png')
    }
    this.balance = 0;
  }
};