import React, {useState} from "react";
import {TbBrandGithub, TbExternalLink} from "react-icons/tb";

const AllProjects = ({projects}) => {
    const [fetched, setFetched] = useState(false);
    const [projectKeys, setProjectKeys] = useState([]);

    if (!fetched && projects.section_insights_term_project !== undefined) {
        console.log(projects);
        setProjectKeys(Object.keys(projects));
        setFetched(true);
    }

    return (
        <>
            {fetched &&
                <div className="projects-page-no-x-padding">
                    <div className="content-for-no-x-padding-pages">
                        <div className="projects-page-grid">
                            <div className="projects-page-header" style={{textAlign: "center"}}>
                                My Projects
                            </div>
                            {projectKeys.map((key, index) => {
                                return (
                                    <>
                                        {(index % 2 !== 0) ?
                                            <div key={key} className="project-section-odd">
                                                <div className="project-img-wrapper-odd">
                                                    <img src={projects[key].image.fields.file.url}
                                                         alt={projects[key].image.fields.title}
                                                         className={`project-img-odd ${projects[key].image.fields.description}`}/>
                                                </div>
                                                <div className="project-details-odd">
                                                    <div className="project-details-header">
                                                        {projects[key].title}
                                                    </div>
                                                    <div className="project-details-body">
                                                        {projects[key].preview}
                                                    </div>
                                                    {(projects[key].link || projects[key].repo) &&
                                                        <div className="project-link-wrapper">
                                                            {projects[key].link &&
                                                                <a className="project-link" href={projects[key].link} target="_blank" rel="noreferrer">
                                                                    <TbExternalLink style={{margin: "0 2px -2px 0"}}/>
                                                                    Live App
                                                                </a>
                                                            }
                                                            {projects[key].repo &&
                                                                <a className="project-link" href={projects[key].repo} target="_blank" rel="noreferrer">
                                                                    <TbBrandGithub style={{margin: "0 2px -3px 0"}}/>
                                                                    Learn More
                                                                </a>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div> :
                                            <div key={key} className="project-section-even">
                                                <div className="project-details-even">
                                                    <div className="project-details-header">
                                                        {projects[key].title}
                                                    </div>
                                                    <div className="project-details-body">
                                                        {projects[key].preview}
                                                    </div>
                                                    {(projects[key].link || projects[key].repo) &&
                                                        <div className="project-link-wrapper">
                                                            {projects[key].link &&
                                                                <a className="project-link" href={projects[key].link} target="_blank" rel="noreferrer">
                                                                    <TbExternalLink style={{margin: "0 2px -2px 0"}}/>
                                                                    Live App
                                                                </a>
                                                            }
                                                            {projects[key].repo &&
                                                                <a className="project-link" href={projects[key].repo} target="_blank" rel="noreferrer">
                                                                    <TbBrandGithub style={{margin: "0 2px -3px 0"}}/>
                                                                    Learn More
                                                                </a>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                <div className="project-img-wrapper-even">
                                                    <img src={projects[key].image.fields.file.url}
                                                         alt={projects[key].image.fields.title}
                                                         className={`project-img-even ${projects[key].image.fields.description}`}/>
                                                </div>
                                            </div>
                                        }
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default AllProjects;