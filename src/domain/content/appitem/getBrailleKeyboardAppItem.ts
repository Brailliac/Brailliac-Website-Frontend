import {AppItem} from "../../model/AppItem";
import {AppItemDetailPage} from "../../model/AppItemDetailPage";

const detailPage1: AppItemDetailPage = {
    title: 'Braille Input',
    description: 'Type Braille cells directly into any text field, in any app',
    imageSrc: 'image/detail_page_braille_keyboard_1.png',
}

const detailPage2: AppItemDetailPage = {
    title: 'Auto-translate',
    description: 'Or, automatically translate symbols as you type',
    imageSrc: 'image/detail_page_braille_keyboard_2.png',
}

const detailPage3: AppItemDetailPage = {
    title: 'At any time',
    description: 'No matter what you’re typing, do it while practising Braille',
    imageSrc: 'image/detail_page_braille_keyboard_3.png',
}

const detailPage4: AppItemDetailPage = {
    title: 'Customise',
    description: 'Pick the perfect keyboard size to fit your screen',
    imageSrc: 'image/detail_page_braille_keyboard_4.png',
}

const item: AppItem = {
    name: 'Brailliac: Braille Keyboard',
    description: 'Practise Braille while typing!',
    accentColor: 'logo3',
    logoSrc: 'image/logo_braille_keyboard.webp',
    detailPages: [detailPage1, detailPage2, detailPage3, detailPage4],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lukeneedham.braillekeyboard',
    anchor: 'braille-keyboard'
}

export function getBrailleKeyboardAppItem() {
    return item
}
