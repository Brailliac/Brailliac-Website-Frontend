import React from "react";
import {Box, Center, Flex, Text, VStack} from "@chakra-ui/react";
import {HeroGraphic} from "./section/herographic/HeroGraphic";
import {AppSpotlight} from "./section/appspotlight/AppSpotlight";
import {AppItem} from "../../../domain/model/AppItem";
import {getAppItems} from "../../../domain/content/appitem/getAppItems";
import {openInNewTab} from "../../util/openInNewTab";
import {ChevronIcon} from "../../common/icon/ChevronIcon";

export const IndexPage = React.memo(indexPage)

function indexPage(): JSX.Element {
    const apps: AppItem[] = getAppItems()

    const appSpotlights = apps.map(it => (
        <AppSpotlight
            key={it.name}
            app={it}
            onDownloadClick={() => onDownloadClick(it)}
        />
    ))

    function onDownloadClick(app: AppItem) {
        const link = app.playStoreUrl
        openInNewTab(link)
    }

    return (
        <Flex direction={'column'}>
            <Center paddingX={{base: 5, md: 8, lg: 12}} marginTop={12}>
                <HeroGraphic />
            </Center>
            <Text textAlign={'center'} marginTop={{base: 14, md: 16}} textStyle={'content'}>
                Scroll to see how...
            </Text>
            <Center marginTop={-2} opacity={0.4}>
                <Box w={8}>
                    <ChevronIcon />
                </Box>
            </Center>
            <VStack spacing={20} paddingX={{base: 4, md: 8, lg: 14}} marginTop={24}>
                {appSpotlights}
            </VStack>
            <Box h={20} />
        </Flex>
    )
}
