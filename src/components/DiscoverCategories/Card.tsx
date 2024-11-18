type propsType = {
  card: {
    id: number;
    title: string;
    img: string;
    link: string;
  };
};
export default function Card({ card }: propsType) {
  return (
    <a href={card.link} target="_blank" rel="noopener noreferrer" className="block"> {/* Make the entire card clickable */}
      <div className="px-6 py-7 pb-4 bg-[#F5F5F5] rounded-2xl w-[20rem] flex flex-col items-center gap-y-3">
        <div className="h-[17rem] w-[17rem] rounded border">
          <img src={card.img} className="rounded object-cover w-full h-full" />
        </div>
        <h2 className="text-[#9D7938] font-Philosopher text-center font-bold text-2xl cursor-pointer">
          {card.title}
        </h2>
      </div>
    </a>
  );
}
