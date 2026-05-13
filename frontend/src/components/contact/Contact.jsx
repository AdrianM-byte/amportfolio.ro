function Contact({ t }) {
    return (
        <section id="contact" className="contact">

            <div className="contact-card">

                <p className="section-eyebrow">
                    {t.contact.section_eyebrow}
                </p>

                <h2 className="section-title">
                    {t.contact.section_title}
                </h2>

                <div className="section-divider"></div>

                <p className="contact-description">
                    {t.contact.contact_description}
                </p>

                <div className="contact-highlights">

                    <span>
                        {t.contact.contact_highlights_1}
                    </span>

                    <span>
                        {t.contact.contact_highlights_2}
                    </span>

                    <span>
                        {t.contact.contact_highlights_3}
                    </span>

                    <span>
                        {t.contact.contact_highlights_4}
                    </span>

                </div>

                <div className="contact-links">

                    <a
                        className="contact-email"
                        href="mailto:adrianmarcu.tech@gmail.com"
                    >
                        adrianmarcu.tech@gmail.com
                    </a>

                    <div className="contact-buttons">

                        <a
                            href="https://www.linkedin.com/in/adrian-marcu-83b6b7124/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/AdrianM-byte"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact