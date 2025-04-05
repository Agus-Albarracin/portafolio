"use client"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataSetTech } from './SetTech.data'
import Image from 'next/image'
import { CtaDark } from '../CtaDark'

export function SetTech() {
    return (
        <div className="relative py-8 md:py-24" id="servicios">
            <div className="relative w-full overflow-hidden">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 12,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay: 5,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                >
                    <div className="absolute flex">
                        {dataSetTech.map(({ id, image }) => (
                            <SwiperSlide key={id} className="flex items-center slider-horizontal">
                                <Image src={`/assets/${image}`} alt="Payment" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

            <CtaDark />
        </div>
    )
}