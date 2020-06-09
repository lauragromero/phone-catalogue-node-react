import React from 'react';

const PhoneDetail = (props)=>{
    console.log(props, 'props DEtail')
    
    const matchID = props.phones.filter(item => parseInt(props.phoneDetail) === item.id)
    return (
        <div className="card__detail-container">
        {matchID.map(item=>{
            return(
                <div  className="detail__container" key={item.id}>
                    <div className= "detail__image">
                        <img src={props.url + item.imageFileName} alt={item.name}/>
                    </div>
                    <div className= "detail__info">
                        <div className="detail__header">
                            <div className="detail__title">
                            <h2>{item.name}</h2>
                            <span>{item.manufacturer}</span>
                            </div>
                            <span className="detail__price">{item.price}€</span>
                        </div>
                        <div className="detail__description">
                            <span> Color: {item.color}</span>
                            <span> Screen size: {item.screen}</span>
                            <span> Processor: {item.processor}</span>
                            <span>Ram: {item.ram}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
                
            )
        })} 
    </div>
    )

}

export default PhoneDetail;