import React from "react";
import {Center, Flex, Text, Box, HStack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {Clickable} from "../../../../common/Clickable";
import {AppItemDownloadSource} from "../../../../../domain/model/appitem/AppItemDownloadSource";
import {AppItem} from "../../../../../domain/model/appitem/AppItem";
import {Store} from "../../../../../domain/model/Store";

export const AppSpotlightHeader = React.memo(appSpotlightHeader)

interface Props {
    app: AppItem
    onDownloadClick: (source: AppItemDownloadSource) => void
}

function appSpotlightHeader(props: Props): JSX.Element {
    const {app, onDownloadClick} = props

    const logoSize = {base: '64px', md: '80px', lg: '96px'}

    const downloadButtons = app.downloadSources.map((it) =>
        getStoreButton(it, onDownloadClick)
    )

    return (
        <Flex direction={{base: 'column', xl: 'row'}} paddingX={4}>
            <Flex direction={'row'}>
                <Image src={app.logoSrc} alt={''} w={logoSize} h={logoSize}/>
                <Center marginStart={{base: 4, md: 7}}>
                    <Flex direction={'column'}>
                        <Text textStyle={'h2'} textColor={'white'}>{app.name}</Text>
                        <Text textStyle={'content'} textColor={'white'}>{app.description}</Text>
                    </Flex>
                </Center>
            </Flex>
            <Box flex={1} minW={4} />
            <Box h={3} />
            <HStack
                spacing={3}
            >
                {downloadButtons}
            </HStack>
        </Flex>
    )
}

function getStoreImageSource(store: Store) {
    switch (store) {
        case Store.Fdroid:
            return 'image/store_fdroid.png'
        case Store.Play:
            return 'image/store_play.png'
    }
}

function getStoreImageDescription(store: Store) {
    switch (store) {
        case Store.Fdroid:
            return 'Get it on F-Droid'
        case Store.Play:
            return 'Get it on Google Play'
    }
}

function getStoreButton(
    downloadSource: AppItemDownloadSource,
    onClick: (downloadSource: AppItemDownloadSource) => void
) {
    const store = downloadSource.store
    const source = getStoreImageSource(store)
    const description = getStoreImageDescription(store)
    return <Clickable
        key={store}
        onClick={() => onClick(downloadSource)}
    >
        <Center >
            <Image src={source} alt={description} maxH={{base: '60px', xl: '80px'}}/>
        </Center>
    </Clickable>
}