export const fetchUrl = (url: string): Promise<Response> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response;
    })
}
