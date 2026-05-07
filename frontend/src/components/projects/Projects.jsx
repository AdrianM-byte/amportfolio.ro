function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-card">
                <h2 className="section-title">My Projects</h2>
                <div className="hero-divider">  </div>
                <div className="secton-divider"></div>

                <div className="projects-grid">
                    <div className="project-box">
                        <h3>Database Validation Platform</h3>

                        <p>
                            Internal QA-oriented platform designed for SQL validation,
                            ETL comparison workflows, automated result reporting,
                            and multi-environment verification processes.
                        </p>

                        <span>
                            Python • Flask • SQL • Reporting • QA Automation
                        </span>
                    </div>

                    <div className="project-box">
                        <h3> CSV/Excel comparison Tool</h3>

                        <p>
                            Validation-focused comparison utility designed for
                            detecting differences between structured datasets,
                            supporting QA workflows and reporting activities.
                        </p>

                        <span>
                            Python • Pandas • Data Validation • Automation
                        </span>
                    </div>


                    <div className="project-box">
                        <h3>Automated PC Builder - WIP</h3>
                            
                        <p>
                            Automation-oriented system for generating compatible
                            PC configurations using filtering logic,
                            component validation, and multi-store comparison workflows.
                        </p>

                        <span>
                            Python • Web Scraping • Automation • Compatibility Logic • Frontend 
                        </span>
                    </div>

                    <div className="project-box">
                        <h3> Smart House Planner - WIP</h3>

                        <p>
                            Constraint-based planning system designed for generating
                            optimized house layouts, automation-aware room positioning,
                            and scalable space organization workflows.
                        </p>

                        <span>
                            Python • Constraint Solving • Optimization • Planning Logic • UI Concepts
                        </span>
                    </div>

                </div>

            </div>

        </section>
    )

}
export default Projects