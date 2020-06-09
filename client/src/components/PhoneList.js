import React from 'react';
import { Link } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const PhoneList = (props)=> {
   console.log(props.phonesList)
   const phoneList= props.phonesList.map(item=>{
       return(
           <li className="phone__list" key={item.id}>
               <Link to={`/phone/${item.id}`}>
                   <PhoneCard
                    url= {props.url}
                    name={item.name}
                    brand= {item.manufacturer}
                    price= {item.price}
                    image= {item.imageFileName}
                   />
               </Link>
           </li>
       )
   })
   return(
       <ul className="phones__container">
           {phoneList}
       </ul>
   )

}

export default PhoneList; 