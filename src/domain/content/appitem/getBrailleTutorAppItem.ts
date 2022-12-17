import {AppItemDetailPage} from '../../model/AppItemDetailPage';
import {Translate} from 'next-translate';

const detailPage1 = (t: Translate): AppItemDetailPage => ({
  title: t('tutorApp:detailPage1.title'),
  description: t('tutorApp:detailPage1.description'),
  imageSrc: 'image/detail_page_braille_tutor_1.png',
});

const detailPage2 = (t: Translate): AppItemDetailPage => ({
  title: t('tutorApp:detailPage2.title'),
  description: t('tutorApp:detailPage2.description'),
  imageSrc: 'image/detail_page_braille_tutor_2.png',
});

const detailPage3 = (t: Translate): AppItemDetailPage => ({
  title: t('tutorApp:detailPage3.title'),
  description: t('tutorApp:detailPage3.description'),
  imageSrc: 'image/detail_page_braille_tutor_3.png',
});

const detailPage4 = (t: Translate): AppItemDetailPage => ({
  title: t('tutorApp:detailPage4.title'),
  description: t('tutorApp:detailPage4.description'),
  imageSrc: 'image/detail_page_braille_tutor_4.png',
});

const detailPage5 = (t: Translate): AppItemDetailPage => ({
  title: t('tutorApp:detailPage5.title'),
  description: t('tutorApp:detailPage5.description'),
  imageSrc: 'image/detail_page_braille_tutor_5.png',
});

export function getBrailleTutorAppItem(t: Translate) {
  return {
    name: t('tutorApp:name'),
    description: t('tutorApp:description'),
    accentColor: 'logo1',
    // TODO: Use SVG
    logoSrc: 'image/logo_braille_tutor.webp',
    detailPages: [
      detailPage1(t),
      detailPage2(t),
      detailPage3(t),
      detailPage4(t),
      detailPage5(t),
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.lukeneedham.brailletutor',
  };
}
