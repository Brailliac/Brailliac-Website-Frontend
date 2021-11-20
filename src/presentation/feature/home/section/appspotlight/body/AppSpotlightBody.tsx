import React, {useState} from "react";
import {Box, Center, Flex} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {AppItemDetailPage} from "../../../../../../domain/model/AppItemDetailPage";
import {AppSpotlightDetailPage} from "./AppSpotlightDetailPage";
import {PagerIndicator} from "./PagerIndicator";
import {Swiper as SwiperClass} from "swiper/types";

export const AppSpotlightBody = React.memo(appSpotlightBody)

interface Props {
    detailPages: AppItemDetailPage[]
    accentColor: string
}

function appSpotlightBody(props: Props): JSX.Element {
    const {detailPages, accentColor} = props

    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)
    const [swiper, setSwiper] = useState<SwiperClass>()

    const pageSlides = detailPages.map(it => (
        <SwiperSlide key={it.title}>
            {/*
                Add padding to separate pages.
                We don't use Swiper.spaceBetween,
                as that breaks the draggable region.
            */}
            <Box paddingX={8}>
                <AppSpotlightDetailPage page={it} accentColor={accentColor} />
            </Box>
        </SwiperSlide>
    ))

    function onSwiperReady(swiper: SwiperClass) {
        setSwiper(swiper)
    }

    function onSlideChange(swiper: SwiperClass) {
        const index = swiper.realIndex
        setCurrentPageIndex(index)
    }

    function onIndicatorClick(index: number) {
        swiper?.slideTo(index)
    }

    return (
        <Flex bgColor={'appSpotlightBody'} paddingTop={8} paddingBottom={5} direction={'column'}>
            <Box>
                <Swiper
                    onSwiper={onSwiperReady}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    grabCursor={true}
                    onSlideChange={onSlideChange}
                >
                    {pageSlides}
                </Swiper>
            </Box>
            <Center marginTop={3}>
                <PagerIndicator
                    numPages={pageSlides.length}
                    currentPageIndex={currentPageIndex}
                    color={accentColor}
                    onIndicatorClick={onIndicatorClick}
                />
            </Center>
        </Flex>
    )
}
