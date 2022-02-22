import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size})=>(

    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <Link to='/hats'>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop now</span>
            </div>        
        </Link>
    </div>
)

export default MenuItem;