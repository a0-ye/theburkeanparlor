import { Link } from "react-router-dom";



export default function Navbar() {
    return <>
        <div style={{
            position: "fixed", top: '0%',
            display: "flex", gap:'10px',
            width: '100%', height: '3em',
            backgroundColor: '#fff',
        }}>
            <p>
                <Link to='/'>Home</Link>
            </p>
            <p>
                <Link to='/About'>About</Link>
            </p>
            <p>
                <Link to='/Submit'>Submit</Link>
            </p>
            <p>
                <Link to='/CurrentIssue'>Current Issue</Link>
            </p>

        </div>
    </>


}