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
        fontSize: '64px',
        lineHeight: '72px',
    },
    h2: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '40px',
        lineHeight: '48px',
    },
    h3: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '40px',
    },
    content: {
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '32px',
    },
}

export const theme = extendTheme(
    { colors, textStyles }
)
