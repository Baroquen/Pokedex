import Card from "react-bootstrap/Card";
import { useGetPokemonByNameQuery } from "./pokedexApi";

interface PokemonProps {
    name: string
}

export function PokemonCard({name} : PokemonProps) {
    const { data } = useGetPokemonByNameQuery(name);

  return (
    <Card key={name}>
        <Card.Img variant="top" src={data?.sprites.front_default}/>
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
