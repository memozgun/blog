import React from 'react';
import CardTitle from './CardTitle'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <CardTitle title="" />
            </div>
            <div className="footer__text">
                <p>Mert Özgün - 2020</p>
                <p>mert@mertozgun.me</p>
            </div>
        </>
    )
}

export { Footer as default }