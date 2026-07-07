function Home() {
    return (
        <>
            <section className="hero fade-in">
                <h1>Carl Fampo</h1>
                <p className="tagline">student • developer • athlete</p>
                <div className="accent-line"></div>
            </section>

            <section className="quick-facts fade-in">
                <div className="fact-card-wrapper">
                    <div className="fact-card">
                        <h3>Tech Stack</h3>
                        <p>Java • Python • JavaScript • SQL • Kotlin</p>
                    </div>
                </div>

                <div className="fact-card-wrapper">
                    <div className="fact-card">
                        <h3>What I'm Into</h3>
                        <p>Gym • Volleyball • DJing • House Music • NBA</p>
                    </div>
                </div>

                <div className="fact-card-wrapper">
                    <div className="fact-card">
                        <h3>Next Moves</h3>
                        <p>Internship • Faith • Projects</p>
                    </div>
                </div>
            </section>

            <section className="content-grid fade-in">
                <div className="about">
                    <h2>Introduction</h2>
                    <p>Hey, I'm Carl - a CS student, volleyball junkie, gym rat, and part-time DJ. I'm all about building cool
                        stuff, learning new skills, and keeping life energetic. Stick around and check out what I'm up to!</p>
                    <p>When I'm not coding or at the gym, you'll probably catch me curating playlists, experimenting with new
                        tech, or just vibing with friends. Always down for a challenge, a laugh, or a good spike on the court.
                    </p>
                </div>

                <div className="headshot">
                    <img src="/profile.JPG" alt="Headshot of Carl" />
                </div>
            </section>

            <footer>
                <p>© 2025 Carl Fampo</p>
            </footer>
        </>
    )
}

export default Home