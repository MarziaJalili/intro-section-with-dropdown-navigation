import Header from "./components/Header"
import Companies from "./components/Companies"
import "./style.css"
function App() {


    return (
        <main>
            <Header />
            <picture>
                <source srcSet="./images/image-hero-desktop.png" media="(min-width: 65em)" />
                <source srcSet="./images/image-hero-mobile.png" media="(max-width: 64.9em)" />
                <img src="./images/image-hero-mobile.png" alt="image-hero" />
            </picture>

            <section className="info">
                <h1>Make remote work</h1>

                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                <button>Learn more</button>

                <Companies />


            </section>
        </main>
    )
}

export default App;