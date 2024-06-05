import { PLAYER_NAME, PLAYER_ACTION, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
//import store from '../../store';
import { useSelector } from 'react-redux';

export const Information = () => {
    //const { status, currentPlayer } = store.getState();

    const status = useSelector(state => state.status);
    const currentPlayer = useSelector(state => state.currentPlayer);

    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAYER_NAME[currentPlayer];
    const information = status === STATUS.DRAW ? 'DRAW' : `${playerAction}: ${playerName}`;
    return <InformationLayout information={information}/>
}
