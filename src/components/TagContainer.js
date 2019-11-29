import React from 'react'
//Styles
import '../styles/tags.scss'

function TagContainer(props){
    const tag = props.tag ? props.tag : {name: "", color: ""}

    return(
        <div className = "tag-container" style = {{background: tag.color}}>
            <p>
                {tag.name}
            </p>
        </div>
    )
}

export default TagContainer