import React, { useState, useEffect } from 'react'
//Components
import Navbar from '../components/Navbar'
import TagContainer from '../components/TagContainer'
import MemberContainer from '../components/MemberContainer'
//Objects
import projects from '../entities/Project'
//Styles
import '../styles/portfolio.scss'

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const [showingImage, setShowingImage] = useState("")
    //--------------------------------------------------------------------
    /**
     * 
     * @param {*} project 
     * @param {*} index 
     */
    const renderProject = (project, index) => {
        return (
            <div key={index + ""} className={project.landscape ? "item item-landscape" : "item item-portrait"}>
                <span onClick={() => setSelectedProject(project)}><img src={project.images[0]} /></span>
            </div>
        )
    }
    /**
     * Mouse enters and leaves the membes picture
     * @param {*} index 
     * @param {*} hover 
     */
    const onHover = (index, hover) => {
        let sp = {};
        let key;
        for (key in selectedProject) {
            sp[key] = selectedProject[key];
        }
        const member = sp.members[index]
        member.showHidden = hover
        setSelectedProject(sp)
    }
    //--------------------------------------------------------------------
    useEffect(() => {
        setShowingImage(selectedProject.images[0])
    }, [selectedProject])

    //--------------------------------------------------------------------
    return (
        <div>
            <Navbar active="portfolio" />
            {/* Selected item container */}
            <div className="main-item-container">
                <div className="image-container">
                    <div className="content">
                        {/* Image container */}
                        <img src={showingImage ? showingImage : ""} />
                        {/* SPager indicators */}
                        <div className="selectors">
                            {
                                selectedProject && selectedProject.images &&
                                selectedProject.images.map(image => {
                                    return (
                                        <span key={image} onClick={() => setShowingImage(image)}><div /></span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="content">
                        {/* Project name */}
                        <h1>
                            {selectedProject.name}
                        </h1>
                        {/* Project tags */}
                        <div className="tags">
                            {selectedProject && selectedProject.tags &&
                                selectedProject.tags.map(tag =>
                                    <TagContainer key={tag.name} tag={tag} />
                                )
                            }
                        </div>
                        {/* Project description */}
                        {selectedProject.description}
                        {/* Workers */}
                        <div className="tags">
                            {selectedProject && selectedProject.members &&
                                selectedProject.members.map((member, index) =>
                                    <MemberContainer
                                        onHover={onHover}
                                        index={index}
                                        key={member.name}
                                        member={member} />
                                )
                            }
                        </div>
                        <div className = "bottom-divider"/>
                    </div>
                </div>
            </div>
            <div className="divider" />
            {/* Bottom view portfolio items */}
            <div className="bottom-view">
                <div className="portfolio-items-container">
                    <div className="scrollmenu">
                        {/* List of items */}
                        {
                            projects.map((project, index) => renderProject(project, index))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Portfolio