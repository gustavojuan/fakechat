
import { Conversations } from './Conversations'
import { Chat } from './Chat'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getMovimientosasync } from '../redux/chatSlice';




export const App = () => {


  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getMovimientosasync('pikachu'))
  },[dispatch])

  
  return (
    <>
    <Conversations />
    <Chat />

    </>
  )
}
