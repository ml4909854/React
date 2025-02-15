import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state=>state)
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={(e)=>dispatch({type:"Increment"})}>Increment</button>
       <button onClick={(e)=>dispatch({type:"Decrement"})}>Decrement</button>
    
    </div>
  )
}

export default App