export const STORE_SEED = 'STORE_SEED';
export const DRAW_CARD = 'DRAW_CARD';

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