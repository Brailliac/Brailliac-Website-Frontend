import React from "react";
import {AppItemDetailPage} from "../../../../../../domain/model/AppItemDetailPage";
import {Box, Flex, Spacer, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

export const AppSpotlightDetailPage = React.memo(appSpotlightDetailPage)

interface Props {
    page: AppItemDetailPage
    accentColor: string
}

function appSpotlightDetailPage(props: Props): JSX.Element {
    const {page, accentColor} = props
    const title = page.title
    const imageAlt = `Screenshot of the ${title} feature in the app`

    const imageHeight = '320px'

    const elevation = '2px'
    const containerShadow = `0px ${elevation} ${elevation} rgba(0, 0, 0, 0.25)`

    return (
        // Padding to avoid clipping shadow
        <Box padding={elevation}>
            <Flex direction={'row'} bgColor={'white'} borderRadius={'15px'} boxShadow={containerShadow}>
                <Flex direction={'column'} marginTop={4} marginStart={5}>
                    <Text textStyle={'h3'} textColor={accentColor}>{title}</Text>
                    <Text textStyle={'content'} marginTop={4} textColor={'darkText'}>{page.description}</Text>
                </Flex>
                <Spacer minW={5} />
                <Image
                    h={imageHeight}
                    marginEnd={4}
                    marginTop={6}
                    src={page.imageSrc}
                    alt={imageAlt}
                />
            </Flex>
        </Box>
    )
}
