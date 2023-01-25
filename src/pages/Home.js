import React, { useEffect, useState } from 'react'

const Home = () => {
    const [images, setImages] = useState([])
    const [imageURLs, setImageURLs] = useState([])
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [valid, setValid] = useState('')
    const [itemname, setItemname] = useState('')
    const [itemprice, setItemprice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [days, setDays] = useState(0)
    const [cost, setCost] = useState(1.5)
    const [consignment, setConsignment] = useState(35)

    const UploadImages = () => {
        useEffect(() => {
            if(images.length !== 1) return;
            const newImageURLs = []
            images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
            setImageURLs(newImageURLs)
            console.log(images)
        }, [images])
    
        const onImageChange = (e) => {
            setImages([...e.target.files])
        }
    
        return(
            <>
                <input className='input-img' type='file' multiple accepts='images/*' onChange={onImageChange}/>
                {imageURLs.map(imageSrc => <img key='1' src={imageSrc}/>)}
            </>
        )
    }

    return (
        <div className='main-container'>
            <div className='big-card'>
                <img className='panda-logo' src='https://www.panda-bank.com/assets/images/logo.svg'/>
                <form className='listing-form'>
                    <div className='seller-details'>
                        <div className='section-title'>Seller Details</div>
                        <div className='inner-container'>
                            <div className='left-container'>
                                <div className='input-container'>
                                    <div className='input-text'>First Name</div>
                                    <input className='input-field' name='firstname'/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Pandabank Username</div>
                                <input className='input-field' name='username'/>
                            </div>
                            </div>
                            <div className='right-container'>
                                <div className='input-container'>
                                    <div className='input-text'>Last Name</div>
                                    <input className='input-field' name='lastname'/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Valid Thru</div>
                                <input type='month' className='input-field' name='valid-period'/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='item-details'>
                        <div className='section-title'>Item Details</div>
                        <div className='inner-container'>
                            <div className='left-container'>
                                <div className='input-container'>
                                    <div className='input-text'>Item Name</div>
                                    <input className='input-field' name='item-name'/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Quantity</div>
                                    <input type='number' className='input-field' name='quantity'/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Days of Rental</div>
                                    <input type='number' className='input-field' name='rental-days'/>
                                </div>
                            </div>
                            <div className='right-container'>
                                <div className='input-container'>
                                    <div className='input-text'>Item Price</div>
                                    <input type='number' className='input-field' name='item-price'/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Rental Cost (per day)</div>
                                    {/* this should be fixed */}
                                    <input type='number' className='input-field' name='rental-cost' value='1.50' disabled/>
                                </div>
                                <div className='input-container'>
                                    <div className='input-text'>Consignment (%)</div>
                                    {/* this should be fixed */}
                                    <input type='number' className='input-field' name='consignment' value='35' disabled/>
                                </div>
                            </div>
                        </div>
                        <div className='input-container'>
                            <div className='input-text'>Upload Image</div>
                            <UploadImages/>
                        </div>
                    </div>
                    <ul className='tnc'>
                        Terms and Conditions
                        <li>
                            Payment structure: Accounts to be credited upon the verification of transaction via smart contract using PandaBank issued PandaTokens
                        </li>
                        <li>
                            Seller
                        </li>
                    </ul>
                    {/* <input type='submit' onSubmit={}/> */}
                </form>
            </div>
        </div>
    )
}

export default Home