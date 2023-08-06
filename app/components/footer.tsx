import Foot from "./footer.module.css";
import { MdEmail, MdPhotoLibrary } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Link
 from "next/link";
 
export default function Footer() {
  return (
    <footer className={Foot.container}>
      <div className={Foot.text}>
        <Link href="/">
          <div className={Foot.nombre}>FEDERICO HOLC</div>
        </Link>
        <div className={Foot.emoji}>⚡️</div>
        {/* <div className={Foot.nombre}>2023</div>
        <div className={Foot.emoji}>⚡️</div> */}
        {/*  <a
          className={Foot.icon}
          href="https://fotos.fedeholc.ar"
          target="_blank"
        >
          <MdPhotoLibrary></MdPhotoLibrary>
        </a> */}
        <a
          className={Foot.icon}
          href="https://instagram.com/fedeholc"
          target="_blank"
        >
          <RiInstagramFill></RiInstagramFill>
        </a>
        <a className={Foot.icon} href="mailto: federicoholc@gmail.com">
          <MdEmail></MdEmail>
        </a>
      </div>
    </footer>
  );
}
