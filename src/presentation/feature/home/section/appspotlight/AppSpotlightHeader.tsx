import React from "react";
import {Center, Flex, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

export const AppSpotlightHeader = React.memo(appSpotlightHeader)

interface Props {
    logoSrc: string
    name: string
    description: string
}

function appSpotlightHeader(props: Props): JSX.Element {
    const {logoSrc, name, description} = props

    const logoSize = '96px'

    return (
        <Flex direction={'row'} padding={4}>
            <Image src={logoSrc} alt={''} w={logoSize} h={logoSize} />
            <Center marginStart={7}>
                <Flex direction={'column'}>
                    <Text textStyle={'h2'} textColor={'white'}>{name}</Text>
                    <Text textStyle={'content'} textColor={'white'}>{description}</Text>
                </Flex>
            </Center>
        </Flex>
    )
}
