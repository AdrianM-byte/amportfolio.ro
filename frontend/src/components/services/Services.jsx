function Services() {
    return (
        <section id="services" className="services">
            <div className="services-card">
                <p className="section-eyebrow">Services For Companies</p>
                <h2 className="section-title">Focused support for product quality, operations and web presence.</h2>

                <div className="section-divider"></div>

                <div className="services-grid">
                    <div className="service-box">
                        <span className="service-number">01</span>
                        <h3>QA Engineering Support</h3>
                        <p>
                            Frontend and backend testing, smoke, sanity, regression and integration testing
                            for releases that need structured validation and clear reporting.
                        </p>
                    </div>

                    <div className="service-box">
                        <span className="service-number">02</span>
                        <h3>SQL & ETL Validation</h3>
                        <p>
                            Data checks, source-to-target comparisons, SQL verification and ETL workflow
                            validation for business-critical datasets.
                        </p>
                    </div>

                    <div className="service-box">
                        <span className="service-number">03</span>
                        <h3>Automation & Reporting</h3>
                        <p>
                            Practical Python utilities, recurring validation scripts, Excel/reporting flows
                            and lightweight internal tools for repetitive processes.
                        </p>
                    </div>

                    <div className='service-box'>
                        <span className="service-number">04</span>
                        <h3>Presentation Websites</h3>
                        <p>
                            Modern business websites, landing pages and portfolios built with responsive layouts,
                            clear messaging and polished visual hierarchy.
                        </p>
                    </div>

                    <div className='service-box'>
                        <span className="service-number">05</span>
                        <h3>Website Redesign & Maintenance</h3>
                        <p>
                            UI refreshes, content updates, performance-minded cleanup and ongoing maintenance
                            for outdated or inconsistent business websites.
                        </p>
                    </div>

                    <div className="service-box">
                        <span className="service-number">06</span>
                        <h3>Visual Branding Support</h3>
                        <p>
                            Simple visual identity support, basic logo creation, presentation assets and
                            web-ready design elements for small business pages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services
