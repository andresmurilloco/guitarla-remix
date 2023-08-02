import {useLoaderData} from '@remix-run/react';
import {getGuitarra} from '~/models/guitarras.server'

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl);
  
  if(guitarra.data.lenth === 0){
    throw new Response('',{
      status:404,
      statusText:'Guitarra no encontrada'
    })
  }
  return guitarra;
}

export function meta({data}){
  if(!data){
    return[
      {title:'Guitarra no encontrada'},
      {description: `Guitarras, venta de guitarras - Guitarra no encontrada`}
    ]
  }
  return [
    {title:`GuitarLA - ${data.data[0].attributes.nombre}`},
    {descripcion:`Guitarras, venta de guitarras - ${data.data[0].attributes.nombre}`}
  ]
}

function Guitarra() {
  const guitarra = useLoaderData();
  const {nombre, descripcion, precio, imagen} = guitarra.data[0].attributes;

  return (
    <div className='guitarra'>
      <img src={imagen.data.attributes.url} className='imagen' alt={`Imagen de la guitarra ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>{precio}</p>
      </div>
    </div>
  )
}

export default Guitarra