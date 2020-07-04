import React from 'react';
import HeroCard from './HeroCard'
import ProjectsCard from './ProjectsCard'
import BackgroundCard from './BackgroundCard'
import KnowledgeCard from './KnowledgeCard'
import PostsCard from './PostsCard'

import Footer from '../Footer'
import { Link } from 'react-router-dom';
import { Header } from '../Header';

const AboutPage = () => {
    return (
        <div className="content-container">
        <div className="content-container__about">
        <Header />
            
            
        <HeroCard />
        <ProjectsCard />
        <BackgroundCard />
        <KnowledgeCard />
        <PostsCard />
    
        <Footer />
        </div>

        </div>
    )
}

export { AboutPage as default }