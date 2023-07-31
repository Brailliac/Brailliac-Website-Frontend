import React from "react";
import {Center, Flex, Text, Box} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {Clickable} from "../../../../common/Clickable";

export const AppSpotlightHeader = React.memo(appSpotlightHeader)

interface Props {
    logoSrc: string
    name: string
    description: string
    accentColor: string
    onDownloadClick: () => void
}

function appSpotlightHeader(props: Props): JSX.Element {
    const {logoSrc, name, description, accentColor, onDownloadClick} = props

    const logoSize = {base: '64px', md: '80px', lg: '96px'}

    return (
        <Flex direction={'row'} padding={{base: 3, md: 4}}>
            <Image src={logoSrc} alt={''} w={logoSize} h={logoSize} />
            <Center marginStart={{base: 4, md: 7}}>
                <Flex direction={'column'}>
                    <Text textStyle={'h2'} textColor={'white'}>{name}</Text>
                    <Text textStyle={'content'} textColor={'white'}>{description}</Text>
                </Flex>
            </Center>
            <Box flex={1} minW='20px' />
            <Clickable backgroundColor='white' borderRadius='20px' color={accentColor} onClick={onDownloadClick}>
                <Center>
                    <Flex direction='column' paddingX={3} >
                        <Text textAlign='center' textStyle={'content'}>
                            Download now!
                        </Text>
                        <Box h={1} />
                        <Text paddingX={5} textAlign='center' textStyle={'fine'}>
                            Free on all Android devices
                        </Text>
                    </Flex>
                </Center>
            </Clickable>
        </Flex>
    )
}
