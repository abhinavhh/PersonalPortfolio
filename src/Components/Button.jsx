import React from 'react'
import { Button } from '@mui/material'
import { useTheme } from '../context/ThemeContext'
const SocialButton = ({ icon: Icon, color, label, link}) => {
  const {isDarkMode, toggleDarkMode} = useTheme();
  return (
    <div className={`flex items-center justify-center text-center ${
      isDarkMode? "bg-gray-800 rounded-lg" : "bg-gray-100"
    }`}>
        <Button
            variant='contained'
            size='medium'
            color={color || 'primary'}
            href={link}
            startIcon={<Icon />}
            rel='noopener noreferrer'
        >
            {/* {label} */}
        </Button>
    </div>
  )
}

export default SocialButton
