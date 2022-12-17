import React from 'react';
import {Image} from '@chakra-ui/image';
import {chakra, Center, Flex, Text} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export const HeroGraphic = React.memo(CreateHeroGraphic);

function CreateHeroGraphic(): JSX.Element {
  const logoSize = '184px';
  const {t} = useTranslation('home');

  return (
    <Flex direction={'column'} w={'full'}>
      <Center>
        {/* TODO: Use svg image here */}
        <Image
          src={'image/logo_braille_tutor.webp'}
          alt={'Braille Tutor Logo'}
          w={logoSize}
          h={logoSize}
        />
      </Center>
      <Center marginTop={10}>
        <Text textStyle={'h1'} textAlign={'center'}>
          <chakra.span textColor={'logo1'}>Brailliac </chakra.span>
          {t('title')}
        </Text>
      </Center>
    </Flex>
  );
}
