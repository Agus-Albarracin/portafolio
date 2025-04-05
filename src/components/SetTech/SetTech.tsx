"use client"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { dataSetTech } from "./SetTech.data";
import { CtaDark } from "../CtaDark";

export function SetTech() {
    return (
        <div className="relative py-8 md:py-24" id="servicios">
            <div className="relative w-full overflow-hidden bg-transparent">
                <Marquee
                    gradient={false}
                    speed={70}
                    pauseOnHover={true}
                >
                    {dataSetTech.map(({ id, image }) => (
                        <div
                            key={id}
                            className="mx-6 flex items-center justify-center"
                        >
                            <Image
                                src={`/assets/${image}`}
                                alt={`Tech ${id}`}
                                width={120}
                                height={60}
                                className="object-contain h-[60px] w-[120px]"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            <CtaDark />
        </div>
    );
}
