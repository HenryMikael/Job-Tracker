import axios from 'axios';
import type { Job, JobInput } from '../types/job';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getJobs = () => api.get<Job[]>('/jobs').then(r => r.data);
export const getJob = (id: number) => api.get<Job>(`/jobs/${id}`).then(r => r.data);
export const createJob = (data: JobInput) => api.post<Job>('/jobs', data).then(r => r.data);
export const updateJob = (id: number, data: JobInput) => api.put<Job>(`/jobs/${id}`, data).then(r => r.data);
export const deleteJob = (id: number) => api.delete(`/jobs/${id}`);