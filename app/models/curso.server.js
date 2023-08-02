const baseUrl = process.env.API_URL;

export async function getCurso(){
    const respuesta = await fetch(`${baseUrl}/curso?populate=imagen`)
    const resultado = await respuesta.json();
    
    return resultado;
}