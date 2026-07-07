function Projects() {
    return (
        <>
            <section class="hero fade-in">
                <h1>Projects</h1>
                <p class="tagline">check out what i've built!</p>
                <div class="accent-line"></div>
            </section>

            <div class="project-section">
                <div class="project-card">
                    <img src="/FitTrack.png" alt="FitTrack app" />
                    <div class="project-info">
                        <h3>FitTrack</h3>
                        <p>A full-stack fitness tracking application built with the MERN stack and TypeScript. FitTrack allows users to securely create, manage, and track their workouts through a modern, responsive interface. The application features JWT authentication, protected API routes, and a RESTful backend powered by Express and MongoDB.</p>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        <a href="https://github.com/Cffampo/FitTrack" target="_blank"> Live Demo</a>
                    </div>
                </div>

                <div class="project-card">
                    <img src="/FinSight.png" alt="etch-a-sketch app" />
                    <div class="project-info">
                        <h3>FinSight</h3>
                        <p>An AI-powered financial document assistant that lets you ask natural language questions about SEC filings using Retrieval-Augmented Generation (RAG).Built with Python, LangChain, ChromaDB, and the Anthropic API (Claude).</p>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        <a href="https://finsight-ni2pjnctdgwxa2fqjvmhyv.streamlit.app/" target="_blank"> Live Demo</a>
                    </div>
                </div>

                <div class="project-card">
                    <img src="/AWS.png" alt="tic-tac-toe app" />
                    <div class="project-info">
                        <h3>AWS Cost Monitor</h3>
                        <p>A serverless AWS cost monitoring system that tracks cloud spending, sends real-time billing alerts, generates automated weekly reports, and updates a live dashboard hosted on Amazon S3.</p>
                        <div class="project-links">
                            <a href="https://github.com/Cffampo" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Projects