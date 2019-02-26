import { get } from './fetch';

export function suggestDeals(keyword, { lat, lng }) {
  const url = 'http://localhost:9000/layout/api/v2/autocomplete/deals';
  const params = {
    limit: 10,
    input: keyword,
    lat,
    lng,
  };

  return get(url, params).then(result => {
    return result && Array.isArray(result.items) ? result.items : [];
  });
}
