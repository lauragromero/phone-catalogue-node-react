import React from 'react';
const PhoneCard=(props)=>{
    console.log(props.name)
    const {url, image, name, price, brand} = props
    return (
        <React.Fragment>
            <div className="phone__container">
                <div className="phone__text-container">
                    <div className="phone__header">
                        <h3 className="phone__title">{name}
                        </h3>
                        <span>{brand}</span>
                    </div>
                    <span>{price}€</span>
                    
                </div>
            </div>
            <div className="phone__img">
            <img src={url+image} alt={name}/>
            </div>
           
        </React.Fragment>
    )
}

export default PhoneCard;