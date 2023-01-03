import Card from "react-bootstrap/Card";
import { useGetPokemonByNameQuery } from "./pokedexAPI";

interface PokemonProps {
    name: string
}

export function Pokemon({name} : PokemonProps) {
    const { data, isFetching, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <Card key={name}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>hello</Card.Text>
      </Card.Body>
    </Card>
  );
}
