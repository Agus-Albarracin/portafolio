import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataGitProy } from '../GitProys.data'
import { Reveal } from '@/components/Reveal'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export function Slide() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                678: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="h-[250px] w-full md:max-w-5xl"
        >
            {dataGitProy.map(({ id, name, stack, description, image, link }) => (
                <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
                <a href={link} target="_blank" rel="repositories" className="block w-full h-full">
                    <Reveal>
                        <Image src="/assets/comillas-icon.png" alt="description" width={10} height={10} className="w-auto h-auto" />
                        <div className="my-5">
                            {description}
                        </div>
                        <div className="flex p-2">
                            <Image src={image} alt={name} width="50" height="50" className="mr-5" />
                            <div>
                                <h4 className="text-center">{name}</h4>
                                <p className="text-primaryDark">{stack}</p>
                            </div>
                        </div>
                    </Reveal>
                </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}