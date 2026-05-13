import { useState } from 'react'

function Projects({ t }) {

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

                <p className="section-eyebrow">
                    {t.projects.section_eyebrow}
                </p>

                <h2 className="section-title">
                    {t.projects.section_title}
                </h2>

                <div className="section-divider"></div>

                <div className="projects-grid">

                    <div className="project-unit featured-project">

                        <div className="project-box">

                            <span className="project-label">
                                {t.projects.project_label_1}
                            </span>

                            <h3>
                                {t.projects.project_label_1_h}
                            </h3>

                            <p>
                                {t.projects.project_label_1_p}
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
                                {t.projects.showcase_header_1}
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

                            <span className="project-label">
                                {t.projects.project_label_2}
                            </span>

                            <h3>
                                {t.projects.project_label_2_h}
                            </h3>

                            <p>
                                {t.projects.project_label_2_p}
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
                                {t.projects.showcase_header_2}
                            </div>

                            <p>
                                {t.projects.showcase_header_2_p}
                            </p>

                        </div>

                    </div>

                    <div className="project-unit">

                        <div className="project-box">

                            <span className="project-label">
                                {t.projects.showcase_header_3}
                            </span>

                            <h3>
                                {t.projects.showcase_header_3_h}
                            </h3>

                            <p>
                                {t.projects.showcase_header_3_p}
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
                                {t.projects.project_label_4}
                            </div>

                            <p>
                                {t.projects.project_label_4_p}
                            </p>

                        </div>

                    </div>

                    <div className="project-unit">

                        <div className="project-box">

                            <span className="project-label">
                                {t.projects.project_label_5}
                            </span>

                            <h3>
                                {t.projects.project_label_5_h}
                            </h3>

                            <p>
                                {t.projects.project_label_5_p}
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
                                {t.projects.showcase_header_6}
                            </div>

                            <p>
                                {t.projects.showcase_header_6_p}
                            </p>

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