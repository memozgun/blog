import React from 'react'
import CardTitle from './CardTitle'
const ProjectsCard = () => {
    return (
        <div>

            <CardTitle title="Projects" />
            <h3>Current</h3>
            <span>Monyze</span>
            <p>A monthly newsletter that contains startups funded previous month with key data.</p>
        </div>
    )
}

export { ProjectsCard as default }