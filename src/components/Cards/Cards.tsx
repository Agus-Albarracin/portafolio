"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./Cards.data";
import Image from "next/image";

export function Cards() {
    return (
        <div className="relative px-6  md:mt-16 pt-10 pb-10" id="tarjetas">
            <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl font-semibold">Puedes arrastrar las cartas para ver 
                        <span className="block degradedBlue bg-blueLight">algunos de mis proyectos...</span>
                    </h2>
                    <br />
                    <h2 className="text-xl mb-4">
                     Al hacer <strong>click</strong> en alguna, se abrirá una nueva pestaña para ver el sitio.
                    </h2>
                </Reveal>
                <div className="px-0 mr-20 lg:mt-0 md:mt-8">
                    <MotionTransition>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="w-[340px] h-[220px] md:w-[480px] md:h-[300px]"
                        >
                                  {dataCards.map(({ image, id, link }) => (
                                       <SwiperSlide key={id} className="flex items-center justify-center">
                                         <a
                                           href={link}
                                           target="_blank"
                                           rel="Link to projects"
                                           className="w-full h-full block"
                                         >
                                           <Image
                                             src={image}
                                             alt={`Card ${id}`}
                                             width={1920}
                                             height={1080}
                                             className="w-full h-full rounded-xl"
                                           />
                                         </a>
                                       </SwiperSlide>
                                    ))}
                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}