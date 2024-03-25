import { createContext, useReducer } from 'react'

export const CounterContext = createContext()


function reducer (state, { type, payload = 1 }) {
	// if (action.type === 'INCREMENT') {
	// 	if (action.payload) {
	// 		return state + action.payload
	// 	}else {
	// 		return state + 1
	// 	}
	// } else if (action.type === 'DECREMENT') {
	// 	return state - 1
	// } else if (action.type === 'RESET') {
	// 	return 0
	// } else {
	// 	return state
	// }

	switch (type) {
		case 'INCREMENT':
			return state + payload
		case 'DECREMENT':
			return state - payload
		case 'RESET':
			return 0
		default:
			return state
	}
}

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}
