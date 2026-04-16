import Image from "next/image"
import heroshap1 from '@/../public/hero-shape1.png';
import hero from '@/../public/hero.png';


export default function Hero(){
    return (
        <section className='bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]'>

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="w-full lg:1/2">

                <div className="hero-content">
                    <h1 className="GolosText text-3xl font-semibold leading-tight text-[var(--black)] md:text-6xl lg:text-[4rem]">
                        Seu estilo começa aqui.
                        <span className="mt-2 flex items-center gap-3">
                            <Image
                                src={heroshap1}
                                alt="Shape decorativo"
                                className="h-10 w-10 md:h-12 md:w-12"
                            />
                            <span className="text-[var(--second)]">Moda feita</span>
                        </span>
                        <span className="block">com  amor e cuidado.</span>
                    </h1>

                    <p className="GolosText mt-5 text-lg text-[var(--black)] md:text-xl">
                        Frete Gratis nas compras acima de {' '}
                        <span className="font-mono text-[var(--second)]">R$399,00</span>
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button className="GolosText rounded-md bg-[var(--second)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90">
                            Comprar
                        </button>

                        <button className="GolosText rounded-md bg-[var(--white)] border border-[var(--black)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--black)] hover:text-[var(--white)]" >
                            Ver Detalhes
                        </button>
                    </div>
                </div>
              </div>  

                <div className="w-full lg:w-1/2 ">
                    <div className="hero-image">
                        
                        <div className="hero-shape1"></div>
                        <div className="hero-shape2"></div>
                        <div className="border-shap1"></div>
                        <div className="border-shap2"></div>


                        <div className="star-shape"></div>
                        <div className="star-shape2"></div>
                        <div className="star-shape3"></div>

                        <Image
                            src={hero}
                            alt="Imagem do produto"
                            className="relative z-10 w-full md:w-[80%] lg:w-[80%]"
                        />
                    </div>
                </div>
                        
            </div>
        </section>
    )
}