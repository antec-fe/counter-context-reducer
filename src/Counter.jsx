import { useContext } from 'react'
import { CounterContext } from './CounterContext'
import CounterButton from './CounterButton'

function Counter () {
    const {state} = useContext(CounterContext)

    return (
        <>
			<h3>Counter: {state}</h3>

			{/* <button onClick={() => dispatch({ type: "INCREMENT" })} >Artır</button>
			<button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} >Artır +5</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })} >Azalt</button>
			<button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })} >Azalt -5</button>
			<button onClick={() => dispatch({ type: "RESET" })} >Reset</button> */}

			<CounterButton type="INCREMENT" />
			<CounterButton type="INCREMENT" amount={5} />
			<CounterButton type="DECREMENT" />
			<CounterButton type="DECREMENT" amount={5} />
			<CounterButton type="RESET" />
		</>
    )
}

export default Counter