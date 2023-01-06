import { FC } from "react";
import Container from "react-bootstrap/Container";

interface searchBarProps {
  onChange: (n: string) => void;
}

export const SearchBar: FC<searchBarProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <input type="search" placeholder="Pikachu" onChange={handleChange} />
    </Container>
  );
};
