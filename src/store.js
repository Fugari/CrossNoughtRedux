import { legacy_createStore as createStore} from 'redux';
import { STATUS, PLAYER } from './constants';
import { checkWin, checkEmptyCell, createEmptyField } from './utils';

// Actions 
export const PLAY_MOVE = 'PLAY_MOVE';
export const RESTART_GAME = 'RESTART_GAME';

const initialState = {
    currentPlayer: PLAYER.CROSS,
    field: createEmptyField(),
    status: STATUS.TURN
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_MOVE: {
            const { field, currentPlayer, status } = state;
            const index = action.payload;
            const newField = [...field];
            newField[index] = currentPlayer;

            if (status === STATUS.WIN || status === STATUS.DRAW || field[index] !== PLAYER.NOBODY) {
                return state;
            }  else if (checkWin(newField, currentPlayer)) {
                return { ...state, field: newField, status: STATUS.WIN, currentPlayer: currentPlayer === PLAYER.CROSS ? PLAYER.CROSS : PLAYER.NOUGHT }
            } else if (checkEmptyCell(newField)) {
                return { ...state, field: newField, currentPlayer: currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS }
            } 
            //return { ...state, field: newField, currentPlayer: currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS }
        }

        case RESTART_GAME:
            return initialState;

        default:
            return state;
    }
};

const store = createStore(gameReducer);
export default store;


