import React from 'react'

const Footer = ()=>{
    return(
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
            <ul className='flex gap-6 font-lato text-gray-500'>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
            <div className='flex gap-2 '>
                <img src="./assets/Help-Avatar.svg" alt="help" />
                <div>
                    <p className='font-playfair font-thin'>Have any Question?</p>
                    <a href="#" className='font-lato font-medium'>Talk to a specialist</a>
                </div>
            </div>
        </div>
    )
}

export default Footer