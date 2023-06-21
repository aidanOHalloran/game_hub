import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //device < 1024px
        lg: `"nav nav" "aside main"`, //device > 1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          ASIDE
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
