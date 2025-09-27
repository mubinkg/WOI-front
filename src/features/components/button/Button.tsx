import React from 'react'
import { PrimaryButton } from './PrimaryButton'

interface IProps {
    title: string
    type: "primary" | "secondary"
    hasIcon?: boolean
}

export const Button = ({ title, type }: IProps) => {
    switch (type) {
        case "primary":
            return <PrimaryButton title={title} />
        default:
            return ""
    }

}

