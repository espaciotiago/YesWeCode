import React from 'react'
//Styles
import '../styles/members.scss'

function MemberContainer(props) {
    const member = props.member ? props.member : {}
    const index = props.index
    return (
        <div className="mem-container"
            onMouseEnter={() => props.onHover(index, true)}
            onMouseLeave={() => props.onHover(index, false)}>
            <a href={member.linkedIn} target="_blank">
                <img src={member.image} />
                <p className={member.showHidden ? "name-info" : "name-info inactive"}>{member.nick}</p>
            </a>
        </div>
    )
}

export default MemberContainer