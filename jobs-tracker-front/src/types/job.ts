export type JobStatus = 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export interface Job {
  id: number;
  company: string;
  role: string;
  url?: string;
  status: JobStatus;
  appliedAt: string;
  notes?: string;
}

export interface JobInput {
  company: string;
  role: string;
  url?: string;
  status: JobStatus;
  appliedAt: string;
  notes?: string;
}