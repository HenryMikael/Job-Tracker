import type { JobStatus } from "../types/job";

const STYLES: Record<JobStatus, string> = {
    APPLIED:    'bg-blue-100 text-blue-800',
    INTERVIEW:  'bg-yellow-100 text-yellow-800',
    OFFER:      'bg-green-100 text-green-800',
    REJECTED:   'bg-red-100 text-red-800',
};
const LABELS: Record<JobStatus, string> = {
    APPLIED: "Aplicado",
    INTERVIEW: "Entrevista",
    OFFER: "Oferta",
    REJECTED: "Rejeitado",
};

export default function StatusBadge({ status }: { status: JobStatus}) {
    return (
        <span className={`inline-block rounded-full px-3 py-1 test-xs font-semibold ${STYLES[status]}`}>
            {LABELS[status]}
        </span>
    )
}