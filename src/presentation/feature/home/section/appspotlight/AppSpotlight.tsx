import React from "react";
import {Box, Flex, BoxProps} from "@chakra-ui/react";
import {AppItem} from "../../../../../domain/model/appitem/AppItem";
import {AppSpotlightHeader} from "./AppSpotlightHeader";
import {AppSpotlightBody} from "./body/AppSpotlightBody";
import { AppItemDownloadSource } from "../../../../../domain/model/appitem/AppItemDownloadSource";

export const AppSpotlight = React.memo(appSpotlight)

interface Props extends BoxProps {
    app: AppItem
    onDownloadClick: (source: AppItemDownloadSource) => void
}

function appSpotlight(props: Props): JSX.Element {
    const {app, onDownloadClick, ...boxProps} = props
    const accentColor = app.accentColor

    return (
        <Flex bgColor={accentColor} borderRadius={'10px'} w={'full'} direction={'column'} {...boxProps} >
            <Box h={3} />
            <AppSpotlightHeader 
                app={app}
                onDownloadClick={onDownloadClick}
            />
            <Box h={3} />
            <Box paddingX={1}>
                <AppSpotlightBody detailPages={app.detailPages} accentColor={accentColor} />
            </Box>
            <Box h={1}/>
        </Flex>
    )
}
