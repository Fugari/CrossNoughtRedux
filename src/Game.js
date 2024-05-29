import { GameLayout } from './game-layout';
import { useState, useEffect } from 'react';
import store, { RESTART_GAME } from './store';

export const Game = () => {
  const [ state, setState ] = useState(store.getState());

  useEffect(() => {
    const subscribe = store.subscribe(() => {
      setState(store.getState());
    })
    return () => subscribe();
  }, []);
  
  const handleRestart = () => {
    store.dispatch({ type: RESTART_GAME });
  } 

  return (  
    <GameLayout handleRestart={handleRestart} />
  );
}
