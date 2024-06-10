import styled from "styled-components";

 export const Container = styled.section`
   display: grid;
   grid-template-columns: auto;
   gap: 0.2rem;
   margin-left: 0.2rem;
   padding-right: 2rem;

   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
 `
  export const Seletor = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props)=> props.theme.colors.gray900};
  border: none;
  color: ${(props)=>props.theme.colors.white};
  min-height: 1.5rem;
  font-size: 13px;
  margin-left: 5px;
  border-bottom-right-radius:  18px ;
  border-top-right-radius:  18px ; 
  transition: background 0.3s, transform 0.3s;   

  &:hover, 
  &.selected{
    background: ${(props) => props.color || props.theme.colors.white};
    color: ${(props) =>
      props.color ? props.theme.colors.gray400 : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    margin-left: 0;
    margin-bottom: 0;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }

  `

  export const Limpar = styled.button`
  background: transparent;
  border: none;
  text-align: left;
  color: ${(props)=> props.theme.colors.white};
  margin-bottom: 10px;
  
  &:hover{
    cursor: pointer;
    color:  ${(props)=> props.theme.colors.red} ;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
  }
  `
