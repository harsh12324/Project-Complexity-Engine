import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const analyzeProject = async (payload) => {
  const response = await api.post('/analyze', payload);
  return response.data;
};

export const askAssistant = async (question, formData) => {
  const response = await api.post('/assistant', { question, formData });
  return response.data.answer;
};

export const fetchTemplates = async () => {
  const response = await api.get('/templates');
  return response.data.templates;
};

export default api;
