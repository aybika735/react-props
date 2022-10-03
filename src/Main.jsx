import React from 'react';

const Main = (props) => {
    let data = props.maindata;
    const listItem = data.map((item) => {
    return (
        <div key = {item.id} className='card' >
            <div className='card-image'>
                <img src={item.image} alt="" />
                </div> <div className='card-info'>
                    <div className='card-price'>{item.price}</div> 
                    <div className='card-name'>{item.product}</div>
                    <div className='card-button'>
                        <button className='btn'>Купить</button>
                    </div>
                </div>
            </div> 
        )})
    return (
        <div className='main'>
            {listItem}
        </div>
    );
};

export default Main;