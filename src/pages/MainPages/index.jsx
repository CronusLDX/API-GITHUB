import React, { useState } from "react";

import { CiSearch } from "react-icons/ci"; 

 import { Container, Title ,Logo, Form, Input, Button} from "./styles";

 import githublogo from "../../assets/images/github-logo.svg" 

export default function Main() {
  const [login,setLogin] = useState('')  
  const HandleChange = (e)=> {
    setLogin(e.target.value)
  }

  return (
    <Container>
      <Title>API GITHUB</Title>
      <Logo src={githublogo} />
      <Form>
        <Input placeholder="Digite o username..." 
        value={login} 
        onChange={HandleChange} />
        <Button to={`/${login}/repositories`}><CiSearch size={35}/></Button>
      </Form>
      
    </Container>
     
  );
}
