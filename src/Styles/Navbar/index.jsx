import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

export const NavbarStyle=styled.div`
    /* background-color:white; */
    display: flex ;
    justify-content: space-between;
`
export const LogoContainer=styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
`
export const LogoImage=styled.img`
    width: 100%;
    max-width: 40px;
`
export const NavbarLinksContainer=styled.div`
    
    display: flex;
    justify-content: space-between;
    width:100%;
    max-width: 500px;
    align-items: center;
    @media screen and (max-width:1000px) {
        flex-direction:column;
        
        height:100vh;
        align-items: center;
        
        background-color: aliceblue;
        min-height: 100%;
        z-index: 1;
        justify-content: center;
        display: none;
        
        
    }
`
export const NavbarLink=styled.div`
    color: #838598;
    font-family:"Nunito", "Helvetica", "Arial", "sans-serif";
    letter-spacing: 2px;
    font-size: 12px;
    cursor: pointer;
    &:hover{
        color: white;
    }

    @media screen and (max-width:1000px){
        
            text-align: center;
            font-size: 17px;
            padding: 25px;
            

        &:hover{
            background-color: grey;
            width: 86%;
        }
    }
    
`
// export const MenuStyle=styled(MenuIcon)(

// )

export const MenuStyles={
    display:"none",
    '@media(max-width: 1000px)' : {
        marginTop:'20px',
       display:"block",
        fontSize:"40px",
        
      }
}


