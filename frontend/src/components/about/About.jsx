function About({ t }) {
    return (
        <section id="about" className="about">

            <div className="about-card">

                <p className="section-eyebrow">
                    {t.about.section_eyebrow}
                </p>

                <h2 className="section-title">
                    {t.about.section_title}
                </h2>

                <div className="section-divider"></div>

                <div className="about-layout">

                    <div className="about-copy">

                        <p className="about-text">
                            {t.about.about_text_1}
                        </p>

                        <div className="section-divider"></div>

                        <p className="about-text">
                            {t.about.about_text_2}
                        </p>

                        <div className="section-divider"></div>

                        <p className="about-text">
                            {t.about.about_text_3}
                        </p>

                    </div>

                    <div className="about-panel">

                        <h3>
                            {t.about.about_panel_h}
                        </h3>

                        <ul>

                            <li>
                                {t.about.about_panel_1}
                            </li>

                            <div className="section-divider"></div>

                            <li>
                                {t.about.about_panel_2}
                            </li>

                            <div className="section-divider"></div>

                            <li>
                                {t.about.about_panel_3}
                            </li>

                            <div className="section-divider"></div>

                            <li>
                                {t.about.about_panel_4}
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About