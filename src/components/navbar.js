import React from 'react';
import  ReactDOM  from 'react-dom';

export default function NavBar () {
    return (
        <nav>
            <div className='LeftTop'>
                <img src='https://reactjs.org/logo-og.png' alt='react Image'></img>
                <h1>React Facts</h1>
            </div>
            <div className='RightTop'>
                <h1 className='ReactCourse'>React Course Project 1</h1>
            </div>
        </nav>
    )
}