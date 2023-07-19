import styled from 'styled-components'

export const HeroContainer=styled.div`
    /* background-color: yellow; */
    display: flex ;
    padding-top: 60px;
    justify-content: space-between;

    @media screen and (max-width:1000px) {
        flex-direction:column;
        gap:20px;
    }
`
export const HeroTextContainer=styled.div`
    /* background-color: pink; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    color:white;
    @media screen and (max-width:1000px) {
        align-items: center;
        text-align: center;
        gap:30px;
    }
`
export const HeroHeaderContainer=styled.div`
    /* background-color: #d86b9a; */
    font-size: 40px;
    font-family:"Nunito", "Helvetica", "Arial", "sans-serif";
    font-weight: 800;

    
    
    animation: slide-in 1s forwards;
    transform: translateX(-500px);
    
    @keyframes slide-in {
    100% { transform: translateX(0px); }
}


    @media screen and (max-width:1000px) {
        text-align: center;
        font-size: 30px;
    }
`
export const HeroSubHeaderContainer=styled.div`
    /* background-color: green; */
    font-family:"Nunito", "Helvetica", "Arial", "sans-serif";
    font-size: 20px;
    letter-spacing: 1px;


    animation: slide-in 1s forwards;
    transform: translateX(-500px);
    
    @keyframes slide-in {
    100% { transform: translateX(0px); }
}
`
export const ButtonContainer=styled.div`
    
    width: 90%;
    display: flex;
    gap:40px;

    @media screen and (max-width:1000px){
        width: 100%;
    }

    @media screen and (max-width:760px){
        flex-direction: column;
        gap:20px;
    }

    animation: slide-in 1s forwards;
    transform: translateX(-500px);
    
    @keyframes slide-in {
    100% { transform: translateX(0px); }
}
    
` 
export const ButtonStyle=styled.button`
    background-color: #1adb80;
    height: 100%;
    min-height: 50px;
    flex: 1;
   
   box-shadow: -5px 10px 10px #0000004c;
    font-weight: 400;
    border: 1px solid #1adb80;
    border-radius: 7px;
    color: #000000;
    font-family:"Nunito", "Helvetica", "Arial", "sans-serif";
    letter-spacing: 1px;
    font-size: 18x;
`

export const HeroImageContainer=styled.div`
    /* background-color: #8baddc; */
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width:1000px) {
        
        justify-content: center;
        
    }
`
export const HeroImage=styled.img`
        @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
        }
    max-width: 550px;
    animation: fadeIn 2s;
    @media screen and (max-width:1000px) {
        width: 100%;
    
        justify-content: center;
        
    }

`

