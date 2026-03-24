import { Link } from "react-router-dom";
import { colors } from "../assets/colors";
import { motion } from "motion/react";




export default function Navbar() {

    const linkStyle = {
        initial: {
            color: colors.blue
        },
        whileHover: {
            color: '#535bf2'

        }
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
            backgroundColor: colors.light,
        }}>
            <div id="links" style={{
                display: "flex", gap: '20px',
                fontSize: '1.5em'
            }}>
                <motion.p
                    initial={linkStyle.initial}
                    whileHover={linkStyle.whileHover}
                >
                    <Link to='/'>Home</Link>
                </motion.p>

                <motion.p
                    initial={linkStyle.initial}
                    whileHover={linkStyle.whileHover}>
                    <Link to='/About'>About</Link>
                </motion.p>

                <motion.p
                    initial={linkStyle.initial}
                    whileHover={linkStyle.whileHover}>
                    <Link to='/Submit'>Submit</Link>
                </motion.p>

                <motion.p
                    initial={linkStyle.initial}
                    whileHover={linkStyle.whileHover}>
                    <Link to='/Issue/1'> Current Issue</Link>
                </motion.p>

            </div>
            <div id="name"
                style={{
                    fontSize: '3em',
                    color: colors.brown,
                    textAlign: 'center'
                }}>
                The Burkean Parlor
            </div>

        </div>
    </>


}