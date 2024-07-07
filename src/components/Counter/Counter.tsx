import { Dispatch } from "react"
import { useDispatch, useSelector } from "react-redux"
import { counterStateTypes } from "../redux/types"
import { UnknownAction } from "@reduxjs/toolkit"
import { decrement, increment, reset } from "../redux/actions"
import store from "../redux/store"

const Counter = () => {
  const count = useSelector((state: { counterStorage: counterStateTypes }) => state.counterStorage.count);
  const dispatch: Dispatch<UnknownAction> = useDispatch()


  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>{count} by use selector</h1>
          <button onClick={() => dispatch(increment())}>plus</button>
          <button onClick={() => dispatch(decrement())}>minus</button>
          <button onClick={() => dispatch(reset())} > reset</button>
        </div>
      </div >

      <div className="container">
        <div className='item'>
          <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

export default Counter