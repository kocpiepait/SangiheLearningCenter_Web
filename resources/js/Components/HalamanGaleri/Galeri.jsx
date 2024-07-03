export default function ({ galeri }) {
  return (
    <div className="relative w-full h-full flex flex-wrap">
      {galeri.map((item, index) => (
        <div key={index} className="m-2">
          <img
            className="rounded w-[369px] h-[358px] object-cover"
            alt={`Galeri ${index}`}
            src={`/storage/${item.foto}`}
          />
        </div>
      ))}
    </div>
  );
}
