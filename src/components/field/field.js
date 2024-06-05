import { FieldLayout } from './field-layout';
import { STATUS } from '../../constants';
import { GAME_DRAW, PLAY_MOVE} from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export const Field = () => {
    //const { field } = store.getState();
    const dispatch = useDispatch();
    const status = useSelector(state => state.status);
    const field = useSelector(state => state.field);
    const handleClick = (index) => {
        if(status === STATUS.DRAW) {
            dispatch({ type: GAME_DRAW });
        }
        dispatch({ type: PLAY_MOVE, payload: index })
    }

    return <FieldLayout handleClick={handleClick} field={field}/>
};
