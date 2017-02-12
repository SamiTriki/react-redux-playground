const LOCALSTORAGE_KEY = 'tudu'

function saveState(state) {
    try {
        let serializedState = JSON.stringify(state)
        localStorage.setItem(LOCALSTORAGE_KEY, serializedState)
    } catch (e) {}
}

function loadState() {
    try {
        let stateFromLocalstorage = localStorage.getItem(LOCALSTORAGE_KEY)
        if (stateFromLocalstorage === null)
            return undefined

        return JSON.parse(stateFromLocalstorage)
    } catch (e) {
        return undefined
    }
}

export { saveState, loadState, LOCALSTORAGE_KEY }
