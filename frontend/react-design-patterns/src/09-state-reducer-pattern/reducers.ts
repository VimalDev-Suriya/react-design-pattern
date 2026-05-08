export const toggleReducer = (initialState: any, payload: any) => {
    const { type } = payload;

    switch (type) {
        case "toggle":
            return { on: !initialState.on, clicks: initialState.clicks + 1 }
        default:
            return initialState;
    }
}

// * Will not toggle the button if clikcs are greater than 3
export const toggleReducer_v2 = (initialState: any, payload: any) => {
    const { type } = payload;

    switch (type) {
        case "toggle":
            if (initialState.clicks >= 3) return initialState;

            return { on: !initialState.on, clicks: initialState.clicks + 1 }
        default:
            return initialState;
    }
}