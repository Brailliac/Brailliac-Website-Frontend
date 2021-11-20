import {getBrailleTutorAppItem} from "./getBrailleTutorAppItem";
import {getBrailleKeyboardAppItem} from "./getBrailleKeyboardAppItem";

const allItems = [getBrailleTutorAppItem(), getBrailleKeyboardAppItem()]

export function getAppItems() {
    return allItems
}
