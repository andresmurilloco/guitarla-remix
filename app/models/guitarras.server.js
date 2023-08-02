const baseUrl = process.env.API_URL;

export async function getGuitarras(){
    const respuesta = await fetch(`${baseUrl}/guitarras?populate=imagen`)
    const resultado = await respuesta.json();
  
    return resultado;
  }

  export async function getGuitarra(url){
    const respuesta = await fetch(`${baseUrl}/guitarras?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
  }