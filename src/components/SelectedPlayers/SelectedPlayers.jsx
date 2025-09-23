import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasePlayers, removePlayer }) => {
    return (
        <div className='max-w-[1200px] mx-auto sora-font'>

            {
                purchasePlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }

        </div>
    );
};

export default SelectedPlayers;