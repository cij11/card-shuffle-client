export const STORE_SEED = 'STORE_SEED';

export const storeSeed = seed => (
    {
        type: STORE_SEED,
        seed
    }
)