import { useContext } from "react"
import { CounterContext } from './CounterContext'

function CounterButton ({ type, amount }) {
    const { dispatch } = useContext(CounterContext)

    const buttonTexts = {
        INCREMENT: "Artır",
        DECREMENT: "Azalt",
        RESET: "Sıfırla"
    }

    let buttonText = buttonTexts[type]

    if (type !== 'RESET') {
        if (amount > 1) {
            buttonText += ' '

            if (type === "INCREMENT") buttonText += '+'
            if (type === "DECREMENT") buttonText += '-'

            buttonText += amount
        }
    }

    return <button onClick={() => dispatch({ type, payload: amount })} >
        { buttonText}
    </button>
}

export default CounterButton