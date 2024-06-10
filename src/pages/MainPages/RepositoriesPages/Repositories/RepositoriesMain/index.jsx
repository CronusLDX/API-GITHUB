import React from 'react'
import PropTypes from'prop-types'
import { FaGithub } from "react-icons/fa";
import { Container, Title ,Description,FooterContainer,DataFooter,FooterLink} from './styles'
import langColors from '../../../../../styles/LangColors'

function RepositoriesContent( { repository } ) {
  const colorOflangs = langColors[repository.language && repository.language.toLowerCase()]
  return (
    <Container color={colorOflangs}>
        <Title>{repository.name}</Title>
        <Description>{repository.description}</Description>
        <FooterContainer color={colorOflangs}>
            <DataFooter>{repository.language}</DataFooter>
            <DataFooter> <FooterLink href={repository.html_url} target='_blank' alt='link' rel="noreferrer"><FaGithub size={20} color='white'/> </FooterLink></DataFooter>  
        </FooterContainer>
            
    </Container>
  )
}
RepositoriesContent.propTypes = {
  repository: PropTypes.shape({

    id: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,

  }).isRequired
}

export default RepositoriesContent