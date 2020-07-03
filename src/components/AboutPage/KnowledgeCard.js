import React from 'react';
import CardTitle from './CardTitle'

const KnownledgeCard = () => {
    return (
        <div className="card">
            <CardTitle title="Interests & Knowledge" />
            <h3>Research</h3>
            <ul>
                <li>Ut accumsan, libero eu cursus blandit, arcu ex malesuada dui, eget commodo quam lorem id sapien.</li>
                <li>arcu ex malesuada dui, eget commodo quam lorem id sapien..</li>

            </ul>
            <h3>Development</h3>
            <ul>
                <li>Ut accumsan, libero eu cursus blandit, arcu ex malesuada dui, eget commodo quam lorem id sapien.</li>
            </ul>
        </div>
    )
}

export { KnownledgeCard as default }