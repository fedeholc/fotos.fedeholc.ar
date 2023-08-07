import Image from "next/image";
import styles from "./page.module.css";

import FotoModal3 from "./fotomodal3";
import Link from "next/link";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="main__grid_1col">
      <div className="main__nav-container">
        <NavBar modo="index" align="center"></NavBar>
      </div>

      <section ></section>
      <Footer></Footer>
    </div>
  );
}
