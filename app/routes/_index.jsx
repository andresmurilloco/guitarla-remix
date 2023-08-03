import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server'
import {getPosts} from '~/models/posts.server'
import {getCurso} from '~/models/curso.server'
import ListadoGuitarras from '../components/listado-guitarras';
import ListadoPosts from '../components/listado-posts';
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from '../components/curso';

export function meta(){
  return[
    {title: 'GuitarLa - Home'},
    {description: 'Bienvenido al mundo de las guitarras'}
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso,
    }
  ]
}

export async function loader(){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);
  return{
    guitarras: guitarras.data, 
    posts:posts.data,
    curso: curso.data
  };
}

function Index() {
  const {guitarras, posts, curso} = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras}/>
        <Curso curso={curso.attributes}/>
        <ListadoPosts posts={posts}/>
      </main>
    </>
  )
}

export default Index