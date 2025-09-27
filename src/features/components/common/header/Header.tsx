import React from 'react';
import HeaderLink from './HeaderLink';
import { HeaderLogo } from './HeaderLogo';
export const Header = () => {
    return (
        <div className='border-b-2 border-gray-700'>
            <div className='flex justify-between items-center container mx-auto py-4'>
                <HeaderLogo />
                <div className='flex items-center'>
                    <HeaderLink />
                    <HeaderLink />
                    <HeaderLink />
                </div>
            </div>
        </div>
    )
};
