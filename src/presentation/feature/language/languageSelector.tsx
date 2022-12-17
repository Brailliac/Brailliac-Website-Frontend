import React, {memo} from 'react';
import {Select} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const supportedLanguages = ['en', 'nl', 'de', 'fr'];

export const LanguageSelector = React.memo(CreateLanguageSelector);

function CreateLanguageSelector() {
  const {lang} = useTranslation();

  return (
    <Select
      w={'fit-content'}
      onChange={async event => {
        event.preventDefault();
        await setLanguage(event.target.value);
      }}
      value={lang}
    >
      {supportedLanguages.map(value => (
        <option value={value} key={value}>
          {value.toUpperCase()}
        </option>
      ))}
    </Select>
  );
}
