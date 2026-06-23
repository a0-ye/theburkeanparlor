import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IssueRegistry, type IssueData } from "../data/IssueRegistry"
import { ArticleRegistry, ErrorArticleData } from "../data/ArticleRegistry";
import { colors, sunsetfield } from "../assets/colors";
import { motion } from "motion/react";


/**
 * Evelyn questions:
 * how should genre sorting work? worthwhile?
 * [box | with | genres | click | to | toggle]
 *  Keep with only 4 filter options. Radio style 
 * 
 * Fiction
 * Nonfiction
 * Poetry
 * Visuals
 * Hybrid 

 * 
 * 
 * 
 * Theme of issue 1: Echo
 * header background make image? related to theme. can be loaded with IssueData
 * 
 * Real All issues page. just a copy of issue page but instead of articles its issues. FUTUREPROOFING
 * 
 * incorporate Articles into the page itself - make backgroudn same color as media
 * gradient for nav bar border bottom.
 * Nav bar - Image backgrtound, transparent bar for links and others.
 * 
 * // About the author needs to be ADDED to ArticlePage. Maybe need 2 images. One for the Author's picture, one associated with the piece itself
 * 
 * // add submission guidelines
 * 
 */
interface IssueProps {
    forcedIssueNumber?: number
}

export default function Issue(props: IssueProps) {
    const issueNumber = useParams().issue || props.forcedIssueNumber || ' error';
    const [selectedIssueData, setSelectedIssueData] = useState<IssueData>(IssueRegistry[issueNumber])
    const MotionLink = motion(Link);

    useEffect(() => {
        setSelectedIssueData(IssueRegistry[issueNumber])
    }, [issueNumber])
    const [filter, _] = useState<string | null>(null)
    const ringVariants = {
        initial: { opacity: 0, scale: 0.7 },
        hover: { opacity: 1, scale: 1 }
    };
    return <>

        <div id="IssueMain" style={{
            display: 'flex', flexDirection: 'column',
            width: '100%', minHeight: '100%',
            // paddingLeft:'10vw',
            // justifyContent:'center'
            backgroundColor: sunsetfield.periwinkle2

        }}>
            <div style={{
                backgroundColor: sunsetfield.periwinkle2

            }}>
                <div id="Header" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1em',
                    gap: '2em',

                }}>
                    <div style={{
                        textAlign: "center",

                    }}>
                        <div style={{
                            textAlign: "center",
                            fontSize: '5em',
                            // textDecoration: 'underline'
                        }}> Issue {issueNumber} • Echo { }</div>
                        <div style={{
                            margin: '0 150px 0 150px',
                        }}>
                            {selectedIssueData.description}
                        </div>
                    </div>
                </div>
                {/* <div style={{
                    display: 'flex',
                    border: "solid black 3px", margin: '10px 1vw 10px 1vw'
                }}>
                    <button style={{ border: 'solid black 2px', backgroundColor: filter == 'Prose' ? '#8fad23ff' : '' }} onClick={() => {
                        filter == 'Prose' ? setFilter(null) : setFilter('Prose')
                    }}> Prose </button>
                    <button style={{ border: 'solid black 2px', backgroundColor: filter == 'Poetry' ? '#8fad23ff' : '' }} onClick={() => {
                        filter == 'Poetry' ? setFilter(null) : setFilter('Poetry')
                    }}> Poetry </button>
                    <button style={{ border: 'solid black 2px', backgroundColor: filter == 'Visuals' ? '#8fad23ff' : '' }} onClick={() => {
                        filter == 'Visuals' ? setFilter(null) : setFilter('Visuals')
                    }}> Visuals </button>
                    <button style={{ border: 'solid black 2px', backgroundColor: filter == 'Hybrid' ? '#8fad23ff' : '' }} onClick={() => {
                        filter == 'Hybrid' ? setFilter(null) : setFilter('Hybrid')
                    }}> Hybrid </button>

                </div> */}

            </div>


            <div id="ArticleContainer" style={{
                margin: '50px 15% 0 15%',
                display: 'flex', maxWidth: '100%',
                gap: '4em', justifyContent: 'center',
                flexWrap: 'wrap', flexDirection: 'row',
                alignItems: 'center'
            }}>
                {selectedIssueData.articleList.map((value, idx) => {

                    const selectedArticleData = ArticleRegistry[value] || ErrorArticleData
                    /**
                     * FILTERING: check filter criteria. If met, return a link. if not, return a nothing burger
                    */
                    let show = false
                    if (filter == null || selectedArticleData.genres.includes(filter)) {
                        show = true
                    }
                    return show && <div id="articleBubble" style={{
                        textAlign:'center',
                    }}>
                        <MotionLink
                            to={`/ArticlePage/${value}`}
                            key={value + idx}
                            initial='initial'
                            whileHover="hover"
                            style={{
                                display: 'flex', position: 'relative',
                                alignItems: 'center', justifyContent: 'center',
                                minWidth: '250px', height: '250px', borderRadius: '200px',
                                backgroundColor: sunsetfield.periwinkle,
                                overflow: 'visible'
                            }}
                        >
                            <motion.div id="rings"
                                variants={ringVariants}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: '#cfc7e2ff',
                                    width: 185, height: 185, borderRadius: 500,
                                    position: 'absolute',
                                    pointerEvents: 'none'
                                }}
                            >
                                <motion.div
                                    variants={ringVariants}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: colors.light,
                                        width: 125, height: 125, borderRadius: 500,
                                        position: 'absolute',
                                        pointerEvents: 'none'
                                    }}
                                >

                                </motion.div>
                            </motion.div>
                            <div style={{
                                color: 'black',
                                pointerEvents: 'none',
                                zIndex: 1,
                            }}>
                                {selectedArticleData.title}
                            </div>

                        </MotionLink>
                        {selectedArticleData.author}

                    </div>


                })}

            </div>
        </div>


    </>


}