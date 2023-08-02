import Imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de guitarras, blog de música" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: 'preload',
      href: Imagen,
      as: 'image'
    }
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            lorem mauris. Nunc commodo vehicula diam, sit amet vulputate augue
            vulputate eu. Vestibulum id urna diam. Phasellus cursus tincidunt
            nunc, ac finibus est cursus a. Sed lacus nisl, laoreet ut
            consectetur at, sollicitudin ut magna. Aenean dictum magna non metus
            venenatis, at tincidunt nunc efficitur. Nulla ornare arcu nec libero
            dictum dapibus. Duis sit amet tristique ante. Nullam porta lectus
            eget urna auctor malesuada. Sed nec ornare ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            lorem mauris. Nunc commodo vehicula diam, sit amet vulputate augue
            vulputate eu. Vestibulum id urna diam. Phasellus cursus tincidunt
            nunc, ac finibus est cursus a. Sed lacus nisl, laoreet ut
            consectetur at, sollicitudin ut magna. Aenean dictum magna non metus
            venenatis, at tincidunt nunc efficitur. Nulla ornare arcu nec libero
            dictum dapibus. Duis sit amet tristique ante. Nullam porta lectus
            eget urna auctor malesuada. Sed nec ornare ipsum.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
