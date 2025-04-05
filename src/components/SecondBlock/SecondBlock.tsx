"use client"

import { Reveal } from "../Reveal"
import { blockinfodata } from "./Blockinfo.data"
import Image from "next/image"

export function SecondBlock() {
    return (
        <div className="relative p-6 md:pt-40 pb-8" id="features">
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-blueLight">¿Por qué deberias</span>
                            darme una<br />
                            <span className="block degradedBlue bg-blueLight">oportunidad?... </span>

                        </h2>
                    </Reveal>
                    <Reveal>
                    <p className="max-w-xl mt-10 text-xl leading-relaxed">
                    Durante mi recorrido profesional me enfoqué en aportar valor real a los equipos. No solo desarrollé interfaces y sistemas eficientes con tecnologías como React y Node.js, sino que también fomenté el trabajo en equipo, la comunicación y la mejora continua. Ayudé a que los proyectos lleguen a tiempo, funcionando bien y pensados para quien los usa, cuidando tanto la parte técnica como humana del proceso.
                    </p>
                    </Reveal>   
                </div>

                <div className="grid items-center py-5 md:p-8">
                    {blockinfodata.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 mb-8 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} alt={title} width={80} height={80} />
                                <div>
                                    <h4 className="text-primary font-semibold text-xl">{title}</h4>
                                    <p className="max-w-xl text-lg leading-relaxed"><em>{description}</em></p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
