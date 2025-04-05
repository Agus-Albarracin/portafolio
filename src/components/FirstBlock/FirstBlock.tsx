"use client"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { RiArrowRightUpLine } from "react-icons/ri";



export function FirstBlock() {
    return (
        <div className="relative p-4 md:pt-16">
            <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-10">
                <div className="px-4 md:px-16 flex flex-col justify-center">
                    <Reveal>
                        <h1 className="text-5xl font-semibold leading-tight">
                        <span className="block degradedBlue bg-blueLight">Hola, soy Agus</span>Full Stack Dev
                        <span className="inline-flex items-center gap-2 text-3xl">
                           <span className="text-black">en&nbsp;</span>
                             <a href="https://digitalvibra.com/es/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline inline-flex items-center gap-2" >
                             VIBRA Digital <RiArrowRightUpLine />
                             </a>
                           </span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-xl mt-10 text-lg leading-relaxed">
                            He trabajado en proyectos como landing pages, sitios corporativos, blogs, e-commerce, dropshipping, dashboards, ERP (Sistemas de gestión para empresas), CRM (Gestión de relación con clientes), formularios y juegos online.
                            <br /><br />
                            Me especializo en <strong>Node.js</strong> y <strong>React</strong>, poseo experiencia en microservicios con <strong>Docker</strong> y <strong>Nginx</strong>, además de una amplia experiencia trabajando con base de datos  <strong>SQL</strong> y <strong>NoSQL</strong>.
                        </p>
                    </Reveal>
                </div>

                <MotionTransition className="flex items-center justify-center">
                <div className="w-full max-w-md px-4 py-6 md:px-16 md:py-12 bg-radialBlack shadow-dark rounded-3xl">
                        <Reveal>
                            <h2 className="text-xl font-semibold mb-4">Algunas tareas de mi día a día:</h2>
                            <ul className="list-disc pl-5 space-y-3 text-base">
                                <li>Gestión y optimización de datos masivos</li>
                                <li>Diseño de arquitecturas escalables y seguras</li>
                                <li>Implementación de pasarelas de pago</li>
                                <li>Aplicación de principios SOLID en servidores</li>
                                <li>Desarrollo frontend con buenas prácticas</li>
                                <li>Optimización de sistemas financieros</li>
                                <li>Seguridad en APIs y páginas web</li>
                                <li>Automatización y CI/CD para despliegues</li>
                                <li>Trabajo en equipos ágiles con Scrum</li>
                            </ul>
                        </Reveal>
                    </div>
                </MotionTransition>
            </div>
        </div>
    )
}

