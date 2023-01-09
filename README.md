# Pokedex

## Notes
- Took the liberty to make the history based on the pokemon page selected instead of what the user typed
-- This allows me to filter the dex when the user is typing and also put selectable cards in a history section

## Future Enhancement Suggestions
- Pokedex for multiple categories (Shiny, region, legendaries, etc.)
- Carosal to navigate detail pages

## Tech debt
- Limit is hardcoded on Pokedex API when getting the list of pokemon.  This should not be hardcoded.
- Pokedex could call the API multiple times with offsets so that pokemon load in chunks
- Not too fond of the skeleton behavior atm, so could enhance that