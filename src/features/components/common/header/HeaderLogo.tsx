import Image from 'next/image'
import React from 'react'

export const HeaderLogo = () => {
    return (
        <div>
            <Image src="/asset/logo.png" width={150} height={50} alt="logo" />
        </div>
    )
}
