// @ts-nocheck
import VenderController from "./components/venderController.js";


class App {
  constructor() {
    this.controllers = {
      venderController: new VenderController
    }
  }
}



window.app = new App();