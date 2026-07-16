
import { colors, sunsetfield } from "../assets/colors"
// import { IssueRegistry } from "../data/IssueRegistry"
import { motion } from "motion/react"
import { Link } from "react-router-dom"


export default function Home() {

    // const selectedIssueData = IssueRegistry["1"]

    return <div style={{
        backgroundColor: sunsetfield.pink,
        display: 'flex', flexDirection: 'column',
        gap: 'clamp(3em, 8vh, 6em)', minHeight: 'calc(100vh - 5em)'

    }}>
        <div id="tophalf-container" style={{
            display: 'flex', flexWrap: 'wrap', paddingTop: '8vh',
            width: '100%',
            alignItems: "center", justifyContent: "center", gap: '6vw',
            padding: '8vh 6vw 0 6vw',
        }}>
            <div style={{ maxWidth: 420, flex: '1 1 320px' }}>
                <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    fontSize: '0.85em', color: sunsetfield.mauve2, marginBottom: '0.5em'
                }}>The Burkean Parlor</div>
                <h2 style={{ fontSize: 'clamp(1.8em, 3vw, 2.4em)' }}>What We Are</h2>
                <p style={{ color: 'rgba(42,42,42,0.8)' }}>
                    Hello this is supposed to be the description.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo laudantium at voluptate fugiat repellendus similique ea dolore reiciendis officiis velit ullam qui dicta rerum a quo non, omnis, deleniti vel?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div id="img-container" style={{
                width: 'min(600px, 90vw)', height: 300, flex: '1 1 320px',
                borderRadius: '16px',
                backgroundImage: `radial-gradient(circle at 25% 25%, ${sunsetfield.blush} 0%, transparent 55%),
                                   radial-gradient(circle at 80% 30%, ${sunsetfield.periwinkle} 0%, transparent 50%),
                                   linear-gradient(135deg, ${sunsetfield.mauve} 0%, ${sunsetfield.olive} 100%)`,
                boxShadow: '0 12px 30px rgba(70, 48, 39, 0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <span style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 'clamp(1.8em, 4vw, 2.6em)', color: colors.light,
                    textShadow: '0 2px 12px rgba(0,0,0,0.25)'
                }}>Echo</span>
            </div>

        </div>
        <div id="bottomhalf-container" style={{
            display: 'flex', flexDirection: 'column',
            alignItems: "center", justifyContent: "center",
            width: '100%', paddingBottom: '6vh'
        }}>

            <Link to="/Issue/1">
                <motion.button className="btn-primary submit-button"
                    style={{
                        fontSize: '1.3em',
                        padding: '0.9em 2.2em',
                        cursor: 'pointer',
                        backgroundColor: sunsetfield.blush,
                        color: colors.light
                    }}
                    whileHover={{
                        backgroundColor: sunsetfield.mauve2,
                        scale: 1.03
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                        duration: 0.25
                    }}
                >Go To Current Issue</motion.button>
            </Link>

        </div>
    </div>
}