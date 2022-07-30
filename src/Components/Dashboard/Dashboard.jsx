import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightFromBracket, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Link, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import axios from 'axios'
import { config } from '../../config'

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("login_auth_token")
        navigate('/login')
    }

    const [prodData, setProdData] = useState([])
    const [keyword, setKeyword] = useState('')


    useEffect(() => {
        let fetchData = async () => {
            try {
                let getData = await axios.get(`${config.api}/allproducts`, {
                    headers: {
                        "authorization": `${localStorage.getItem("login_auth_token")}`
                    }
                })
                setProdData(getData.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    const handleInputText = (value) => {
        setKeyword(value)
    }

    const filterProducts = prodData.filter((product) =>
        product.prod_name.toLowerCase().includes(keyword) ||
        product.prod_cat.toLowerCase().includes(keyword)
    )

    return (
        <div className="container-fluid dashConFluid">
            <div className="container">
                <h1>Welcome to Web Scraping</h1>
                <h6>Search to compare products & find a best deals here!</h6>
                <div className="searchContainer">
                    <div className="searchBar">
                        <input type="text" placeholder='Search to filter products' onChange={(e) => handleInputText(e.target.value.toLowerCase().trim())} />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                    <div className='add_prod_btn'>
                        <Link to="/addproduct" className='btn btn-warning'><strong>ADD PRODUCT <FontAwesomeIcon icon={faCirclePlus} /></strong></Link>
                        <button onClick={handleLogout} className='btn btn-danger ms-2'><b>Logout</b> <FontAwesomeIcon icon={faRightFromBracket} /></button>
                    </div>
                </div>
                <Card filterProducts={filterProducts} />
            </div>
        </div>
    )
}

export default Dashboard