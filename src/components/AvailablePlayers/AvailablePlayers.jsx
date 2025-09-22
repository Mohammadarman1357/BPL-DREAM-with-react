import React, { use } from 'react';
import userImg from '../../assets/user1.png';
import flagImg from '../../assets/report1.png';

const AvailablePlayers = ({ playerPromise }) => {
    const playerData = use(playerPromise)
    console.log(playerData)

    return (
        <div className='max-w-[1200px] mx-auto sora-font mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player =>

                    <div className="card border-1 border-[#1313131a] shadow-sm rounded-2xl p-6">
                        <figure>
                            <img className='rounded-2xl w-full h-[300px] object-cover' src={player.player_image} alt="players image" />
                        </figure>
                        <div className="mt-6">
                            <div className='flex items-center'>
                                <img src={userImg} alt="" />
                                <h2 className="card-title ml-2 font-semibold text-xl text-[#131313]">{player.player_name}</h2>
                            </div>

                            <div className='flex items-center justify-between mt-4 border-b-1 border-b-gray-300 pb-4'>
                                <div className='flex items-center'>
                                    <img src={flagImg} alt="" />
                                    <span className='ml-3'>{player.player_country}</span>
                                </div>
                                <button className='btn text-[14px]'>{player.player_role}</button>
                            </div>
                            <div className="mt-4">
                                <span className='font-bold'>{player.rating}</span>
                                <div className='flex items-center justify-between mt-4'>
                                    <span className='font-bold'>{player.batting_style}</span>
                                    <span>{player.bowling_style}</span>
                                </div>
                                <div className='flex items-center justify-between mt-4'>
                                    <span className='font-bold'>Price: {player.price}</span>
                                    <button className='btn btn-outline text-[14px]'>Choose Player</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>
    );
};

export default AvailablePlayers;