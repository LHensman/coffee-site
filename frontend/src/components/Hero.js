import { Fade } from 'react-reveal'


const Hero = () => {

    const orderNow = () => {
        window.scrollTo({
            top: 1150,
            behavior: 'smooth'
        })
    }

    return (
        <Fade top>
            <section
                className="hero section"
                id="home"
                style={{ backgroundImage: `url(./media/bg-hero.jpg)` }}
            >
                <h1 className="hero__title --biggest-font-size">
                    Slurp
                </h1>
                <button className="hero__button" onClick={orderNow}>Order Now</button>
            </section>
        </Fade>

    )
}

export default Hero