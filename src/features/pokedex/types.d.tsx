export type Pokemon = {
    id: number,
    name: string,
    sprites: {front_default: string}
}

export type PokemonUrls = { 
    name: string,
    url: string
}

export type PokemonList = {
    count: number,
    next: string | undefined,
    previous: string | undefined,
    results: PokemonUrls[]
}