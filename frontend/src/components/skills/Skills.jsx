function Skills({ t }) {
    return (
        <section id="certifications" className="skills">

            <div className="skills-card">

                <h2 className="section-title">
                    {t.skills.section_title}
                </h2>

                <div className="section-divider"></div>

                <div className="skills-grid">

                    <div className="skill-group">

                        <h3>
                            {t.skills.current_skill_group}
                        </h3>

                        <ul>
                            <li>{t.skills.current_skill_group_1}</li>
                            <li>{t.skills.current_skill_group_2}</li>
                            <li>{t.skills.current_skill_group_3}</li>
                            <li>{t.skills.current_skill_group_4}</li>
                            <li>{t.skills.current_skill_group_5}</li>
                            <li>{t.skills.current_skill_group_6}</li>
                            <li>{t.skills.current_skill_group_7}</li>
                            <li>{t.skills.current_skill_group_8}</li>
                        </ul>

                    </div>

                    <div className="skill-group">

                        <h3>
                            {t.skills.expanding_skill_group}
                        </h3>

                        <ul>
                            <li>{t.skills.expanding_skill_group_1}</li>
                            <li>{t.skills.expanding_skill_group_2}</li>
                            <li>{t.skills.expanding_skill_group_3}</li>
                            <li>{t.skills.expanding_skill_group_4}</li>
                            <li>{t.skills.expanding_skill_group_5}</li>
                            <li>{t.skills.expanding_skill_group_6}</li>
                            <li>{t.skills.expanding_skill_group_7}</li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills