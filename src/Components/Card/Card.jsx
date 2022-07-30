import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Card = ({ filterProducts }) => {
    return (
        <div className="row card_row">
            {
                filterProducts.map((prod, i) => {
                    return (
                        <div className="col card_container" key={i}>
                            <div className="img_section">
                                <img src={prod.prod_img} />
                            </div>
                            <div className="desc_section">
                                <h6 className='prod_name'>{prod.prod_name} <span className='prod_clr'>({prod.prod_clr}, {prod.prod_rom}GB)</span></h6>
                                <p className='prod_ram'>{prod.prod_ram}GB RAM</p>
                                <span className='prod_rating'>{prod.prod_rating} <FontAwesomeIcon color='#FFD700' icon={faStar} /></span> <span className='prod_cus_count'>( {prod.prod_cus_count} )</span><br />
                                <h5 className='prod_price'>₹{prod.prod_price_with_offer}</h5>&nbsp;&nbsp;
                                <span className='prod_off_price'>₹{prod.prod_price}</span>
                                <h6 className='prod_website'>{prod.prod_website}.com</h6>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card