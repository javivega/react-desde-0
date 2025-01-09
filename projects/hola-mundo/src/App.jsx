import { TwitterCard } from "./TwitterCard";
import './App.css'

const users = [
    {
        userName: 'javivega14',
        name: 'Javi Vega',
        initialIsFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        initialIsFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        initialIsFollowing: true
    }
]

export function App () {
    return (
        <section className="tw-userCardContainer">
            {
                users.map (( {userName, name, initialIsFollowing} ) => (
                    <TwitterCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={initialIsFollowing}
                    ></TwitterCard>
                ))
            }
        </section>
    )
};