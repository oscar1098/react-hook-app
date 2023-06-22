import { useCounter } from '../hooks/useCounter'


export const CounterWithCustomHook = () => {

    const { counter } = useCounter();

  return (
    <>
    
        <h1>Counter with Hook: {counter}</h1>

        <hr />

        <button className="btn btn-outline-primary" >+1</button>
        <button className="btn btn-outline-danger" >reset</button>
        <button className="btn btn-outline-warning" >-1</button>

    </>
  )
}
