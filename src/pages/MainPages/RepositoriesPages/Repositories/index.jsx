import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'
import RepositoriesContent from './RepositoriesMain'



function Repositories( { repositories , currentlanguage } ) {
  const repos = repositories
  .filter((reposirtory)=> currentlanguage === undefined || reposirtory.language === currentlanguage)
  .map((repository) => <RepositoriesContent key={repository.id} repository={repository} />)
  return (
    <Container>
       {repos}
    </Container>
  )
}
 Repositories.defaultProps = {
  currentlanguage:undefined,
 }
Repositories.propTypes = {
  repositories : PropTypes.arrayOf( 
  PropTypes.shape({

    id: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,

  }).isRequired,
).isRequired,

 currentlanguage: PropTypes.string,
 
 }

export default Repositories
