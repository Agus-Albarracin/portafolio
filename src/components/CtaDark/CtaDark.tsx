import { Reveal } from "../Reveal";

export function CtaDark() {
    return (
        <div className="px-6 my-20 md:mt-36" id="perfil">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-3xl font-bold">
                                Actualmente estoy buscando migrar a una empresa.
                            </h3>
                        </Reveal>
                        <Reveal>
                            <p>
                                Puedes descargar mi carta de vida haciendo click en el botón.
                            </p>
                        </Reveal>
                    </div>

                    <a
                        href="/assets/Albarracin-Agustin.pdf"
                        download
                        className="px-4 py-3 mx-auto rounded-md bg-blueRadial text-white text-center"
                    >
                        <Reveal>
                            Descargar CV
                        </Reveal>
                    </a>
                </div>
            </div>
        </div>
    );
}