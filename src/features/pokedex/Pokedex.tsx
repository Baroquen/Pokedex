import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { If, Then, Else } from "react-if";
import { useGetPokemonQuery } from "./pokedexApi";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "../history/SearchBar";
import { PokemonUrls } from "./types.d";

export function Pokedex() {
  // const searchHistory = useAppSelector((state) => state.history);
  // const dispatch = useAppDispatch();

  const { data, isFetching, isLoading } = useGetPokemonQuery();
  const [display, setDisplay] = useState<PokemonUrls[] | undefined> (data?.results );

  useEffect(() => {
    setDisplay(data?.results);
  }, [data]);

  const onChange = (newValue: string) => {
    if (!!newValue) {
      setDisplay(data?.results.filter((x) => x.name.startsWith(newValue)));
    } else {
      setDisplay(data?.results);
    }
  };

  return (
    <>
      <If condition={isLoading || isFetching}>
        <Then>
          <p>Loading...</p>
        </Then>
        <Else>
          <Container>
            <Row>
              <SearchBar onChange={onChange} />
            </Row>
            <Row className="row-cols-md-6">
              {display?.map((pokemon) => {
                return (
                  <div className="col">
                    <PokemonCard name={pokemon.name} />
                  </div>
                );
              })}
            </Row>
          </Container>
        </Else>
      </If>
    </>
  );
}
