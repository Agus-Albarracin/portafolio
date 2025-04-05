"use client"

import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function GitProys() {
    return (
        <div className="relative" id="proys">
            <br></br>
            <br></br>
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        Repositorios de proyectos públicos.
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">+30 proyectos Full Stack y colaboraciones. <br />
                        Poseo repositorios privados que por política de empresa no me permiten cambiar su visibilidad.</p>
                    </div>
                </Reveal>
            </div>
            
            <Slide />
        </div>
    )
}