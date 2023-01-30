# Pokedex
I created this pokedex as a coding challenge while job hunting in 2023.  It uses Redux to reach out to an existing Pokemon API and then displays the pokemon and a recent search history using react.

## Notes
- Took the liberty to make the search bar filter the pokedex as the user types
- Took the liberty to make the search history a recently viewed history instead and make them selectable cards.
-- If you select a mon that is already in the recently viewed, then it will be moved to the front of the list

## Future Enhancement Suggestions
- Pokedex for multiple categories (Shiny, region, legendaries, etc.)
- Carousal to navigate through detailed pokemon modals
- Evolution line

## Tech debt
- Limit is hardcoded on Pokedex API when getting the list of pokemon.  This should not be hardcoded.
-- Pokedex could call the API multiple times with offsets so that pokemon load in chunks
- Not too fond of the skeleton behavior atm, so could enhance that