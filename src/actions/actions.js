export const STORE_SEED = 'STORE_SEED';
export const DRAW_CARD = 'DRAW_CARD';
export const SELECT_PLAYER = 'SELECT_PLAYER';

export const storeSeed = seed => (
    {
        type: STORE_SEED,
        seed,
    }
)

export const drawCard = deckNames => (
    {
        type: DRAW_CARD,
        deckNames,
    }
)

export const selectPlayer = playerNumber => (
    {
        type: SELECT_PLAYER,
        playerNumber,
    }
)