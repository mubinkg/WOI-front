import React from 'react'

const HeaderLink = ({ title, type = "secondary" }: { title: string, type?: "primary" | "secondary" }) => {
    return (
        <div className='text-white p-2 cursor-pointer'>{title}</div>
    )
}

export default HeaderLink