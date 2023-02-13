import { appState } from "../AppState.js";
//import { Spell } from "../Models/Spell.js";
import { jokemonApi } from "./AxiosService.js";

class JokemonService {
  async importJokemon() {
    const res = await jokemonApi.get()
    console.log('[import jokemon]', res.data.results)
    appState.importedJokemon = res.data.results
  }
// jokemon are awesome!
  async test(){
    try {
      
    } catch (error) {
      
    }
  }

  async getJokemonByIndex(index) {
    const res = await jokemonApi.get(index)
    console.log('[get by index]', res.data);
    // NOTE res.data is a single object, do not map!

    appState.spell = new Spell(res.data)
    // console.log('got the spell!', appState.spell)
  }

}

export const jokemonService = new JokemonService()