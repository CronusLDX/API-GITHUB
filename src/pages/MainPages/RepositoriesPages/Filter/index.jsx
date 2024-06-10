import React from 'react'

import PropTypes  from 'prop-types'

import { MdDelete } from "react-icons/md";

import { Container, Seletor, Limpar } from './styles'

function Filter({ languages,currentlanguage,onClick  }) {
   
   const selectors = languages.map(({name,count,color})=> (
    <Seletor 
    key={name.toLowerCase()} 
    color={color}
    className={currentlanguage === name ? 'selected': '' }
    onClick={() => ( onClick && onClick(name))}
    >
        <span>{name}</span>
        <span>{count}</span>
    </Seletor>
  )) 
   const HandleUnset = () =>(onClick && onClick(undefined)) 
  return (
    <Container>
        {selectors}
      <Limpar onClick={HandleUnset}> <MdDelete size={20}/></Limpar>
    </Container>
  )
}
Filter.defaultProps = {
  currentlanguage: null,
  onClick: null,
 
}
 
Filter.propTypes = { 
  languages: PropTypes.arrayOf(
    PropTypes.shape({
     name: PropTypes.string.isRequired,
     count: PropTypes.number.isRequired,
     color:PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  currentlanguage: PropTypes.string,
  onClick: PropTypes.func,
  
}
export default Filter