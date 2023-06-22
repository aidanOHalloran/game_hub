import useGames from "../Hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); //gets data via the useGames hook
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && (
        <Text textColor={"red"} fontSize="xl">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map(
          (
            game //map through the games array retrieved via useGames hook
          ) => (
            <GameCard key={game.id} game={game} />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
