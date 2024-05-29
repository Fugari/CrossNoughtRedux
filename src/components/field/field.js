import { FieldLayout } from './field-layout';
import store, { PLAY_MOVE } from '../../store';

export const Field = () => {
    const { field } = store.getState();

    const handleClick = (index) => {
        store.dispatch({ type: PLAY_MOVE, payload: index })
    }

    return <FieldLayout handleClick={handleClick} field={field}/>
};
