import MemoryGame from "./MemoryGame";
import _ from "lodash";
const App = () => {
  const imageUrls = [
    "https://live.staticflickr.com/65535/50957136822_3a08c91d49_z.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4a7de6f-aa36-48af-b4ef-3f9524396581/dfq2x0g-bc3670f6-e2d3-41da-b92f-a857df7ea2ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YTdkZTZmLWFhMzYtNDhhZi1iNGVmLTNmOTUyNDM5NjU4MVwvZGZxMngwZy1iYzM2NzBmNi1lMmQzLTQxZGEtYjkyZi1hODU3ZGY3ZWEyZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T5DbxfbX5flXx9_uaq9Z7DP9SkDLW5MegDXvC0w9eGk",
  ];
  const arr = Array.from(imageUrls)
    .concat(imageUrls)
    .map((url: string, index: number) => {
      return {
        id: index,
        url,
        isMatched: false,
        isFlipped: false,
      };
    });
  return (
    <main className="flex w-full h-screen justify-center items-center flex-col gap-y-2">
      <h1 className="font-bold text-3xl">Memory Game</h1>
      <p className="text-lg">
        Just a small game I made when I was in my free time.
      </p>

      <MemoryGame imageUrls={_.shuffle(arr)} />
    </main>
  );
};

export default App;
