import { Link } from "react-router-dom"
export default function MainNavigation(){
    return(
        <>
            <Link>Home</Link>
            <Link to='./login'>Login</Link>
        </>
    )
}