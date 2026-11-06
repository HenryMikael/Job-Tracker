import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobListPage from './pages/JobListPage';
import JobFormPage from './pages/JobFormPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/jobs/new" element={<JobFormPage />} />
        <Route path="/jobs/:id/edit" element={<JobFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}