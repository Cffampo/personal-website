function Projects() {
    return (
        <>
            <section className="hero fade-in">
                <h1>Projects</h1>
                <p className="tagline">check out what i've built!</p>
                <div className="accent-line"></div>
            </section>

            <div className="project-section">
                <div className="project-card">
                    <img src="/FitTrack.png" alt="FitTrack app" />
                    <div className="project-info">
                        <h3>FitTrack</h3>
                        <p>A full-stack fitness tracking application built with the MERN stack and TypeScript. FitTrack allows users to securely create, manage, and track their workouts through a modern, responsive interface. The application features JWT authentication, protected API routes, and a RESTful backend powered by Express and MongoDB.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        <a href="https://github.com/Cffampo/FitTrack" target="_blank"> Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/FinSight.png" alt="etch-a-sketch app" />
                    <div className="project-info">
                        <h3>FinSight</h3>
                        <p>An AI-powered financial document assistant that lets you ask natural language questions about SEC filings using Retrieval-Augmented Generation (RAG).Built with Python, LangChain, ChromaDB, and the Anthropic API (Claude).</p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        <a href="https://finsight-ni2pjnctdgwxa2fqjvmhyv.streamlit.app/" target="_blank"> Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/AWS.png" alt="tic-tac-toe app" />
                    <div className="project-info">
                        <h3>AWS Cost Monitor</h3>
                        <p>A serverless AWS cost monitoring system that tracks cloud spending, sends real-time billing alerts, generates automated weekly reports, and updates a live dashboard hosted on Amazon S3.</p>
                        <div className="project-links">
                            <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>© 2025 Carl Fampo</p>
            </footer>

        </>
    )
}

export default Projects