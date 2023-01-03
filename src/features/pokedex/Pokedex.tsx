import Container from "react-bootstrap/Container";
import { If, Then, Else } from "react-if";
//import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useGetPokemonQuery } from "./pokedexAPI";
import { Pokemon } from "./Pokemon"

export function Pokedex() {
  // const searchHistory = useAppSelector((state) => state.history);
  // const dispatch = useAppDispatch();

  const { data, isFetching, isLoading } = useGetPokemonQuery();

  return (
    <>
      <If condition={isLoading || isFetching}>
        <Then>
          <p>Loading...</p>
        </Then>
        <Else>
        <Container className="row row-cols-md-6">
            {data?.results.map(pokemon => {
                return (
                    <div className="col">
                    <Pokemon name={pokemon.name} />
                    </div>
                )
            })}
            </Container>
        </Else>
      </If>
    </>
  );
}
