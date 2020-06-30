import React from 'react';

const HeroCard = (props) => {
    return (
        <div className="title">
            <h2>{props.title}</h2>
            <hr className="solid"/>
    </div>
    )
}

export { HeroCard as default }