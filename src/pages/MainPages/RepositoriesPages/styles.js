import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    min-height: 100vh;
    height: 100%;

    @media screen and (max-width: ${(pops)=> pops.theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.aside`
    background-color: ${(props) => props.theme.colors.black};
    min-width: 17rem;
    min-height: 100vh;
    height: auto;
    overflow-y: hidden;

    @media screen and ( max-width: ${(pops)=> pops.theme.breakpoints.md}) {
        min-width: 100%;
        min-height: auto;
        height: auto;
    }
`;
 export const Loading = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
 ` 
export const Main = styled.section`
    background-color: ${(props) => props.theme.colors.gray800};
    width: 100%;
    height: auto;
    /*min-height: 100vh;*/
    overflow-y: hidden;
    padding: 40px;

    @media screen and (max-width: ${(pops)=> pops.theme.breakpoints.md}) {
        height: 100%;
    }

    @media screen and (max-width: ${(pops)=> pops.theme.breakpoints.sm}) {
        padding: 40px 20px;
    }
`;
