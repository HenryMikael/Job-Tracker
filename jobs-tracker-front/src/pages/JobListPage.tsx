import { Link } from "react-router-dom";
import { useJobs } from "../hooks/useJobs";

export default function JobListPage() {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (jobs.length === 0)
    return (
      <div>
        <p>Nenhuma vaga cadastrada</p>
        <Link to="/jobs/new">Cadastrar primeira vaga</Link>
      </div>
    );

  return (
    <div>
      <h1>Minhas vagas</h1>
      <Link to="/jobs/new">+ Nova Vaga</Link>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.company}</strong> — {job.role} — {job.status}
            <Link to={`/jobs/${job.id}/edit`}>editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
