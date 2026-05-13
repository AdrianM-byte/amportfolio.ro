function Services({ t }) {
    return (
        <section id="services" className="services">
            <div className="services-card">

                <p className="section-eyebrow">
                    {t.services.section_eyebrow}
                </p>

                <h2 className="section-title">
                    {t.services.section_title}
                </h2>

                <div className="section-divider"></div>

                <div className="services-grid">

                    <div className="service-box">
                        <span className="service-number">01</span>

                        <h3>
                            {t.services.service_number_1_h}
                        </h3>

                        <p>
                            {t.services.service_number_1_p}
                        </p>
                    </div>

                    <div className="service-box">

                        <span className="service-number">02</span>

                        <h3>
                            {t.services.service_number_2_h}
                        </h3>

                        <p>
                            {t.services.service_number_2_p}
                        </p>

                    </div>

                    <div className="service-box">

                        <span className="service-number">03</span>

                        <h3>
                            {t.services.service_number_3_h}
                        </h3>

                        <p>
                            {t.services.service_number_3_p}
                        </p>

                    </div>

                    <div className='service-box'>

                        <span className="service-number">04</span>

                        <h3>
                            {t.services.service_number_4_h}
                        </h3>

                        <p>
                            {t.services.service_number_4_p}
                        </p>

                    </div>

                    <div className='service-box'>

                        <span className="service-number">05</span>

                        <h3>
                            {t.services.service_number_5_h}
                        </h3>

                        <p>
                            {t.services.service_number_5_p}
                        </p>

                    </div>

                    <div className="service-box">

                        <span className="service-number">06</span>

                        <h3>
                            {t.services.service_number_6_h}
                        </h3>

                        <p>
                            {t.services.service_number_6_p}
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services