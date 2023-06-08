import { archivoBlack } from "./layout";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* <h1 className={archivoBlack.className}>hola =)</h1> */}

      <div className="flex   flex-col  p-24 gap-5">
        <h1>hola =)</h1>
        <h2>El sitio web está en construcción.</h2>
        <h3>Mientras tanto podés ver mis fotos acá: </h3>
        <a href="http://www.instagram.com/fedeholc/">
          <span className="link__insta">instagram.com/fedeholc</span>
        </a>
      </div>
    </main>
  );
}
