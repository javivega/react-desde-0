import { TwitterCard } from "./TwitterCard";

export function App () {
    return (
        <>
           <TwitterCard userName="javivega14" name="Javi Vega" isFollowing={true}/>
           <TwitterCard userName="midudev" name="Miguel Ángel Durán" isFollowing={false}/>
           <TwitterCard userName="elonmusk" name="Elon Musk" isFollowing={true}/>
        </>
    )
};