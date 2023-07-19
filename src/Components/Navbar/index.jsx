import React from 'react';
import { LogoContainer,  NavbarLink,  NavbarLinksContainer, NavbarStyle,LogoImage, MenuStyles } from '../../Styles/Navbar';
import FreeskoutLogo from '../../Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import { useState } from 'react';



const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  
  return (
    <div>
        <NavbarStyle>
           
            <LogoContainer>
                <LogoImage src={FreeskoutLogo}/>
            </LogoContainer>
            {isOpen? <CloseIcon sx={MenuStyles} style={{ color: 'white' }}onClick={()=>setOpen(open=>!open   )}/>:
                    <MenuIcon sx={MenuStyles} style={{ color: 'white' }} onClick={()=>setOpen(open=>!open   )}/>}


            <NavbarLinksContainer>
            
                <NavbarLink>BRANDS</NavbarLink>
                <NavbarLink>NFLUENCERS</NavbarLink>
                <NavbarLink>PRICING</NavbarLink>
                <NavbarLink>BLOGS</NavbarLink>
                <NavbarLink>CONTACT</NavbarLink>
            </NavbarLinksContainer>
            
        </NavbarStyle>
      
    </div>
  );
}

export default Navbar;
