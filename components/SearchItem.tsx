import IItem from "../types/IItem";

interface IProps {
  /**
   * Item in the cart
   */
  item: IItem;
}

export default function SearchItem({ item }: IProps) {
  return (
    <a
      href={item.typehint === "game" ? "/games/" + item.id : "/consoles/" + item.id}
      className="mb-4 hidden flex-row border-y-[1px] border-purple-500 p-1 first:border-t-0 lg:flex"
    >
      <div className="image-div mr-4 flex w-20 flex-initial justify-center">
        <img className="self-center object-cover" src={item.thumbnail} />
      </div>
      <div className="info-div flex-auto">
        <h1 className="text-xs font-black sm:text-base">{item.name}</h1>
        <p className="text-xs sm:text-base">{item.description}</p>
      </div>
    </a>
  );
}
