import { Link } from "react-router-dom";
import { colors, sunsetfield } from "../assets/colors";
import { motion } from "motion/react";
import { useState } from "react";
import "../styles/Navbar.css";




export default function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };
    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

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
                <motion.p id="dropdown"
                    initial={linkStyle.initial}
                    whileHover={linkStyle.whileHover}
                    transition={linkStyle.transition}
                >
                    <div style={{
                        display: 'flex', position: 'relative',
                        alignItems: 'center',
                        textAlign: 'center',
                    }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to='/Issue/1'> All Issues</Link>
                        {isDropdownVisible && <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{
                                position: 'absolute',
                                minWidth: '100%',
                                top: '100%',
                                backgroundColor: sunsetfield.shell,
                                borderRadius: '10px',
                                padding: '0.5em 1em',
                                boxShadow: '0 8px 20px rgba(70, 48, 39, 0.2)'
                            }}>
                            {makeLink(<Link to='/Issue/1'> Issue 1</Link>)}
                            {makeLink(<Link to='/Issue/2'> Issue 2</Link>)}
                            {makeLink(<Link to='/Issue/3'> Issue 3</Link>)}
                        </motion.div>}
                    </div>
                </motion.p>


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