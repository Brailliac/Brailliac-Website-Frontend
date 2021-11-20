import React, {useState} from "react";
import {Box, Center, Flex, useBreakpointValue} from "@chakra-ui/react";
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

    const isBelowMd = useBreakpointValue({base: true, md: false}) ?? false
    const slidesPerView = isBelowMd ? 1.2 : 1.5

    const pageSlides = detailPages.map(it => (
        // `height: auto` will make each slide the same height
        <SwiperSlide key={it.title} style={{height: 'auto'}} >
            {/*
                Add padding to separate pages.
                We don't use Swiper.spaceBetween,
                as that breaks the draggable region.
            */}
            <Box paddingX={{base: 2, md: 8}} h={'full'}>
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
        <Flex
            bgColor={'appSpotlightBody'}
            paddingTop={{base: 5, md: 8}}
            paddingBottom={{base: 3, md: 5}}
            direction={'column'}
        >
            <Box>
                <Swiper
                    onSwiper={onSwiperReady}
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    grabCursor={true}
                    onSlideChange={onSlideChange}
                >
                    {pageSlides}
                </Swiper>
            </Box>
            <Center marginTop={{base: 2, md: 3}}>
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
