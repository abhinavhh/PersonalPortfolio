import React from 'react'
import { Button } from '@mui/material'
const SocialButton = ({ icon: Icon, color, label, link}) => {
  return (
    <div className='flex items-center justify-center text-center'>
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
