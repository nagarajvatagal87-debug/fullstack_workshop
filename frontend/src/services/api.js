import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});


export const getStats = () => api.get('/dashboard/stats');


export const getEvents = (params = {}) => api.get('/events', { params });
export const getEvent = (id) => api.get(`/events/${id}`);
export const createEvent = (data) => api.post('/events', data);
export const updateEvent = (id, data) => api.put(`/events/${id}`, data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

export const getStudents = () => api.get('/students');
export const createStudent = (data) => api.post('/students', data);
export const deleteStudent = (id) => api.delete(`/students/${id}`);

// Registrations
export const getRegistrations = (params = {}) => api.get('/registrations', { params });
export const createRegistration = (data) => api.post('/registrations', data);
export const deleteRegistration = (id) => api.delete(`/registrations/${id}`);

// Error Helper
export const getErrorMessage = (error) => {
  return error.response?.data?.message || error.message || 'Something went wrong';
};

export default api;

