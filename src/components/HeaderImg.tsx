import React from 'react'
import Image from 'next/image'

const HeaderImg = () => {
    return (
        <>
            <Image
                src="/images/Veterans_BURN.gif"
                className='headerImage'
                alt="VeteransGif"
                width={600}
                height={600}
                priority
            />

        </>
    )
}

export default HeaderImg
