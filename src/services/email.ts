import axios from 'axios';
import type { Client } from '@/types';

/**
 * Envía los datos del formulario de contacto a la API
 * @param data Datos del formulario validados
 * @returns Promise con la respuesta del servidor
 */
export const sendContactForm = async (data: Client) => {
  return axios.post("/api/send", data);
};
