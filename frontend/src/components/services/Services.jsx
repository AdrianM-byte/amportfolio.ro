function Services() {
    return (
        <section id="services" className="services">
            <div className="services-card">
                <h2 className="section-title">My Services</h2>

                <div className="section-divider"></div>

                <div className="services-grid">
                    <div className="service-box">
                        <h3> QA Engineering</h3>

                        <p>
                            Frontend and backend testing,
                            smoke, sanity, regression, and integration testing,
                            combined with SQL verification,
                            ETL workflows, and quality assurance processes.        
                        </p>
                    </div>

                    <div className="service-box">
                        <h3>Python Tooling</h3>
                        <p>
                            Internal validation tools, reporting utilities,
                            automation-oriented workflows,
                            and scalable Python-based quality solutions.
                        </p>
                    </div>

                    <div className='service-box'>
                        <h3>Professional Website Creation</h3>

                        <p>
                            Professional portfolio websites,
                            business landing pages,
                            website rebuilds and maintenance,
                            responsive frontend implementation,
                            and modern UI-focused layouts.
                        </p>
                    </div>

                    <div className="service-box">
                        <h3> Supporting Design Work </h3>
                        <p>
                            Basic logo creation,
                            supporting visual assets,
                            portfolio-oriented layouts,
                            and presentation-focused design elements
                            for websites and business pages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services