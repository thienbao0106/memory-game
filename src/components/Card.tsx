import { CardItem } from "../types/CardType";

type CardProps = {
  cardItem: CardItem;
  setArrClickedCard: any;
};

const Card = ({ cardItem, setArrClickedCard }: CardProps) => {
  return (
    <div
      aria-disabled={cardItem.isFlipped || cardItem.isMatched}
      onClick={() => {
        setArrClickedCard({ ...cardItem, isFlipped: true });
      }}
      className={` rounded-lg border border-b-2`}
    >
      {cardItem.isMatched || cardItem.isFlipped ? (
        <img
          className="w-100 h-100"
          src={cardItem.url}
          alt={`img-${cardItem.id}`}
        />
      ) : (
        <div className="w-100 h-100  hover:bg-gray-400 hover:cursor-pointer flex justify-center items-center">
          <h1 className="font-bold text-lg">Dumb test</h1>
        </div>
      )}
    </div>
  );
};

export default Card;
