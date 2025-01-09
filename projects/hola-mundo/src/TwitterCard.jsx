import { useState } from 'react';
import './TwitterCard.css'

export function TwitterCard ({userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    console.log(userName + ' está siendo seguido:' + isFollowing)

    const text = isFollowing ?
        'Siguiendo' :
        'Seguir';

    const buttonClassName = isFollowing ?
        'tw-followButton--following' :
        'tw-followButton';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    };

    return (
        <article className = 'tw-userCard'>
            <header className='tw-userData'>
                <img 
                className='tw-userAvatar'
                src= {`https://unavatar.io/${userName}`}
                alt= {`Avatar de ${userName}`}
                />
                <div className='tw-userDataText'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followButton-text'>{text}</span>
                    <span className='tw-followButton-stopFollowing'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
};