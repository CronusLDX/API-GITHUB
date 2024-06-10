import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getUser, getRepos, getLangsFrom } from '../../../services/api';

function RepositoriesPage() {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userResponse, userRepositories] = await Promise.all([
          getUser(login),
          getRepos(login)
        ]);
        setUser(userResponse.data);
        setRepositories(userRepositories.data);
        setLanguages(getLangsFrom(userRepositories.data));
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [login]);

  const handleSetLanguage = (lang) => setCurrentLanguage(lang);

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={language} currentLanguage={currentLanguage} onClick={handleSetLanguage} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
