import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import navbar from "./navbar.module.css";
import { MdEmail, MdPhotoLibrary } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Foot from "./footer.module.css";

type Props = {
  modo: string;
  align: string;
};

export default function NavBar({ modo, align }: Props) {
  let navbarAlign = navbar.align_items_start;
  if (align === "center") {
    navbarAlign = navbar.align_items_center;
  }

  let navbarModo = navbar.nav__top__index;
  if (modo === "album") {
    navbarModo = navbar.nav__top__album;
  }

  return (
    <nav className={`${navbar.container}`}>
      <div className={`${navbar.nav__top} ${navbarModo} ${navbarAlign}`}>
        {/*   <div className={`${navbar.titulo}`}>
          <Link href="/">FEDERICO HOLC</Link>
        </div> */}

        <Link href="/albums/estaciudad">
          <button>ESTA CIUDAD que no es tuya ni mía</button>
        </Link>
        <span className={`${navbar.emoji__divider}`}>&nbsp;⭐&nbsp;</span>
        <Link href="/ ">
          <button disabled>ESPLENDOLIA (próximamente) </button>
        </Link>
        <div>
          <Link href="/ ">
            <button disabled>
              <div>FANTAURORA Formarítmica</div>
              (próximamente)
            </button>
          </Link>
        </div>

        <span className={`${navbar.emoji__divider}`}>&nbsp;⭐&nbsp;</span>

        {/*   <Link href="/albums/bla">
          <button>FUEGO y Purpurina (blog)</button>
        </Link> */}
        <Link href="/">
          <button disabled>
            <div>BRILLOTOPÍA Cromadistópica</div> (próximamente)
          </button>
        </Link>

        <div className={`${navbar.button_group}`}>
          {/*     <Link href="/albums/bla">
            <button>
              Instagram
              <Image
                src="/brand-instagram.png"
                alt="instagram icon"
                width={40}
                height={40}
              />
            </button>
          </Link>
          <Link href="/albums/bla">
            <button>
              Mail
              <Image src="/mail.png" alt="mail icon" width={40} height={40} />
            </button>
          </Link> */}
          {/*   <Link
            className={navbar.icon}
            href="https://instagram.com/fedeholc"
            target="_blank"
          >
            <RiInstagramFill></RiInstagramFill>
          </Link>
          <Link className={navbar.icon} href="mailto: federicoholc@gmail.com">
            <MdEmail></MdEmail>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
