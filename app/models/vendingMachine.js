import Snack from "../models/snack.js";


export default class VendingMachine {
  constructor() {
    this.snacks = {
      A1: new Snack('Doritos', 1.00, 'assets/images/dorito.png'),
      A2: new Snack('Snickers', 1.50, 'assets/images/snickers.png'),
      A3: new Snack('Takis', 1.00, 'assets/images/takis.png'),
      A4: new Snack('Milky Way', 42, 'assets/images/Milky.png'),
      A5: new Snack('Twix', 1.25, 'assets/images/twix.png'),
      A6: new Snack('Gum', .11, 'assets/images/gum.jpg'),
      A7: new Snack('Dog', 1000, 'assets/images/beauty.jpg'),
      A8: new Snack('House', 250000, 'assets/images/house.jpg'),
      A9: new Snack('Water', 0, 'assets/images/water.jpg')
    }
    this.balance = 0;
  }
};