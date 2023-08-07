import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/navbar";
import album from "../albums/album.module.css";
import Footer from "../components/footer";

export default function AlbumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={album.main_grid}>
      <div className={album.nav_container}>
        <NavBar align="center" modo="album"></NavBar>
        <div className={album.footer_top}>
          <Footer></Footer>
        </div>
      </div>
      <section className={album.main_content}>
        <svg className="grainy_background" width="100%" height="100%">
          <filter id="grano">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grano)"></rect>
        </svg>
        {children}
      </section>
    </main>
  );
}
