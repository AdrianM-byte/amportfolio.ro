function Hero({ t }) {
    return (
        <section id="hero" className="hero">
            <div className="hero-card">
                <div className="hero-content">

                    <p className="hero-subtitle">
                        {t.hero.hero_subtitle}
                    </p>

                    <h1 className="hero-title">
                        {t.hero.hero_title}
                    </h1>

                    <div className="hero-divider"></div>

                    <p className="hero-description hero-lead">
                        {t.hero.hero_description}
                    </p>

                    <div className="hero-divider"></div>

                    <p className="hero-description hero-lead">
                        {t.hero.hero_lead}
                    </p>

                    <div className="hero-divider"></div>

                    <div className="hero-actions">

                        <a className="primary-action" href="#contact">
                            {t.hero.primary_action}
                        </a>

                        <a className="secondary-action" href="#services">
                            {t.hero.secondary_action}
                        </a>

                    </div>

                    <div className="hero-proof">

                        <div>
                            <strong>{t.hero.hero_proof_1_str}</strong>
                            <span>{t.hero.hero_proof_1}</span>
                        </div>

                        <div>
                            <strong>{t.hero.hero_proof_2_str}</strong>
                            <span>{t.hero.hero_proof_2}</span>
                        </div>

                        <div>
                            <strong>{t.hero.hero_proof_3_str}</strong>
                            <span>{t.hero.hero_proof_3}</span>
                        </div>

                        <div>
                            <strong>{t.hero.hero_proof_4_str}</strong>
                            <span>{t.hero.hero_proof_4}</span>
                        </div>

                    </div>

                    <div className="hero-divider"></div>

                    <div className="hero-skills">

                        <div className="skill-card">
                            <span className="card-kicker">
                                {t.hero.card_kicker_1}
                            </span>

                            <h3>
                                {t.hero.card_kicker_1_h}
                            </h3>

                            <p>
                                {t.hero.card_kicker_1_p}
                            </p>
                        </div>

                        <div className="skill-card">

                            <span className="card-kicker">
                                {t.hero.card_kicker_2}
                            </span>

                            <h3>
                                {t.hero.card_kicker_2_h}
                            </h3>

                            <p>
                                {t.hero.card_kicker_2_p}
                            </p>

                        </div>

                        <div className="skill-card">

                            <span className="card-kicker">
                                {t.hero.card_kicker_3}
                            </span>

                            <h3>
                                {t.hero.card_kicker_3_h}
                            </h3>

                            <p>
                                {t.hero.card_kicker_3_p}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero