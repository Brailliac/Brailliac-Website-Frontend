import React from 'react';
import {Box, Center, Flex, Select, Text, VStack} from '@chakra-ui/react';
import {HeroGraphic} from './section/herographic/HeroGraphic';
import {AppSpotlight} from './section/appspotlight/AppSpotlight';
import {AppItem} from '../../../domain/model/AppItem';
import {getAppItems} from '../../../domain/content/appitem/getAppItems';
import {openInNewTab} from '../../util/openInNewTab';
import {ChevronIcon} from '../../common/icon/ChevronIcon';
import useTranslation from 'next-translate/useTranslation';
import {LanguageSelector} from '../language/languageSelector';

export const IndexPage = React.memo(CreateIndexPage);

function CreateIndexPage(): JSX.Element {
  const {t} = useTranslation();
  const apps: AppItem[] = getAppItems(t);

  const appSpotlights = apps.map(it => (
    <AppSpotlight
      key={it.name}
      app={it}
      onDownloadClick={() => onDownloadClick(it)}
    />
  ));

  function onDownloadClick(app: AppItem) {
    const link = app.playStoreUrl;
    openInNewTab(link);
  }

  return (
    <Flex direction={'column'}>
      <Flex w={'full'} align={'end'} direction={'column'} px={'4'} py={'2'}>
        <LanguageSelector />
      </Flex>
      <Center paddingX={{base: 5, md: 8, lg: 12}} marginTop={'6'}>
        <HeroGraphic />
      </Center>
      <Text
        textAlign={'center'}
        marginTop={{base: 14, md: 16}}
        textStyle={'content'}
      >
        {t('home:scroll')}
      </Text>
      <Center marginTop={-2} opacity={0.4}>
        <Box w={8}>
          <ChevronIcon />
        </Box>
      </Center>
      <VStack
        spacing={{base: 10, md: 20}}
        paddingX={{base: 4, md: 8, lg: 14}}
        marginTop={24}
      >
        {appSpotlights}
      </VStack>
      <Box h={20} />
      <Flex direction={'column'} paddingX={{base: 3, md: 10}}>
        <Text textStyle={'content'} textAlign={'center'}>
          {t('home:madeBy')}
        </Text>
        <Text textStyle={'content'} textAlign={'center'} marginTop={3}>
          {t('home:support')}
          <u>
            <a
              href={'https://paypal.me/brailliac'}
              target="_blank"
              rel="noreferrer"
            >
              paypal.me/brailliac
            </a>
          </u>
        </Text>
      </Flex>
      <Box h={16} />
    </Flex>
  );
}
