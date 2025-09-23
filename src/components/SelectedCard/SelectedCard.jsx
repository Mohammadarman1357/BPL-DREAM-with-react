import React from 'react';

const SelectedCard = ({ player, removePlayer }) => {

    const handleRemove=()=>{
        removePlayer(player)
    }

    return (
        <div className='p-5 pr-7 rounded-2xl border-1 border-[#1313131a] flex justify-between items-center mt-5'>
            <div className='flex items-center'>
                <img className='w-[80px] h-[80px] rounded-xl object-cover' src={player.player_image} alt="" />
                <div className='ml-2'>
                    <h1 className='font-bold text-2xl'>{player.player_name}</h1>
                    <p>{player.player_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img className='w-6 h-6' src="https://i.ibb.co.com/5gXTqwWc/Frame.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;