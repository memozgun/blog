import React from 'react';
import CardTitle from './CardTitle'

const BackgroundCard = () => {
    return (
        <div>
            <CardTitle title="Background" />
            
            <h3>Present</h3>
            <ul>
                <li>Ut accumsan, libero eu cursus blandit, arcu ex malesuada dui, eget commodo quam lorem id sapien.</li>
            </ul>
            <h3>Past</h3>
            <ul>
                <li>Mauris consequat tellus sapien. (2020)</li>
                <li>Mauris consequat tellus sapien. (2015)</li>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut accumsan, libero eu cursus blandit, arcu ex malesuada dui, eget commodo quam lorem id sapien. </li>
            </ul>
        </div>
    )
}

export { BackgroundCard as default }