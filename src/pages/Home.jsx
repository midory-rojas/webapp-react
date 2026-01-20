import HeroBanner from "../components/HeroBanner"; //Importo HeroBanner come componente

export default function Home() {
    return(
        <>
        <HeroBanner /> {/* Inserisco HeroBanner, cosi esce in pagina home */}
        <section className="container py-5">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ratione aspernatur. Impedit aut vitae repudiandae quidem assumenda! Dolorem, quasi repellat? Ratione vitae ut laborum dolores veritatis doloremque blanditiis eos cumque.</p>
        </section>
        </>
    )
}