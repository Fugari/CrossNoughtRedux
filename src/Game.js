import { GameLayout } from './game-layout';
//import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RESTART_GAME } from './store';

export const Game = () => {
  // const [ state, setState ] = useState(store.getState());

  // useEffect(() => {
  //   const subscribe = store.subscribe(() => {
  //     setState(store.getState());
  //   })
  //   return () => subscribe();
  // }, []);
  
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleRestart = () => {
    dispatch({ type: RESTART_GAME });
  } 

  return (  
    <GameLayout handleRestart={handleRestart} />
  );
}
