import { useState } from 'react'

function Projects() {

    const horizonImages = [
        '/images/horizon-1.png',
        '/images/horizon-2.png',
        '/images/horizon-3.png',
        '/images/horizon-4.png'
    ]

    const [selectedImageIndex, setSelectedImageIndex] = useState(null)

    const openImage = (index) => {
        setSelectedImageIndex(index)
    }

    const closeImage = () => {
        setSelectedImageIndex(null)
    }

    const nextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === horizonImages.length - 1 ? 0 : prev + 1
        )
    }

    const previousImage = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? horizonImages.length - 1 : prev - 1
        )
    }

    return (
        <section id="projects" className="projects">

            <div className="projects-card">

                <p className="section-eyebrow">Selected Work</p>
                <h2 className="section-title">Practical systems built around validation, clarity and business use.</h2>

                <div className="section-divider"></div>

                <div className="projects-grid">

                    <div className="project-unit featured-project">

                        <div className="project-box">

                            <span className="project-label">QA platform concept</span>
                            <h3>Project Horizon</h3>

                            <p>
                                Internal QA-oriented platform designed for SQL validation,
                                ETL comparison workflows, automated reporting,
                                and multi-environment verification.
                            </p>

                            <div className="project-tags">
                                <span>Python</span>
                                <span>Flask</span>
                                <span>SQL</span>
                                <span>SQLAlchemy</span>
                                <span>Pandas</span>
                                <span>QA Automation</span>
                                <span>ETL Validation</span>
                            </div>

                        </div>

                        <div className="project-showcase">

                            <div className="showcase-header">
                                Project Horizon Interface
                            </div>

                            <div className="showcase-gallery">

                                {horizonImages.map((image, index) => (

                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Project Horizon Screenshot ${index + 1}`}
                                        className="showcase-image"
                                        onClick={() => openImage(index)}
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                    <div className="project-unit">

                        <div className="project-box">

                            <span className="project-label">Data utility</span>
                            <h3>Data Comparison Tool</h3>

                            <p>
                                Validation-focused utility for detecting differences
                                between structured datasets and supporting QA workflows.
                            </p>

                            <div className="project-tags">
                                <span>Python</span>
                                <span>Pandas</span>
                                <span>OpenPyXL</span>
                                <span>Validation</span>
                                <span>Flask</span>
                            </div>

                        </div>

                        <div className="project-showcase project-placeholder">
                            <div className="showcase-header">
                                Dataset validation workflow
                            </div>
                            <p>Structured comparison, issue detection and reporting support.</p>
                        </div>

                    </div>

                    <div className="project-unit">

                        <div className="project-box">

                            <span className="project-label">Automation concept</span>
                            <h3>Automated PC Builder - WIP</h3>

                            <p>
                                Smart PC configuration platform with automation,
                                compatibility validation, and multi-store comparison.
                            </p>

                            <div className="project-tags">
                                <span>Python</span>
                                <span>Selenium</span>
                                <span>Web Scraping</span>
                                <span>React</span>
                                <span>Automation</span>
                            </div>

                        </div>

                        <div className="project-showcase project-placeholder">
                            <div className="showcase-header">
                                Compatibility and price comparison
                            </div>
                            <p>Automation-driven research flow for hardware configurations.</p>
                        </div>

                    </div>

                    <div className="project-unit">

                        <div className="project-box">

                            <span className="project-label">Planning tool concept</span>
                            <h3>Smart House Planner - WIP</h3>

                            <p>
                                Constraint-based planning tool for generating
                                optimized house layouts and room structures.
                            </p>

                            <div className="project-tags">
                                <span>Python</span>
                                <span>Optimization</span>
                                <span>React</span>
                                <span>UI Design</span>
                                <span>Planning</span>
                            </div>

                        </div>

                        <div className="project-showcase project-placeholder">
                            <div className="showcase-header">
                                Planning logic and visual interface
                            </div>
                            <p>Constraint-based structure for configurable layout decisions.</p>
                        </div>

                    </div>

                </div>

            </div>

            {selectedImageIndex !== null && (

                <div className="lightbox-overlay">

                    <button
                        className="lightbox-close"
                        onClick={closeImage}
                        aria-label="Close image preview"
                    >
                        &times;
                    </button>

                    <button
                        className="lightbox-arrow left"
                        onClick={previousImage}
                        aria-label="Previous image"
                    >
                        &larr;
                    </button>

                    <img
                        src={horizonImages[selectedImageIndex]}
                        alt="Expanded screenshot"
                        className="lightbox-image"
                    />

                    <button
                        className="lightbox-arrow right"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        &rarr;
                    </button>

                </div>

            )}

        </section>
    )
}

export default Projects
