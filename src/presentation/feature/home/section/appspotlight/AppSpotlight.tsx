import React from "react";
import {Box, Flex, BoxProps} from "@chakra-ui/react";
import {AppItem} from "../../../../../domain/model/AppItem";
import {AppSpotlightHeader} from "./AppSpotlightHeader";
import {AppSpotlightBody} from "./body/AppSpotlightBody";

export const AppSpotlight = React.memo(appSpotlight)

interface Props extends BoxProps {
    app: AppItem
    onDownloadClick: () => void;
}

function appSpotlight(props: Props): JSX.Element {
    const {app, onDownloadClick, ...boxProps} = props
    const accentColor = app.accentColor

    return (
        <Flex bgColor={accentColor} borderRadius={'10px'} w={'full'} direction={'column'} {...boxProps} >
            <AppSpotlightHeader 
                logoSrc={app.logoSrc} 
                name={app.name} 
                description={app.description} 
                accentColor={accentColor}
                onDownloadClick={onDownloadClick}
            />
            <Box paddingX={1}>
                <AppSpotlightBody detailPages={app.detailPages} accentColor={accentColor} />
            </Box>
            <Box h={1}/>
        </Flex>
    )
}
