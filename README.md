# Pokedex
I created this pokedex as a coding challenge while job hunting in 2023.  It uses Redux to reach out to an existing Pokemon API and then displays the pokemon and a recent search history using react.  I have previously worked with React, javascript, and typescript.  I had taken a course on Redux and we used it in one small area of my previous job, but I have not used it extensively.

## Notes
- Search bar filters the Pokemon while you type
- Recently viewed history shows the cards you have recently selected
-- If you select a mon that is already in the recently viewed, then it will be moved to the front of the list

## Future Enhancement Suggestions
- Pokedex for multiple categories (Shiny, region, legendaries, etc.)
- Carousal to navigate through detailed pokemon modals
- Evolution line
- I'm not a fan of how each of the cards have to call the API to get their sprite right when the page loads.
-- Would love the sprite to be part of the first call

## Tech debt
- Limit is hardcoded on Pokedex API when getting the list of pokemon.  This should not be hardcoded.
-- Pokedex could call the API multiple times with offsets so that pokemon load in chunks
- Not too fond of the skeleton behavior atm, so could enhance that
