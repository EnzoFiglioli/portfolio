const GITHUB_API = "https://api.github.com";

export const getRepositories = async (username: string) => {
  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`,
  );

  if (!response.ok) {
    throw new Error("No se pudieron obtener los repositorios");
  }

  return response.json();
};