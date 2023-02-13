import { JokemonController } from "./Controllers/JokemonController.js";

class App {
  jokemonController = new JokemonController()
}

window["app"] = new App();
