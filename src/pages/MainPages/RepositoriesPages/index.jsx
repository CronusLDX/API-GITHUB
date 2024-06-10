import {React , useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'

import { Loading,Container,Sidebar,Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'
import { getUser , getRepos, getLangsFrom } from '../../../services/api'

function RepositoriesPage() {
    const {login} = useParams();
  const[loading,setloading] = useState(true)
  const [user,setUser] = useState()
  const [repositories, setRepositories] = useState();
  const [language ,setLanguages] = useState();
  const [currentlanguage,setcurrentlanguage] = useState();
  useEffect(() => {
    const loadData = async () => {

      
     const [userResponse , userRepositories] = await Promise.all([
      getUser(login),
      getRepos(login)
     ]);
     setUser(userResponse.data);
     setRepositories(userRepositories.data)
     setLanguages(getLangsFrom(userRepositories.data))
     setloading(false);
    };
    
    loadData()
  },[])

  const HandleSet = (lang)=> setcurrentlanguage(lang);
   
  if(loading){
    return <Loading>Carregando...</Loading>
  }
  return (
    <Container>
        <Sidebar>
            <Profile user={user}/>
            <Filter languages={language} currentlanguage={currentlanguage} onClick={HandleSet}/>
        </Sidebar>
        <Main><Repositories repositories ={repositories} currentlanguage={currentlanguage} /></Main>
    </Container>
  )
}

export default RepositoriesPage
