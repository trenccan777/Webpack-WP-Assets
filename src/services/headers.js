export default function axiosHeaders() {
  const headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'X-WP-Nonce': wpApiSettings.nonce,
  };

  return headers;
}
