import { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardItem } from "./types/CardType";
type MemoryGameProps = {
  imageUrls: CardItem[];
};

const MemoryGame = ({ imageUrls }: MemoryGameProps) => {
  const [arrClickedCard, setArrClickedCard] = useState<CardItem[]>([]);
  const [arrCards, setArrCards] = useState<CardItem[]>(imageUrls);
  const [score, setScore] = useState(0);
  const checkCard = () => {
    if (arrClickedCard[0].url === arrClickedCard[1].url) {
      setScore((prev) => prev + 1);

      const newArr = arrCards.map((card: CardItem) => {
        if (
          card.id === arrClickedCard[0].id ||
          card.id === arrClickedCard[1].id
        )
          return { ...card, isMatched: true };
        return card;
      });
      setArrCards([...newArr]);
      alert("Found the card!");
    } else {
      const newArr = arrCards.map((card: CardItem) => {
        if (
          card.id === arrClickedCard[0].id ||
          card.id === arrClickedCard[1].id
        )
          return { ...card, isFlipped: false };
        return card;
      });
      setArrCards([...newArr]);
      alert("Incorrect Card!");
    }
    setArrClickedCard([]);
    return;
  };

  useEffect(() => {
    if (arrClickedCard.length !== 2) return;
    const func = setTimeout(() => {
      checkCard();
    }, 400);
    return () => {
      clearTimeout(func);
    };
  }, [arrCards]);

  const handleOnClick = (card: CardItem) => {
    arrClickedCard.push(card);
    console.log(arrClickedCard);
    setArrClickedCard(arrClickedCard);
    const indexCard = arrCards.findIndex(
      (arrCard: CardItem) => arrCard.id === card.id
    );
    arrCards.splice(indexCard, 1, card);
    const newArr = arrCards;
    setArrCards([...newArr]);
  };

  return (
    <section>
      <section>
        <p>
          Score: <strong>{score}</strong>
        </p>
        {score === arrCards.length / 2 && (
          <p>
            You've already finished the game, you can{" "}
            <a className="font-bold text-blue-500" href="/">
              restart again
            </a>
          </p>
        )}
      </section>
      <section
        className={`grid justify-center items-center gap-3 grid-cols-${
          imageUrls.length / 2
        }`}
      >
        {arrCards.map((item: CardItem, index: number) => (
          <Card setArrClickedCard={handleOnClick} cardItem={item} key={index} />
        ))}
      </section>
    </section>
  );
};

export default MemoryGame;
