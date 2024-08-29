import TitleDes from "../common/TitleDes";
import ReactPlayer from "react-player";
import ButtonLink from "../common/ButtonLink";

function VideoPlayer() {
  return (
    <section className="pb-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pb-5 pt-10 lg:flex-row lg:px-8">
        {/* Sección de texto a la izquierda */}
        <div className="w-full lg:w-1/2">
          <TitleDes
            title="Coffee Tech"
            description="Revisa todas las funcionalidades que nuestra <br> aplicación tiene para la gestión de tus cultivos de café"
          />
          <div className="flex justify-center pt-8">
            <ButtonLink
              href="http://localhost:5173/documentation"
              className="rounded-lg bg-customRed px-4 py-2 text-white"
            >
              Manual de usuario
            </ButtonLink>
          </div>
        </div>

        {/* Sección del video a la derecha */}
        <div className="w-full lg:w-1/2">
          <div className="pr-5">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=BY1ERORYXzw"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
