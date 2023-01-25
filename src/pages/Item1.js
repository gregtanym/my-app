import React from 'react'

const Item1 = () => {
    return (
        <div className='main-container'>
            <div className='big-card'>
              <img className='panda-logo' src='https://www.panda-bank.com/assets/images/logo.svg'/>
    
              <div className='item-title'>
                Art Piece 1
              </div>
    
              <img className='item-img' src='https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1519968262911-6191QBX6XFQJY3KGKZ7H/Taikan-Yokoyama-Mount-Penglai.jpg'/>
    
              <img className='company-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/National_Gallery_Singapore_logo.svg/2560px-National_Gallery_Singapore_logo.svg.png'/>
    
              <div className='description'>
                <div className='seller-info'>
                  <div className='container1'>
                    <div className='smaller-container1'>
                      <img className='profile-pic' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'/>
                      <div style={{marginLeft: '1rem'}}>FamousArtist456</div>
                    </div>
                  </div>
                  <div className='container2'>
                    <div className='verified-section'>
                      <img className='country-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByk1KAxzJ_Lme0c6gO5etuKjZeaSsx-z0TfMMdCDgGg9kY9e_YMl7JcgKLMDnDUwonWw&usqp=CAU'></img>
                      <div className='country'>China</div>
                    </div>
                    <div className='verified-section'>
                      <img className='verified' src='https://cdn-icons-png.flaticon.com/512/6364/6364343.png'/>
                      <div className='verified-text'>
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className='item-info'>
                  <div className='info-tab'>
                    <div className='label'>
                      Condition
                    </div>
                    <div className='desc'>
                      Brand New
                    </div>
                  </div>
                  <div className='info-tab'>
                    <div className='label'>
                      Material
                    </div>
                    <div className='desc'>
                      Acrylic
                    </div>
                  </div>
                  <div className='info-tab'>
                    <div className='label'>
                      Category
                    </div>
                    <div className='desc'>
                      Art, Paintings
                    </div>
                  </div>
                  <div className='info-tab'>
                    <div className='label'>
                      Item ID
                    </div>
                    <div className='desc'>
                      67890
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='item-price'>
                $2,800
              </div>
    
              <div className='pay-btns'>
                <div className='pay-btn'>PAY</div>
                <div className='pay-btn'><img className='pay-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png'/></div>
                <div className='pay-btn'><img className='pay-logo' src='https://www.nicepng.com/png/full/235-2355602_apple-pay-with-stripe-apple-pay-logo-white.png'/></div>
              </div>
            </div>
        </div>
      )
}

export default Item1