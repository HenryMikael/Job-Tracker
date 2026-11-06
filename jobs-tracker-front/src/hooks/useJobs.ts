import { useEffect, useState } from "react";
import type { Job } from "../types/job";
import { getJobs } from "../api/jobs";
export function useJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        let cancelled = false;
        getJobs()
            .then(data => {if (!cancelled) setJobs(data); })
            .catch(() => {if (!cancelled) setError('Não foi possível carregar as vagas.'); })
            .finally(() => {if (!cancelled) setLoading(false); })
        return () => { cancelled = true; };
    }, []);

    return { jobs, loading, error, setJobs };
}
