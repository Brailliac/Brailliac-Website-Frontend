import React from "react";
import {Box, Center, Flex, Text, VStack} from "@chakra-ui/react";
import {HeroGraphic} from "./section/herographic/HeroGraphic";
import {AppSpotlight} from "./section/appspotlight/AppSpotlight";
import {AppItem} from "../../../domain/model/AppItem";
import {getAppItems} from "../../../domain/content/appitem/getAppItems";
import {openInNewTab} from "../../util/Window";
import {ChevronIcon} from "../../common/icon/ChevronIcon";
import {Clickable} from "../../common/Clickable";

export const IndexPage = React.memo(indexPage)

function indexPage(): JSX.Element {
    const apps: AppItem[] = getAppItems()

    const appSpotlights = apps.map(it => (
        <AppSpotlight
            id={it.anchor}
            key={it.name}
            app={it}
            onDownloadClick={() => onDownloadClick(it)}
        />
    ))

    function onDownloadClick(app: AppItem) {
        const link = app.playStoreUrl
        openInNewTab(link)
    }

    function openPersonalWebsite() {
        const url = 'https://lukeneedham.com'
        openInNewTab(url)
    }

    return (
        <Flex direction={'column'}>
            <Center paddingX={{base: 5, md: 8, lg: 12}} marginTop={16}>
                <HeroGraphic />
            </Center>
            <Text textAlign={'center'} marginTop={{base: 14, md: 16}} textStyle={'fine'}>
                Scroll to see how...
            </Text>
            <Center marginTop={-2} opacity={0.4}>
                <Box w={8}>
                    <ChevronIcon />
                </Box>
            </Center>
            <VStack spacing={{base: 20, md: 40}} paddingX={{base: 4, md: 8, lg: 14}} marginTop={24}>
                {appSpotlights}
            </VStack>
            <Box h={40} />
            <Flex direction={'column'} paddingX={{base: 3, md: 10}}>
                <Text textStyle={'content'} textAlign={'center'}>
                    Brailliac was created by Luke Needham,
                    to make learning Braille more accessible and enjoyable.
                </Text>
                <Box h={4} />
                <Text textStyle={'content'} textAlign={'center'}>
                    You can learn all about me at{' '}
                    <Clickable onClick={openPersonalWebsite} as='span' textStyle='content' textDecoration='underline'>
                        LukeNeedham.com
                    </Clickable>
                </Text>
            </Flex>
            <Box h={40} />
        </Flex>
    )
}
