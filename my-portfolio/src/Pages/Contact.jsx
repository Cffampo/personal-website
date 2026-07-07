function Contact() {
    return (
        <>
            <section className="hero fade-in">
                <h1>Contact Me</h1>
                <p className="tagline">let's connect</p>
                <div className="accent-line"></div>
            </section>

            <section className="contact-section fade-in">
                <div className="contact-row">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:youremail@gmail.com">cffampo@gmail.com</a>
                </div>

                <div className="contact-row">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:1234567890">317-827-4691</a>
                </div>

                <div className="contact-row">
                    <i className="fa-brands fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/carl-fampo/" target="_blank">LinkedIn</a>
                </div>

                <div className="contact-row">
                    <i className="fa-brands fa-instagram"></i>
                    <a href="https://www.instagram.com/carlfampo/" target="_blank">Instagram</a>
                </div>

                <div className="contact-row">
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                </div>

                <div className="contact-row">
                    <i className="fa-brands fa-spotify"></i>
                    <a href="https://open.spotify.com/user/koocow-us?si=1633b2d4dcea45ad" target="_blank">Spotify</a>
                </div>
            </section>


            <footer>
                <p>© 2025 Carl Fampo</p>
            </footer></>
    )
}

export default Contact