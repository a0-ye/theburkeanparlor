
import {  sunsetfield } from "../assets/colors"
// import { IssueRegistry } from "../data/IssueRegistry"
import { motion } from "motion/react"


export default function Home() {

    // const selectedIssueData = IssueRegistry["1"]

    return <div style={{
        backgroundColor: sunsetfield.pink,
        display: 'flex', flexDirection: 'column',
        gap: '3em', height:'100%'

    }}>
        <div id="tophalf-container" style={{
            display: 'flex', paddingTop: '10vh',
            width: '100%', height: '50%',
            alignItems: "center", justifyContent: "center", gap: '10vw',
            // padding: '5vh',
            // backgroundColor: colors.lightblue
        }}>
            <div style={{ width: 300, height: 300, }}>
                <h2>What We Are</h2>
                <p>
                    Hello this is supposed to be the description.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo laudantium at voluptate fugiat repellendus similique ea dolore reiciendis officiis velit ullam qui dicta rerum a quo non, omnis, deleniti vel?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div id="img-container" style={{ width: 600, height: 300, backgroundColor: '#a71b8fff' }}>this is the DEBUG image container   </div>
            {/* <div> I am so awesome. </div> */}

        </div>
        <div id="bottomhalf-container" style={{
            display: 'flex', flexDirection: 'column',
            alignItems: "center", justifyContent: "center",
            width: '100%',
            // padding: '5vh',
            // backgroundColor: '#25233bff'
        }}>

            <a href="/Issue/1" target="_blank" rel="noopener noreferrer">
                <motion.button className="submit-button"
                    style={{
                        width: '100%', height: "100%",
                        alignSelf: 'center',
                        fontSize: '2em',
                        // borderRadius: '15px', 
                        border: 'none',
                        padding: '1em',
                        cursor: 'pointer',
                        color: sunsetfield.shell
                    }}
                    whileHover={{
                        backgroundColor: sunsetfield.mauve2
                    }}
                    transition={{
                        duration: 0.25
                    }}
                >Go To Current Issue</motion.button>
            </a>

        </div>
    </div>
}