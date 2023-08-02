const baseUrl = process.env.API_URL;

export async function getPosts(){
    const respuesta = await fetch(`${baseUrl}/posts?populate=imagen`)
    const resultado = await respuesta.json();
  
    return resultado;
  }

  export async function getPost(url){
    const respuesta = await fetch(`${baseUrl}/posts?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
  }