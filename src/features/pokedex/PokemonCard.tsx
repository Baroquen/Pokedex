import { FC } from "react";
import Card from "react-bootstrap/Card";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { If, Then, Else } from "react-if";
import Skeleton from "react-loading-skeleton";

interface PokemonProps {
  name: string;
}

export const PokemonCard: FC<PokemonProps> = ({ name }: PokemonProps) => {
  const { data, isLoading, isFetching } = useGetPokemonByNameQuery(name);

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
        <Card>
          <Card.Img variant="top" src={data?.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{data?.name}</Card.Title>
          </Card.Body>
        </Card>
      </Else>
    </If>
  );
};
