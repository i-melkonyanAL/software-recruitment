'use client'
import { ReactNode } from "react"
import { SwiperSlideProps } from "swiper/react"
import 'swiper/css';

interface ICustomSwiperSlide {
    children: ReactNode
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-slide': SwiperSlideProps,
        }
    }
}

const CustomSwiperSlide = ({ children, ...rest }: ICustomSwiperSlide) => {
    return (
        <swiper-slide {...rest}>
            {children}
        </swiper-slide>
    )
}

export default CustomSwiperSlide