import {extendTheme} from "@chakra-ui/react";

const colors = {
    logo1: '#7C3461',
    logo2: '#9C5984',
    logo3: '#502D6E',
    logo4: '#6E4E8A',
    logo5: '#3D3271',
    logo6: '#5E538F',
    appSpotlightBody: '#F0F0F0',
    darkText: '#333333',
}

const textStyles = {
    h1: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: {base: '40px', md: '56px', lg: '64px'},
        lineHeight: {base: '48px', md: '64px', lg: '72px'},
    },
    h2: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: {base: '26px', md: '30px', lg: '40px'},
        lineHeight: {base: '30px', md: '38px', lg: '48px'},
    },
    h3: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: {base: '22px', md: '24px', lg: '32px'},
        lineHeight: {base: '26px', md: '32px', lg: '40px'},
    },
    content: {
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: {base: '18px', sm: '20px', md: '22px', lg: '28px'},
        lineHeight: {base: '22px', sm: '24px', md: '26px', lg: '34px'},
    },
}

export const theme = extendTheme(
    { colors, textStyles }
)
