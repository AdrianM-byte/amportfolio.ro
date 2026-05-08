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

                <h2 className="section-title">My Projects</h2>

                <div className="section-divider"></div>

                <div className="projects-grid">

                    {/* PROJECT HORIZON */}

                    <div className="project-unit">

                        <div className="project-box">

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

                    {/* DATA COMPARISON TOOL */}

                    <div className="project-unit">

                        <div className="project-box">

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

                        <div className="project-showcase">

                            <div className="showcase-header">
                                Data Comparison Tool Interface
                            </div>

                        </div>

                    </div>

                    {/* AUTOMATED PC BUILDER */}

                    <div className="project-unit">

                        <div className="project-box">

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

                        <div className="project-showcase">

                            <div className="showcase-header">
                                Automated PC Builder Interface
                            </div>

                        </div>

                    </div>

                    {/* SMART HOUSE PLANNER */}

                    <div className="project-unit">

                        <div className="project-box">

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

                        <div className="project-showcase">

                            <div className="showcase-header">
                                Smart House Planner Interface
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* LIGHTBOX */}

            {selectedImageIndex !== null && (

                <div className="lightbox-overlay">

                    <button
                        className="lightbox-close"
                        onClick={closeImage}
                    >
                        ×
                    </button>

                    <button
                        className="lightbox-arrow left"
                        onClick={previousImage}
                    >
                        ←
                    </button>

                    <img
                        src={horizonImages[selectedImageIndex]}
                        alt="Expanded screenshot"
                        className="lightbox-image"
                    />

                    <button
                        className="lightbox-arrow right"
                        onClick={nextImage}
                    >
                        →
                    </button>

                </div>

            )}

        </section>
    )
}

export default Projects