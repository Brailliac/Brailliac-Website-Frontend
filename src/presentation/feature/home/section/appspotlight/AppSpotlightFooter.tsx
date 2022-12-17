import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {useClickable} from '@chakra-ui/clickable';
import useTranslation from 'next-translate/useTranslation';

export const AppSpotlightFooter = React.memo(CreateAppSpotlightFooter);

interface Props {
  onDownloadClick: () => void;
}

function CreateAppSpotlightFooter(props: Props): JSX.Element {
  const {onDownloadClick} = props;

  const clickable = useClickable({onClick: onDownloadClick});
  const {t} = useTranslation('home');

  return (
    <Box padding={2}>
      <Box
        borderColor={'white'}
        borderWidth={2}
        borderRadius={'5px'}
        padding={4}
        _hover={{
          background: '#00000033',
        }}
        {...clickable}
      >
        <Flex direction={'column'}>
          <Text textAlign={'center'} textColor={'white'} textStyle={'h3'}>
            {t('downloadNow')}
          </Text>
          <Text textAlign={'center'} textColor={'white'} textStyle={'content'}>
            {t('freeDescription')}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
