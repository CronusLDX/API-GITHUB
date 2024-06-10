import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: 1.3rem;
`;

export const Name = styled.h2`
  font-size: ${(props)=>props.theme.fontSize.lg};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

 export const  DataContainer = styled.section`
 align-items: center;

  
   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }

 `;
 export const Link = styled.a` 
  text-decoration: none;
  font-size: ${(props)=> props.theme.fontSize.md};
  color: ${(props)=>props.theme.colors.gray600};
 `;
 export const Data = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.5;
  padding-bottom: 0.3rem;

  svg{
    margin-right: 10px;
  }
 `