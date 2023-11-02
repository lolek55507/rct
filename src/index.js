import React from 'react';
import  ReactDOM  from 'react-dom';
import NavBar from './components/navbar';
import Main from './components/main';
function Page () {
    return (
        <div className='container'>
            <NavBar />
            <Main />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"));