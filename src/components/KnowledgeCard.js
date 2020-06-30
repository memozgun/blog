import React from 'react';
import CardTitle from './CardTitle'

const KnownledgeCard = () => {
    return (
        <div>
            <CardTitle title="Interests & Knowledge" />
            <h3>Research</h3>
            <ul>
                <li>My research focus is on Artifical Intelligence, particularly Multi-agent Systems.</li>
                <li>I am interested in applications of Multi-agent Systems in Energy Markets.</li>

            </ul>
            <h3>Development</h3>
            <ul>
                <li>My main stack for development is Javascript with React and Flask Python.</li>
            </ul>
        </div>
    )
}

export { KnownledgeCard as default }