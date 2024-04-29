import React from "react";
import {Box, Center, Flex, Text, VStack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {Clickable} from "../../common/Clickable";
import {openInCurrentTab} from "../../util/Window";

export const PrivacyPage = React.memo(privacyPage)

function privacyPage(): JSX.Element {
    const logoSize = '120px'

    function openHome() {
        const url = 'https://brailliac.com'
        openInCurrentTab(url)
    }

    return (
        <Flex direction={'column'} w={'full'} paddingX={12}>
            <Box h={10} />

            <Center>
                <Clickable onClick={openHome}>
                    <Image src={'image/logo_braille_tutor.webp'} alt={'Brailliac Logo'} w={logoSize} h={logoSize} />
                </Clickable>
            </Center>

            <Box h={12} />
            <Text textStyle={'h1'}>
                Privacy Policy
            </Text>
            <Box h={3} />
            <Text textStyle={'h3'}>
                Brailliac is not interested in collecting your personal data.
            </Text>

            <Box h={10} />
            <Text textStyle={'h2'}>
                What data do Braille Tutor and Braille Keyboard collect?
            </Text>
            <Box h={3} />
            <Text textStyle={'h3'}>
                <b>Nothing!</b> 
                <br/>
                Brailliac apps do <b>not</b> collect, store, or transmit any data.
                <br/>
                They do <b>not</b> include any advertising or analytics software.
                <br/>
                They do <b>not</b> send any data to third parties.
            </Text>

            <Box h={10} />
            <Text textStyle={'h2'}>
                Does Braille Keyboard connect to the internet?
            </Text>
            <Box h={3} />
            <Text textStyle={'h3'}>
                <b>No!</b> 
                <br/>
                Brailliac: Braille Keyboard <b>never</b> connects to the internet. 
                <br/>
                This way you can be sure that no data ever leaves your device.
            </Text>

            <Box h={10} />
            <Text textStyle={'h2'}>
                Questions?
            </Text>
            <Box h={3} />
            <Text textStyle={'h3'}>
                If you have any questions or concerns, please feel free to contact Brailliac via brailliac@gmail.com
            </Text>
            <Box h={3} />
        </Flex>
    )
}