import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import FollowAt from "react-social-media-follow";
import { SocialIcon } from 'react-social-icons';
const HeroCard = () => {
    const links = [
        'https://twitter.com/magicahmd',
        'https://www.facebook.com/ahmdsalhi',
        'https://www.instagram.com/ahmdsalhi',
      ];

    return (
        <div className="card card--hero">
        <div>
            <h1>Hi, I'm John!</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et urna eu arcu dictum congue at et dolor. </h2>
            <p>Vivamus at vestibulum tortor, sit amet accumsan justo. Donec diam enim, accumsan vel nulla sed, tristique congue lacus. Mauris consequat tellus sapien.</p>
            
        </div>
        <div >
            <img src={"/image.jpg"} alt='profile' width="250" height="250"/>
            <div className="card--images"> 
            <SocialIcon url="https://twitter.com/" style={{ height: 42, width: 42 }} bgColor="#000" />
            <SocialIcon url="https://linkedin.com/" style={{ height: 42, width: 42 }} bgColor="#000"/>
            <SocialIcon url="https://github.com/" style={{ height: 42, width: 42 }} bgColor="#000"/>
            </div>

        </div>
        <div className="card--images__mobile"> 
            <SocialIcon className="icon" url="https://twitter.com/" style={{ height: 42, width: 42 }} bgColor="#000" />
            <SocialIcon className="icon" url="https://linkedin.com/" style={{ height: 42, width: 42 }} bgColor="#000"/>
            <SocialIcon className="icon" url="https://github.com/" style={{ height: 42, width: 42 }} bgColor="#000"/>
            </div>
        </div>

    )
}

export { HeroCard as default }