import { Link } from "react-router-dom";
import { colors, sunsetfield } from "../assets/colors";
import { motion } from "motion/react";
import "../styles/Navbar.css";




export default function Navbar() {
    const linkStyle = {
        initial: {
            color: colors.brown
        },
        whileHover: {
            color: sunsetfield.mauve2

        },
        transition: {
            duration: 0.1
        }
    }

    function makeLink(content: any) {
        return <motion.p
            initial={linkStyle.initial}
            whileHover={linkStyle.whileHover}
            transition={linkStyle.transition}
        >
            {content}
        </motion.p>
    }

    return <>
        <div id='navbar' style={{
            position: "fixed", top: '0%', zIndex: '5',
            display: "flex",
            padding: '1em',
            boxSizing: 'border-box',
            justifyContent: 'space-between', alignItems: "center",
            width: '100%',
            height: '5em',  /** IF THIS EVER CHANGES, CHANGE THE ONE IN INDEX.CSS AS WELL */
            backgroundColor: sunsetfield.shell,
            boxShadow: '2px 2px 2px #80655944'
        }}>
            <div id="links" style={{
                display: "flex", gap: '20px',
                fontSize: '1.5em',
            }}>
                {makeLink(<Link to='/'>Home</Link>)}
                {makeLink(<Link to='/About'>About</Link>)}
                {makeLink(<Link to='/Submit'>Submit</Link>)}
                {makeLink(<Link to='/Issue/1'> Current Issue</Link>)}

            </div >
            <div id="name"
                style={{
                    fontSize: '3em',
                    color: colors.brown,
                    textAlign: 'center'
                }}>
                The Burkean Parlor
            </div>

        </div >
    </>


}