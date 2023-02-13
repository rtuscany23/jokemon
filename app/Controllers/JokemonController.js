import { appState } from "../AppState.js";
import { jokemonService } from "../Services/JokemonService.js";
//import { Value } from "../Models/Value.js";

export class JokemonController{
  constructor(){
    //console.log('Jokemon Controller works')
    this.importJokemon()
    document.body.style.backgroundAttachment
  }

  async importJokemon(){
    try {
      await jokemonService.importJokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async getJokemonByIndex(index) {
    try {
      await jokemonService.getJokemonByIndex(index)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

}
