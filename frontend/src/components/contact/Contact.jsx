function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-card">
                <h2 className="section-title">Contact Me</h2>

                <div className="section-divider"></div>

                <p className="contact-description">
                    Interested in collaboration, QA-oriented projects,
                    automation-focused solutions, or professional website creation?
                </p>

                <div className="contact-links">
                    <p className="contact-email">
                        myemail@mail.co
                    </p>

                    <div className="contact-buttons">
                        <a href="https://www.linkedin.com/in/adrian-marcu-83b6b7124/"
                            target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        
                        <a href="https://github.com/AdrianM-byte"
                            target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                    </div>
                    
                </div>

                <form className="contact-form">
                    <input type="email" placeholder="Your Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Your message" rows="8"></textarea>
                    <button type="submit">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Contact