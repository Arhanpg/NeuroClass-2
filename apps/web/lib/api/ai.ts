const AI_SERVICE_URL = process.env.NEXT_PUBLIC_AI_SERVICE_URL ?? '';

export const invokeAI = async (payload: Record<string, unknown>) => {
  const res = await fetch(`${AI_SERVICE_URL}/invoke`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`AI service error: ${res.status}`);
  return res.json();
};

export const ingestDocument = async (payload: Record<string, unknown>) => {
  const res = await fetch(`${AI_SERVICE_URL}/ingest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Ingest error: ${res.status}`);
  return res.json();
};
