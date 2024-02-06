import { getCharacterFx } from "@/api/character";
import { createStore } from "effector";

export const charactersStore = createStore([]);

charactersStore.on(getCharacterFx.doneData, (state, characters) => characters);
