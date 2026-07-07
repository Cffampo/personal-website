function About() {
    return (
        <>
            <section className="profile-section fade-in">
                <div className="profile-collage">
                    <img src="/profile.JPG" alt="Standard PFP of Carl" className="collage-img" />
                    <img src="/profile2.JPG" alt="Carl DJing" className="collage-img" />
                    <img src="/profile3.JPG" alt="Carl at event with friends" className="collage-img" />
                    <img src="/profile4.jpeg" alt="Carl with brother" className="collage-img" />
                    <img src="/profile5.jpg" alt="Carl with friends" className="collage-img" />
                    <img src="/profile6.JPG" alt="Carl in costume" className="collage-img" />
                </div>

                <div className="profile-info">
                    <h2>Carl Fampo</h2>
                    <p><strong>Major:</strong> Computer Science</p>
                    <p><strong>Minor:</strong> Informatics, Data Science</p>
                    <p><strong>School:</strong> Indiana University - Bloomington</p>
                    <p><strong>Specialization:</strong> Software Engineering</p>
                    <p><strong>Sports Teams:</strong> Colts and Pacers</p>
                    <p><strong>Favorite Food:</strong> Sushi</p>
                    <p><strong>Favorite Genre of Music:</strong> House Music</p>
                    <p><strong>Favorite Series:</strong> Breaking Bad</p>
                    <p><strong>Favorite Movie:</strong> F1 Movie</p>
                    <p><strong>Favorite Color:</strong> Blue</p>

                </div>
            </section>

            <div className="section-divider"></div>

            <section className="bio-section fade-in">
                <h2>Bio</h2>
                <p>Hi, I’m <strong>Carl Fampo</strong> 👋. I’m a Computer Science student at Indiana University with a passion
                    for building impactful projects, exploring new technologies 💻, and pushing myself both mentally and
                    physically 🏋️‍♂️.</p>

                <p>Ever since I first coded in Python 🐍, I’ve loved the challenge of taking an idea from concept to reality. My
                    tech stack includes Java ☕, Python 🐍, JavaScript ✨, SQL 🗄️, HTML5 & CSS3 🌐, and Kotlin 🟣. I’m always
                    exploring new tools to expand my skill set 🚀.</p>

                <p>Outside of coding, I’m all about staying active and creative. Volleyball 🏐 keeps me competitive, hitting the
                    gym 🏋️‍♂️ keeps me disciplined, and DJing 🎧 lets me express my musical side. Curating playlists 🎶 has
                    become one of my favorite ways to combine creativity and personal taste into something others can enjoy.</p>

                <p>Beyond hobbies, I value growth and purpose 🌱. I strive to get closer to God 🙏, continually improve my
                    skills 🛠️, and seek out experiences that challenge me to think differently and work harder.</p>

                <p>When I’m not coding or training, you’ll often find me experimenting with new tech 💡, discovering new music
                    🎵, or collaborating with friends 🤝 on side projects. I love challenges that push me to learn, laugh, and
                    grow.</p>
            </section>

            <section className="skills-section fade-in">
                <h3>Languages</h3>
                <div className="skills-cards">
                    <div className="skill-card language">Java ☕</div>
                    <div className="skill-card language">JavaScript ✨</div>
                    <div className="skill-card language">Python 🐍</div>
                    <div className="skill-card language">SQL 🗄️</div>
                    <div className="skill-card language">HTML5 🌐</div>
                    <div className="skill-card language">CSS3 🎨</div>
                </div>

                <h3>Frameworks & Technologies</h3>
                <div className="skills-cards">
                    <div className="skill-card tool">React ⚛️</div>
                    <div className="skill-card tool">Node.js 🟢</div>
                    <div className="skill-card tool">Express.js 🚀</div>
                    <div className="skill-card tool">MongoDB 🍃</div>
                    <div className="skill-card tool">Docker 🐳</div>
                    <div className="skill-card tool">REST APIs 🌐</div>
                </div>

                <h3>Tools</h3>
                <div className="skills-cards">
                    <div className="skill-card tool">Git & GitHub 🐙</div>
                    <div className="skill-card tool">VS Code 🖥️</div>
                    <div className="skill-card tool">IntelliJ IDEA 💡</div>
                    <div className="skill-card tool">Android Studio 🤖</div>
                    <div className="skill-card tool">Postman 📬</div>
                    <div className="skill-card tool">Google Looker Studio 📊</div>
                </div>

                <h3>Professional Skills</h3>
                <div className="skills-cards">
                    <div className="skill-card lifestyle">Problem Solving 🧩</div>
                    <div className="skill-card lifestyle">Communication 🗣️</div>
                    <div className="skill-card lifestyle">Team Collaboration 🤝</div>
                    <div className="skill-card lifestyle">Leadership 🏆</div>
                    <div className="skill-card lifestyle">Time Management ⏰</div>
                    <div className="skill-card lifestyle">Adaptability 🚀</div>
                </div>
            </section>

            <footer>
                <p>© 2025 Carl Fampo</p>
            </footer>


        </>
    )
}

export default About