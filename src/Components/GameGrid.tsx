import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const {games, error } = useGames(); //gets data via the useGames hook

  return (
    <>
      {error && <Text textColor={'red'} fontSize='xl'>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl:5 }} padding={10} spacing={10}>
        {games.map((game) => (  //map through the games array retrieved via useGames hook
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
