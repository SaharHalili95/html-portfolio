const BASE_PATH = import.meta.env.BASE_URL || '/';

export const getImagePath = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}${cleanPath}`;
};
