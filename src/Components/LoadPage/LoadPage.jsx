import { faArrowRightToBracket, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './LoadPage.css'

const LoadPage = () => {
    return (
        <div className="container-fluid loadpageConFluid">
            <div className="container">
                <h1>Hello User!👋 Welcome to WEB SCRAPING</h1>
                <p>Login or register to continue our website 😊 Thankyou..!</p>
            </div>
            <div className="loadpageBtns">
                <Link to="/login" className='btn btn-info mt-4'>Login <FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
                <p className='ms-2 me-2'>or</p>
                <Link to="/register" className='btn btn-warning mt-4'>Register <FontAwesomeIcon icon={faArrowUpFromBracket} /></Link>
            </div>
        </div>
    )
}

export default LoadPage