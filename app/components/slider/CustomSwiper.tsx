'use client'
import { latestJobsList } from '@/utils/contants';
import React, { useEffect, useRef, ReactNode } from 'react';
import { register } from 'swiper/element/bundle';
import { SwiperProps } from 'swiper/react'

interface ICustomSwiper extends SwiperProps {
    children: ReactNode
}
interface SwiperType extends SwiperProps {
    ref?: React.MutableRefObject<SwiperType | null>;
    initialize?(): void;
    swiper?: { slideNext: () => void; slidePrev: () => void }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': SwiperType,
        }
    }
}

const CustomSwiper = ({ children, virtual, ...rest }: ICustomSwiper) => {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const initializeSwiper = () => {
            register();
            const params = {
                ...rest,
                spaceBetween: 15,
                speed: 600,
                loop: true,
                className: 'cards',
                breakpoints: {
                    1400: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                },

            };

            if (swiperRef.current) {
                Object?.assign(swiperRef.current, params);
                const swiperInstance = swiperRef.current as SwiperType;

                if (typeof swiperInstance.initialize === 'function') {
                    swiperInstance.initialize();
                }
            }

        }
        initializeSwiper()
    }, [children, rest, virtual]);

    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper?.slideNext()
        }
    };
    const handlePrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper?.slidePrev();
        }
    };

    return (
        <>
            {latestJobsList[latestJobsList.length - 1].id <= 3 ? <></> : <button onClick={handleNextSlide} className="swiper-next position-absolute btn p-0"></button>}
            <swiper-container
                ref={swiperRef}
            >
                {children}
            </swiper-container>
            {latestJobsList[latestJobsList.length - 1].id <= 3 ? <></> : <button onClick={handlePrevSlide} className="swiper-prev position-absolute btn p-0"></button>}
        </>

    )
}

export default CustomSwiper