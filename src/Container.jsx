import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main'

const Container = (props) => {
    return (
        <div className='container'>
           <Sidebar/>  
           <Main  maindata={props.data}/>
        </div>
    );
};

export default Container;