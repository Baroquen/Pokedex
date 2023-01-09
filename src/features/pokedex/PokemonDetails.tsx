import { FC } from "react";
import { Pokemon } from "./types.d";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

interface PokemonDetailProps {
  pokemon: Pokemon | undefined;
  display: boolean | undefined;
  handleClose: () => void;
}

export const PokemonDetails: FC<PokemonDetailProps> = ({ pokemon, display, handleClose }) => {
  return (
    <Modal show={display} onHide={handleClose}>
        <Modal.Body>
        <Card>
          <Card.Img variant="top" src={pokemon?.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{pokemon?.name}</Card.Title>
          </Card.Body>
        </Card>
        </Modal.Body>
    </Modal>
  );
};
