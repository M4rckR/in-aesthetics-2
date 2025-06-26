/**
 * Función para gestionar URLs del CDN
 * @param path - Ruta del archivo en el CDN
 * @returns URL completa del CDN
 */
export const cdn = (path: string): string => {
  const CDN_BASE_URL = process.env.CDN_BASE || 'https://cdn.inaesthetics.pe';
  
  // Asegurar que el path comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combinar URL base del CDN con la ruta
  return `${CDN_BASE_URL}${normalizedPath}`;
};
