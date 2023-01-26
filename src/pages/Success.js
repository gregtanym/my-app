import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
  return (
    <div className='main-container'>
        <div className='big-card'>
            <div className='success-container'>
                <img className='success-icon' src='https://cdn-icons-png.flaticon.com/512/148/148767.png' />
                <div className='succcess-text'>Transaction was successful!</div>
                <a className='succcess-text' href={`${location.state.link}`}>{location.state.link}</a>
            </div>
        </div>
    </div>
  )
}

export default Success