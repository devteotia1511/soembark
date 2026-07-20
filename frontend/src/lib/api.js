// Tiny fetch client. Same error shape on the wire as the API returns:
//   { success: bool, ...data } on success
//   { error: { code, message, fields? } } on failure

// In production, use the deployed backend URL from Vercel env var
// In dev, VITE_API_BASE_URL is unset, so fall back to the local Express server
const BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000';

export class ApiError extends Error {
  constructor(message, { code, status, fields } = {}) {
    super(message);
    this.name = 'ApiError';
    this.code = code || 'unknown';
    this.status = status || 0;
    this.fields = fields || null;
  }
}

export async function api(path, { method = 'POST', body, headers, signal } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // non-JSON response, treat as opaque failure
  }

  if (!res.ok) {
    const err = data?.error || {};
    throw new ApiError(err.message || `Request failed (${res.status})`, {
      code: err.code || 'http_error',
      status: res.status,
      fields: err.fields || null,
    });
  }

  return data;
}

export const submitInquiry = (payload, signal) =>
  api('/api/inquiries', { body: payload, signal });

// Admin helpers (used by future admin UI; not wired to the public site yet)
export const adminListInquiries = (params = {}, headers = {}) => {
  const qs = new URLSearchParams(params).toString();
  return api(`/api/inquiries${qs ? `?${qs}` : ''}`, { method: 'GET', headers });
};
