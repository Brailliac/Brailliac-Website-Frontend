import {AppItem} from "../../model/appitem/AppItem";
import {AppItemDetailPage} from "../../model/appitem/AppItemDetailPage";
import {AppItemDownloadSource} from "../../model/appitem/AppItemDownloadSource";
import {ImageOrientation} from "../../model/appitem/ImageOrientation";
import { Store } from "../../model/Store";

const detailPage1: AppItemDetailPage = {
    title: 'Become Braille',
    description: 'Using a unique design, your fingers become Braille dots',
    imageSrc: 'image/detail_page_braille_by_ear_1.png',
    imageOrientation: ImageOrientation.Landscape,
}

const detailPage2: AppItemDetailPage = {
    title: 'Dot Navigation',
    description: 'Get around the app simply by tapping dots',
    imageSrc: 'image/detail_page_braille_by_ear_2.png',
    imageOrientation: ImageOrientation.Landscape,
}

const detailPage3: AppItemDetailPage = {
    title: 'Challenge',
    description: 'Practise typing real words in spelling bee time trials',
    imageSrc: 'image/detail_page_braille_by_ear_3.png',
    imageOrientation: ImageOrientation.Landscape,
}

const detailPage4: AppItemDetailPage = {
    title: 'Maths',
    description: 'Practise numbers by solving math puzzles',
    imageSrc: 'image/detail_page_braille_by_ear_4.png',
    imageOrientation: ImageOrientation.Landscape,
}

const detailPage5: AppItemDetailPage = {
    title: 'Dictation',
    description: 'Hone your dictation skills by translating real audiobooks',
    imageSrc: 'image/detail_page_braille_by_ear_5.png',
    imageOrientation: ImageOrientation.Landscape,
}

const storePlay: AppItemDownloadSource = {
    url: 'https://play.google.com/store/apps/details?id=com.brailliac.blindbraille',
    store: Store.Play,
}

const item: AppItem = {
    name: 'Braille by Ear',
    description: 'Learn Braille, no sight needed',
    accentColor: 'logo5',
    logoSrc: 'image/logo_braille_by_ear.png',
    detailPages: [detailPage1, detailPage2, detailPage3, detailPage4, detailPage5],
    downloadSources: [storePlay],
    anchor: 'braille-by-ear',
}

export function getBrailleByEarAppItem() {
    return item
}
