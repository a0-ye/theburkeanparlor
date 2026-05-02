import { Link } from "react-router-dom"
import { colors } from "../assets/colors"
import { ArticleRegistry, ErrorArticleData } from "../data/ArticleRegistry"
import { IssueRegistry } from "../data/IssueRegistry"
import { useState } from "react"


export default function Home() {

    const selectedIssueData = IssueRegistry["1"]

    return <>
        <div id="tophalf-container" style={{
            display: 'flex',
            width: '100%', height: '50%',
            alignItems: "center", justifyContent: "center", gap: '10vw',
            // padding: '5vh',
            backgroundColor: colors.lightblue
        }}>
            <div style={{ width: 300, height: 300, backgroundColor: colors.salmon, }}>
                <h2>Small About about the website</h2>
                <p>
                    Hello this is supposed to be the description
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
            backgroundColor: 'white'
        }}>

            <h1 style={{ borderBottom: 'solid 2px white' }}> Current Issue: 1</h1>
            <h2 style={{ borderBottom: 'solid 2px white' }}> Theme: Echo</h2>
            <div style={{
                margin: '50px 10% 0 10%',
                // display: "flex",
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                placeItems:'center',
                alignSelf: 'center', width: '100%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '4em'
            }}>
                {selectedIssueData.articleList.map((value, idx) => {
                    /**
                     * FILTERING: check filter criteria. If met, return a link. if not, return a nothing burger
                     */
                    const selectedArticleData = ArticleRegistry[value] || ErrorArticleData
                    

                    return <div style={{}}>

                        <Link to={`/ArticlePage/${value}`}
                            key={value + idx}
                            style={{
                                display: 'flex', position: 'relative',
                                alignItems: 'center', justifyContent: 'center',
                                width: '200px', height: '200px', borderRadius: '100px',
                                backgroundColor: colors.pinksalmon
                            }}>
                            {value} <br />
                            {selectedArticleData.articleImg || 'no image path found'} <br />
                            {selectedArticleData.title}
                            <div style={{
                                position: 'absolute',
                                bottom: '-12%',
                                color: 'black'
                            }}>
                                {selectedArticleData.author}
                            </div>
                        </Link>
                        <></>
                    </div>
                })}

            </div>

        </div>
    </>
}