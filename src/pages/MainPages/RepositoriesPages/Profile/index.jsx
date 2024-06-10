import React from 'react'

import { PropTypes } from 'prop-types'

import { MdGroup, MdLocationCity, MdWork,MdLink} from 'react-icons/md'

import { Container , Header, Login, Avatar, Name, DataContainer, Data , Link } from './styles'

function Profile({ user }) {
  return (
    <Container>
        <Header>
            <Avatar src={user.avatar_url}/>
            <Login>{user.login}</Login>
            <Name>{user.name}</Name>
            <DataContainer> 
             <Data> <MdGroup size={15}/>{user.following}&nbsp;<i>seguidores</i>&nbsp;&nbsp;&middot;&nbsp;&nbsp;<MdGroup size={15}/>{user.followers}&nbsp;<i>seguindo</i></Data>
             {user.company && (<Data> <MdLocationCity size={20}/>{user.company}</Data>)}
             {user.location && (<Data> <MdWork size={20}/>{user.location}</Data>)}
             <Data> 
              <MdLink size={20}/>
              <Link href={user.blog}>{user.blog}</Link>
             </Data>
            </DataContainer>
        </Header>
    </Container>
  )
}
  Profile.propTypes = {
    user: PropTypes.shape({
     
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired ,
      avatar_url:PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      location:PropTypes.string,
      blog:PropTypes.string.isRequired,
      company:PropTypes.string,

    }).isRequired
  }
export default Profile