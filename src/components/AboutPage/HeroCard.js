import React from 'react';

const HeroCard = () => {
    return (
        <div className="card card--hero">
        <div>
            <h1>Hi, I'm John!</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et urna eu arcu dictum congue at et dolor. </h2>
            <p>Vivamus at vestibulum tortor, sit amet accumsan justo. Donec diam enim, accumsan vel nulla sed, tristique congue lacus. Mauris consequat tellus sapien.</p>
        </div>
        <div>
            <img src={"/image.jpg"} alt='profile' width="250" height="250"/>
        </div>
        </div>

    )
}

export { HeroCard as default }