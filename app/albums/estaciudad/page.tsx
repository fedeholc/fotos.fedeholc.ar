import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../../components/footer";
import FotoModal3 from "../../fotomodal3";
import Link from "next/link";
import album from "../album.module.css";

export default function Bla() {
  return (
    <div className={album.page_container}>
      <div className={album.divider}><div></div></div>
      
      <div className={album.fotogrid1}>
        <div className={album.titulo__wrapper}>
          <div className={album.titulo__container}>
            <div className={album.titulo}>
              <>ESTA CIUDAD que no es tuya ni mía</>
            </div>
            <div className={album.descripcion__container}>
              <div className={album.descripcion}>fanzine</div>
            </div>
          </div>
        </div>
        {/*   <div className={album.descarga}>
          <p>Podés descargar el fanzine en pdf</p>&nbsp; <Link href="" target="_blank">aquí</Link>
        </div> */}
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad00.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad01.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad02.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad03.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad04.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad05.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad06.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad07.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad08.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad09.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad10.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad11.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad12.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad13.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad14.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad15.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad16.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad17.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad18.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad19.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad20.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad21.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad22.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad23.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad24.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3>
        <FotoModal3>
          <Image
            className={album.foto}
            src="/estaciudad/estaciudad25a.webp"
            alt=""
            width={1920}
            height={1080}
          />
        </FotoModal3> <div className={album.licencia}>
        <p>Todas las imágenes bajo licencia Creative Commons</p>
        &nbsp;
        <Link
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.es"
          target="_blank"
        >
          CC BY-SA 4.0
        </Link>
      </div>
      </div>
     
      <div className={album.footer_bottom}>
        <Footer></Footer>
      </div>
    </div>
  );
}
