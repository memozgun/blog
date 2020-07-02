import React from 'react';
import HeroCard from './HeroCard'
import ProjectsCard from './ProjectsCard'
import BackgroundCard from './BackgroundCard'
import KnowledgeCard from './KnowledgeCard'
import PostsCard from './PostsCard'

import Footer from './Footer'
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="content-container">
            <HeroCard />
            <ProjectsCard />
            <BackgroundCard />
            <KnowledgeCard />
            <PostsCard />

            <Link to="/admin"><p>Admin</p></Link>

            <Footer />
        </div>
    )
}

export { AboutPage as default }