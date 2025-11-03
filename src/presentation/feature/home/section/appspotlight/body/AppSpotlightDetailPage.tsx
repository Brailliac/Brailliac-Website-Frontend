import React from "react";
import {AppItemDetailPage} from "../../../../../../domain/model/appitem/AppItemDetailPage";
import {ImageOrientation} from "../../../../../../domain/model/appitem/ImageOrientation";
import {Box, Flex, Spacer, Text, Center} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

export const AppSpotlightDetailPage = React.memo(appSpotlightDetailPage)

interface Props {
    page: AppItemDetailPage
    accentColor: string
}

function appSpotlightDetailPage(props: Props): JSX.Element {
    const {page, accentColor} = props
    const title = page.title
    const imageOrientation = page.imageOrientation
    const imageAlt = `Screenshot of the ${title} feature in the app`

    const imageHeight = {base: '300px', md: '350px', lg: '400px', xl: '500px'}

    const isPortraitImage = imageOrientation === ImageOrientation.Portrait;

    const elevation = '2px'
    const containerShadow = `0px ${elevation} ${elevation} rgba(0, 0, 0, 0.25)`

    // Landscape images show below the text, portrait images alongside
    const layoutDirection = isPortraitImage ? 'row' : 'column'

    const imageComponentPortrait = (
        <Image
            h={imageHeight}
            objectFit={'contain'}
            marginX={{base: 2, md: 4}}
            marginTop={{base: 2, md: 6}}
            src={page.imageSrc}
            alt={imageAlt}
        />
    )
    const imageComponentPortraitLandscape = (
        <Center>
            <Image
                w={'85%'}
                objectFit={'contain'}
                marginX={{base: 2, md: 4}}
                marginTop={{base: 2, md: 6}}
                marginBottom={3}
                src={page.imageSrc}
                alt={imageAlt}
            />
        </Center>
    )
    const imageComponent = isPortraitImage ? imageComponentPortrait : imageComponentPortraitLandscape

    return (
        // Padding to avoid clipping shadow
        <Box padding={elevation} h={'full'} >
            <Flex
                // For screens smaller than 'sm', the image always shows below the text
                direction={{base: 'column', sm: layoutDirection}}
                bgColor={'white'}
                borderRadius={'15px'}
                boxShadow={containerShadow}
                h={'full'}
            >
                <Flex
                    direction={'column'}
                    marginTop={{base: 3, md: 4}}
                    paddingStart={5}
                    paddingEnd={{base: 5, sm: 1}}
                >
                    <Text textStyle={'h3'} textColor={accentColor}>{title}</Text>
                    <Text textStyle={'content'} marginTop={{base: 1, md: 4}} textColor={'darkText'}>{page.description}</Text>
                </Flex>
                <Spacer />
                {imageComponent}
            </Flex>
        </Box>
    )
}
