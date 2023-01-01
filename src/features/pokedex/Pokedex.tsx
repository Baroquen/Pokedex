import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export function Pokedex () { 
    const pokedex = useAppSelector((state) => state.pokedex.value);
    const dispatch = useAppDispatch();

    return (
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>Hi</Card.Title>
                <Card.Text>Hello</Card.Text>
            </Card.Body>
        </Card>
    )
}