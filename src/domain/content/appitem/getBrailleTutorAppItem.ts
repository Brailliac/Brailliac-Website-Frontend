import {AppItem} from "../../model/appitem/AppItem";
import {AppItemDetailPage} from "../../model/appitem/AppItemDetailPage";
import {AppItemDownloadSource} from "../../model/appitem/AppItemDownloadSource";
import {ImageOrientation} from "../../model/appitem/ImageOrientation";
import { Store } from "../../model/Store";

const detailPage1: AppItemDetailPage = {
    title: 'Dictionary',
    description: 'Look up symbols quickly and easily, across various Braille codes',
    imageSrc: 'image/detail_page_braille_tutor_1.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage2: AppItemDetailPage = {
    title: 'Practise',
    description: 'Pick exactly what to drill, or let the app figure out your weak-points',
    imageSrc: 'image/detail_page_braille_tutor_2.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage3: AppItemDetailPage = {
    title: 'Challenge',
    description: 'Compete in translations against the clock',
    imageSrc: 'image/detail_page_braille_tutor_3.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage4: AppItemDetailPage = {
    title: 'Translation',
    description: 'Translate real sentences both to and from Braille',
    imageSrc: 'image/detail_page_braille_tutor_4.png',
    imageOrientation: ImageOrientation.Portrait,
}

const detailPage5: AppItemDetailPage = {
    title: 'Level Up',
    description: 'Earn points while learning to unlock new features and themes',
    imageSrc: 'image/detail_page_braille_tutor_5.png',
    imageOrientation: ImageOrientation.Portrait,
}

const storePlay: AppItemDownloadSource = {
    url: 'https://play.google.com/store/apps/details?id=com.lukeneedham.brailletutor',
    store: Store.Play,
}

const item: AppItem = {
    name: 'Braille Tutor',
    description: 'Everything you need to learn Braille!',
    accentColor: 'logo1',
    logoSrc: 'image/logo_braille_tutor.webp',
    detailPages: [detailPage1, detailPage2, detailPage3, detailPage4, detailPage5],
    downloadSources: [storePlay],
    anchor: 'braille-tutor',
}

export function getBrailleTutorAppItem() {
    return item
}
