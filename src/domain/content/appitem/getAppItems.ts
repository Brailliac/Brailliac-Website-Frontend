import {getBrailleTutorAppItem} from "./getBrailleTutorAppItem";
import {getBrailleKeyboardAppItem} from "./getBrailleKeyboardAppItem";
import {getBrailleByEarAppItem} from "./getBrailleByEarAppItem";

const allItems = [getBrailleByEarAppItem(), getBrailleTutorAppItem(), getBrailleKeyboardAppItem()]

export function getAppItems() {
    return allItems
}
