import React from 'react'

const Item1 = () => {
  return (
    <div>
        <img className='panda-logo' src='https://www.panda-bank.com/assets/images/logo.svg'/>
        <div className='item-container'>
            <div className='title-container'>
                <h1 className='item-title'>
                    Water Bottle
                </h1>
                <div className='item-price'>
                    ($1.50)
                </div>
            </div>
            <div className='item-img'>
                <img className='product' src='https://i5.walmartimages.com/asr/c64fe48e-d6c0-48cf-80d5-a647d0db641a_1.ad40a19cda58afb1c7baaf016423f67b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'/>
            </div>
            <div className='seller-container'>
                <img className='company' src='https://www.7-eleven.com.sg/images/bg_711_logo_large.png'/>
                <h2 className='item-seller'>
                    7-11
                </h2>
            </div>
            
            <button className='pay-btn'>
                <div className='pay-btn-items'>
                    <img className='panda' src='https://scontent.fsin15-2.fna.fbcdn.net/v/t39.30808-6/242646097_580440000075019_2798606942614309479_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rMuXjqeGAaEAX8Y2quj&_nc_ht=scontent.fsin15-2.fna&oh=00_AfBmr8RNy5Lv6fXQKW8yNy3OOTqi9-rF27zfMbHhWAsg7Q&oe=63CFE26E'/>
                    Pay
                </div>
            </button>
        </div>
    </div>
  )
}

export default Item1