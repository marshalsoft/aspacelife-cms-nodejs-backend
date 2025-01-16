"use client"
import { Dot } from '@/app/assets/icons/dot';
import { BaseNavLink } from '../baseNavLink';
import { NavbarProps } from '@/app/utils/types';
import AvatarIcon from '@/app/assets/icons/avatarIcon';

const Navbar = (props:NavbarProps) => {
  return (
    <nav className="bg-white text-black p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <BaseNavLink 
          to="/"
           >
            <span className='text-[16px]' >
            ADMIN</span>
            </BaseNavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 ">
        {props.navList.map((item,index)=><BaseNavLink 
        key={index}
        to={item.route} >
            <div className='flex justify-center items-center gap-2 hover:border-b-[#7001F9] hover:border-b-4'>
            <div className="hover:text-[#7001F9] hover:font-bold hover:cursor-pointer font-medium px-2 text-[14px]  rounded-md">{item.title}</div>
            {index !== props.navList.length - 1? <Dot />:null}
            </div>
          </BaseNavLink>)}
        </div>
        <div className="flex space-x-2 justify-between items-center">
        <div className="font-medium px-2 text-[14px]  rounded-md">Benjamin Sani</div>
        <AvatarIcon />
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
