import axios from "axios";
import langColors from '../styles/LangColors';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let getLanguage = repositories
    .map((repository) => repository.language)
    .reduce((data, language) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), {});

  delete getLanguage.null;

  // Criar um novo array com todas as chaves do objeto
  getLanguage = Object.keys(getLanguage)
    .map((language) => ({
      name: language,
      count: getLanguage[language],
      color: langColors[language.toLowerCase()]
    }))
    .sort((a, b) => b.count - a.count);

  return getLanguage;
};
