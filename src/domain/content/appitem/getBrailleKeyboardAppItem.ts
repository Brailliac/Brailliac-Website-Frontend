import {AppItem} from "../../model/appitem/AppItem";
import {AppItemDetailPage} from "../../model/appitem/AppItemDetailPage";
import { AppItemDownloadSource } from "../../model/appitem/AppItemDownloadSource";
import {ImageOrientation} from "../../model/appitem/ImageOrientation";
import { Store } from "../../model/Store";

const detailPage1: AppItemDetailPage = {
    title: 'Braille Input',
    description: 'Type Braille cells directly into any text field, in any app',
    imageSrc: 'image/detail_page_braille_keyboard_1.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage2: AppItemDetailPage = {
    title: 'Auto-translate',
    description: 'Or, automatically translate symbols as you type',
    imageSrc: 'image/detail_page_braille_keyboard_2.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage3: AppItemDetailPage = {
    title: 'At any time',
    description: 'No matter what you’re typing, do it while practising Braille',
    imageSrc: 'image/detail_page_braille_keyboard_3.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage4: AppItemDetailPage = {
    title: 'Customise',
    description: 'Pick the perfect keyboard size to fit your screen',
    imageSrc: 'image/detail_page_braille_keyboard_4.png',
    imageOrientation: ImageOrientation.Portrait,
}

const storePlay: AppItemDownloadSource = {
    url: 'https://play.google.com/store/apps/details?id=com.lukeneedham.braillekeyboard',
    store: Store.Play,
}

const storeFdroid: AppItemDownloadSource = {
    url: 'https://f-droid.org/en/packages/com.lukeneedham.braillekeyboard',
    store: Store.Fdroid,
}

const item: AppItem = {
    name: 'Braille Keyboard',
    description: 'Practise Braille while typing!',
    accentColor: 'logo3',
    logoSrc: 'image/logo_braille_keyboard.webp',
    detailPages: [detailPage1, detailPage2, detailPage3, detailPage4],
    downloadSources: [storePlay, storeFdroid],
    anchor: 'braille-keyboard',
}

export function getBrailleKeyboardAppItem() {
    return item
}
