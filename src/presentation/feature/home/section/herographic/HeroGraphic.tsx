import React from "react";
import {Image} from "@chakra-ui/image";
import {chakra, Center, Flex, Text} from "@chakra-ui/react";

export const HeroGraphic = React.memo(heroGraphic)

function heroGraphic(): JSX.Element {
    const logoSize = '250px'

    return (
        <Flex direction={'column'} w={'full'}>
            <Center>
                <Image src={'image/logo_braille_tutor.webp'} alt={'Brailliac Logo'} w={logoSize} h={logoSize} />
            </Center>
            <Center marginTop={10}>
                <Text textStyle={'h1'} textAlign={'center'}>
                    <chakra.span textColor={'logo1'}>Brailliac</chakra.span> makes learning Braille fast, free, and fun
                </Text>
            </Center>
        </Flex>
    )
}
