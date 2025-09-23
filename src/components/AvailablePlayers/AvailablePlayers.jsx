import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise,setAvailableBalance,availableBalance }) => {
    const playerData = use(playerPromise)
    return (
        <div className='max-w-[1200px] mx-auto sora-font mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player =>
                    <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
                )
            }


        </div>
    );
};

export default AvailablePlayers;