import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import {AppItem} from "../../../../../domain/model/AppItem";
import {AppSpotlightHeader} from "./AppSpotlightHeader";
import {AppSpotlightBody} from "./body/AppSpotlightBody";
import {AppSpotlightFooter} from "./AppSpotlightFooter";

export const AppSpotlight = React.memo(appSpotlight)

interface Props {
    app: AppItem
    onDownloadClick: () => void;
}

function appSpotlight(props: Props): JSX.Element {
    const {app, onDownloadClick} = props
    const accentColor = app.accentColor

    return (
        <Flex bgColor={accentColor} borderRadius={'10px'} w={'full'} direction={'column'}>
            <AppSpotlightHeader logoSrc={app.logoSrc} name={app.name} description={app.description} />
            <Box paddingX={1}>
                <AppSpotlightBody detailPages={app.detailPages} accentColor={accentColor} />
            </Box>
            <AppSpotlightFooter onDownloadClick={onDownloadClick} />
        </Flex>
    )
}
