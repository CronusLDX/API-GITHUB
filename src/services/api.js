import axios from "axios";
import langColors from '../styles/LangColors';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let languageCounts = {};

  for (let repository of repositories) {
    const language = repository.language;
    languageCounts[language] = (languageCounts[language] || 0) + 1;
  }

  delete languageCounts.null;

  const languages = Object.keys(languageCounts)
    .map((language) => ({
      name: language,
      count: languageCounts[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return languages;
};
