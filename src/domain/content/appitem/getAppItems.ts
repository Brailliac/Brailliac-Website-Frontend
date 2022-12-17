import {getBrailleTutorAppItem} from './getBrailleTutorAppItem';
import {getBrailleKeyboardAppItem} from './getBrailleKeyboardAppItem';
import {Translate} from 'next-translate';

export function getAppItems(t: Translate) {
  return [getBrailleTutorAppItem(t), getBrailleKeyboardAppItem(t)];
}
