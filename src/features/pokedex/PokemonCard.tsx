import { FC, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { If, Then, Else } from "react-if";
import Skeleton from "react-loading-skeleton";
import { PokemonDetails } from "./PokemonDetails";
import { useAppDispatch } from "../../app/hooks";
import { Pokemon } from "./types.d";
import { add } from "../history/historySlice";

interface PokemonProps {
  name: string;
}

export const PokemonCard: FC<PokemonProps> = ({ name }: PokemonProps) => {
  const { data, isLoading, isFetching } = useGetPokemonByNameQuery(name);
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClick = (pokemon: Pokemon) => {
    setIsDisplayed(true);
    dispatch(add(pokemon));
  };

  return (
    <If condition={isLoading || isFetching}>
      <Then>
        <Card>
          <Card.Img />
          <Card.Body>
            <Skeleton height={118} width={210} enableAnimation />
          </Card.Body>
        </Card>
      </Then>
      <Else>
        <>
          {!!data && (
            <Button
              onClick={() => handleClick(data)}
              className="btn btn-light"
            >
              <Card>
                <Card.Img variant="top" src={data?.sprites.front_default} />
                <Card.Body>
                  <Card.Title className="text-center">{data?.name}</Card.Title>
                </Card.Body>
              </Card>
            </Button>
          )}
          <PokemonDetails
            pokemon={data}
            display={isDisplayed}
            handleClose={() => {
              setIsDisplayed(false);
            }}
          />
        </>
      </Else>
    </If>
  );
};
