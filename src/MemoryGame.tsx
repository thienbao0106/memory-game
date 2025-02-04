import { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardItem } from "./types/CardType";
type MemoryGameProps = {
  imageUrls: string[];
};

const MemoryGame = ({ imageUrls }: MemoryGameProps) => {
  const [arrClickedCard, setArrClickedCard] = useState<CardItem[]>([]);
  const [arrCards, setArrCards] = useState<CardItem[]>(
    Array.from(imageUrls)
      .concat(imageUrls)
      .map((url: string, index: number) => {
        return {
          id: index,
          url,
          isMatched: false,
          isFlipped: false,
        };
      })
  );

  const checkCard = () => {
    if (arrClickedCard[0].url === arrClickedCard[1].url) {
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
    console.log("check");
    if (arrClickedCard.length !== 2) return;
    const func = setTimeout(() => {
      checkCard();
    }, 1000);
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
    // checkCard();
  };

  return (
    <section
      className={`grid justify-center items-center gap-3 grid-cols-${imageUrls.length}`}
    >
      {arrCards.map((item: CardItem, index: number) => (
        <Card setArrClickedCard={handleOnClick} cardItem={item} key={index} />
      ))}
    </section>
  );
};

export default MemoryGame;
