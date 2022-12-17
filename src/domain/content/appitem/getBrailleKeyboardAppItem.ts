import {AppItemDetailPage} from '../../model/AppItemDetailPage';
import {Translate} from 'next-translate';

const detailPage1 = (t: Translate): AppItemDetailPage => ({
  title: t('keyboardApp:detailPage1.title'),
  description: t('keyboardApp:detailPage1.description'),
  imageSrc: 'image/detail_page_braille_keyboard_1.png',
});

const detailPage2 = (t: Translate): AppItemDetailPage => ({
  title: t('keyboardApp:detailPage2.title'),
  description: t('keyboardApp:detailPage2.description'),
  imageSrc: 'image/detail_page_braille_keyboard_2.png',
});

const detailPage3 = (t: Translate): AppItemDetailPage => ({
  title: t('keyboardApp:detailPage3.title'),
  description: t('keyboardApp:detailPage3.description'),
  imageSrc: 'image/detail_page_braille_keyboard_3.png',
});

const detailPage4 = (t: Translate): AppItemDetailPage => ({
  title: t('keyboardApp:detailPage4.title'),
  description: t('keyboardApp:detailPage4.description'),
  imageSrc: 'image/detail_page_braille_keyboard_4.png',
});

export function getBrailleKeyboardAppItem(t: Translate) {
  return {
    name: t('keyboardApp:name'),
    description: t('keyboardApp:description'),
    accentColor: 'logo3',
    // TODO: Use SVG
    logoSrc: 'image/logo_braille_keyboard.webp',
    detailPages: [
      detailPage1(t),
      detailPage2(t),
      detailPage3(t),
      detailPage4(t),
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.lukeneedham.braillekeyboard',
  };
}
