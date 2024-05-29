import { PLAYER_NAME, PLAYER_ACTION, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import store from '../../store';

export const Information = () => {
    const { status, currentPlayer } = store.getState();
    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAYER_NAME[currentPlayer];
    const information = status === STATUS.DRAW ? 'DRAW' : `${playerAction}: ${playerName}`;

    return <InformationLayout information={information}/>
}
