import React from 'react';
import HeaderLink from './HeaderLink';
import { HeaderLogo } from './HeaderLogo';
import { Button } from '../../button';

export const Header = () => {
    return (
        <div className='border-b-2 border-gray-700'>
            <div className='flex justify-between items-center container mx-auto py-4'>
                <HeaderLogo />
                <div className='flex items-center gap-2'>
                    <HeaderLink title='Home' />
                    <HeaderLink title='Why InternGlobal' />
                    <HeaderLink title='How It Works' />
                    <HeaderLink title='Pricing' />
                    <Button type='primary' title='Post An Internship' />
                </div>
            </div>
        </div>
    )
};
