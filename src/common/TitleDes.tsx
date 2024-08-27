interface TitleDesProps {
  title: string;
  description: string; // Puedes seguir usando string aquí
}

function TitleDes({ title, description }: TitleDesProps) {
  return (
    <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
      <h2 className="mb-4 text-4xl font-semibold text-gray-800">{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
}

export default TitleDes;
