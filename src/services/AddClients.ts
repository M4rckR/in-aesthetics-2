import axios from "axios"
import { Client } from "../types"

const url = "https://v1.nocodeapi.com/marck/google_sheets/cPFsIhuLxGuFBNlb/addRows?tabId=datos_cliente_inaesthetics"

export const AddClients = async(datos: Client) => {
    // La API espera un array de objetos, no un objeto con arrays
    // Formato correcto: [{campo1: valor1, campo2: valor2}]
    const formatDatos = [datos]; // Simple array con el objeto de datos

    try {
        console.log("Enviando datos:", formatDatos);
        const {data} = await axios.post(url, formatDatos, {
            headers: { "Content-Type": "application/json" } 
        })
        console.log("Respuesta de API:", data);
        return data
    }
    catch(error) {
        console.error("Error en la petición:", error);
        throw error
    }
}