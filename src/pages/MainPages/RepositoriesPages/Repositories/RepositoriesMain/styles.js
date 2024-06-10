import styled from "styled-components";

export const Container = styled.section`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid
    ${(props) => props.color || props.theme.colors.champagneDark};
  padding: 1rem;
`

export const Title = styled.h4`
 font-size: ${(props) => props.theme.fontSize.lg};
 font-weight: normal;
`;

export const Description = styled.p`
align-items: left;
color: ${(props)=> props.theme.colors.gray500};
font-size: 14px;
margin-bottom: 1.5rem;
`;
export const FooterContainer = styled.footer`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0.3rem;
color: ${(props)=> props.color || props.theme.colors.white}
`;

export const DataFooter = styled.span`
 display: flex;
 font-size: ${(props)=>props.theme.fontSize.sm};
`
export const FooterLink = styled.a`
 display: flex;
 font-size: ${(props)=>props.theme.fontSize.md};
 text-decoration: none;
`