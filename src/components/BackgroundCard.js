import React from 'react';

const BackgroundCard = () => {
    return (
        <div>
            <div className="title">
            <h2>Background</h2>
            <hr className="solid"/>

            </div>
            <h3>Present</h3>
            <ul>
                <li>Studying for a master's in Artificial Intelligence</li>
            </ul>
            <h3>Past</h3>
            <ul>
                <li>Graduated from Özyeğin University with a degree in Computer Science (2020)</li>
                <li>Graduated from Edremit Anatolian Highschool with high school diploma (2015)</li>
                <li>My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.</li>
            </ul>
        </div>
    )
}

export { BackgroundCard as default }