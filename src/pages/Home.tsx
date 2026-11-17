
import { colors, sunsetfield } from "../assets/colors"
// import { IssueRegistry } from "../data/IssueRegistry"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import mainart from '../data/Pictures/parlor.jpeg'
import "../styles/Home.css"

export default function Home() {

    // const selectedIssueData = IssueRegistry["1"]

    return <div style={{
        backgroundColor: sunsetfield.pink,
    }}>
        <div id="hero-container">
            <div id="hero-title">
                <div className="hero-eyebrow" style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    fontSize: '0.85em', marginBottom: '0.5em'
                }}>The Burkean Parlor</div>
                <h2 style={{ fontSize: 'clamp(1.8em, 3vw, 2.4em)' }}>What We Are</h2>
            </div>
            <div id="hero-image-container">
                <img src={mainart} />
            </div>
            <div id="hero-body">
                <p style={{ color: 'rgba(42,42,42,0.8)', maxWidth: 520, }}>
                    The Burkean Parlor is an online literary journal for USC’s School of
                    Cinematic Arts graduate student community. Cinema is a fantastic medium that sits
                    in the center of many converging art forms. But, cinema is still an industry.
                    The Burkean Parlor seeks to provide a creative outlet for
                    students: art for art’s sake. Poetry, prose, visual art,
                    and photography all have a home here.

                    <br></br>
                    <br></br>

                    The Burkean Parlor refers to the metaphor by the same name from Kenneth Burke’s The Philosophy of Literary Form (1973). It boils down to the idea that any time you create a piece of work, you are entering an existing conversation. No creative endeavor exists in isolation, and every creative pursuit contributes to a historical conversation. It is important to listen to the people who came before you, and consider both your entrance into and exit from the parlor of discourse.
                </p>

                <Link to="/Issue/1" style={{ marginTop: '1em' }}>
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
    </div>
}