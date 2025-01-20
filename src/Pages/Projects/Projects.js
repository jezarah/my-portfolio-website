import React from "react";
import {TbBrandGithub, TbExternalLink} from "react-icons/tb";
import './projects.css';

const Projects = ({projects}) => {
    return (
        <>
            {projects &&
                <div className="projects-page-no-x-padding page-y-padding">
                    <div className="content-for-no-x-padding-pages">
                        <div className="projects-page-grid">
                            <div className="projects-page-header">My Projects</div>
                            {projects.map((project, index) => {
                                return (
                                    <div key={project.id}>
                                        {(index % 2 !== 0) ?
                                            <div className="project-section">
                                                <div className="project-img-wrapper">
                                                    <img src={project.image.fields.file.url}
                                                         alt={project.image.fields.title}
                                                         className={`project-img-odd ${project.image.fields.description}`}
                                                         width={700} height={500}
                                                    />
                                                </div>
                                                <div className="project-details">
                                                    <div className="project-details-header">
                                                        {project.title}
                                                    </div>
                                                    <div className="project-details-body">
                                                        {project.preview}
                                                    </div>
                                                    {(project.link || project.repo) &&
                                                        <div className="project-link-wrapper">
                                                            {project.link &&
                                                                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                                                    <TbExternalLink style={{margin: "0 2px -2px 0"}}/>
                                                                    Live App
                                                                </a>
                                                            }
                                                            {project.repo &&
                                                                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                                                                    <TbBrandGithub style={{margin: "0 2px -3px 0"}}/>
                                                                    Learn More
                                                                </a>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div> :
                                            <div className="project-section">
                                                <div className="project-details">
                                                    <div className="project-details-header">
                                                        {project.title}
                                                    </div>
                                                    <div className="project-details-body">
                                                        {project.preview}
                                                    </div>
                                                    {(project.link || project.repo) &&
                                                        <div className="project-link-wrapper">
                                                            {project.link &&
                                                                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                                                    <TbExternalLink style={{margin: "0 2px -2px 0"}}/>
                                                                    Live App
                                                                </a>
                                                            }
                                                            {project.repo &&
                                                                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                                                                    <TbBrandGithub style={{margin: "0 2px -3px 0"}}/>
                                                                    Learn More
                                                                </a>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                <div className="project-img-wrapper">
                                                    <img src={project.image.fields.file.url}
                                                         alt={project.image.fields.title}
                                                         className={`project-img-even ${project.image.fields.description}`}
                                                         width={700} height={500}/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Projects;