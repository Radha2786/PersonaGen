import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  return (
     <nav className='bg-[#818AE0] h-16'>
        <ul className='flex justify-between'>
            <li className='mr-4 mt-2'>Home</li>
            <li className='mr-4 mt-2'>
                <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </li>
            {/* <li className='mr-4 mt-2'>Profile</li> */}
        </ul>
    </nav>
  )
}



export default Header
