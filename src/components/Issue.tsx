import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IssueRegistry, type IssueData } from "../data/IssueRegistry"
import { ArticleRegistry, ErrorArticleData } from "../data/ArticleRegistry";
import { colors } from "../assets/colors";


/**
 * Evelyn questions:
 *  
 * 
 * how should genre sorting work? worthwhile?
 * [box | with | genres | click | to | toggle]
 * 
 * Page Layout: how?
 * Center column?
 * Left Align?
 * 
 */
export default function Issue() {
    const issueNumber = useParams().issue || ' error';
    const [selectedIssueData, setSelectedIssueData] = useState<IssueData>(IssueRegistry[issueNumber])

    useEffect(() => {
        setSelectedIssueData(IssueRegistry[issueNumber])
    }, [issueNumber])

    return <>

        <div id="IssueMain" style={{
            display: 'flex', flexDirection: 'column',
            width: '100%', height: '100%',
            // paddingLeft:'10vw',
            // justifyContent:'center'
            backgroundColor: colors.light


        }}>
            <div style={{
                backgroundColor: colors.darkblue
            }}>


                <div id="Header" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1em',
                    gap: '2em',
                    backgroundColor: colors.darkblue

                }}>
                    <img
                        // src={img}
                        alt="Issue related img here"
                        style={{
                            width: 100, height: 100, borderRadius: 100,
                            padding: '1em',
                            backgroundColor: colors.brown
                        }}
                    />

                    <div>
                        <div style={{
                            fontSize: '5em',
                            textDecoration: 'underline'
                        }}> Issue {issueNumber}</div>
                        <div>
                            {selectedIssueData.description}
                        </div>
                    </div>
                </div>

                <div style={{ border: "solid black 3px", margin: '10px 1vw 10px 1vw' }}> Hello put the filter here?</div>

            </div>


            <div id="ArticleContainer" style={{
                margin: '50px 10% 0 10%',
                display: "flex",
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '4em'
            }}>
                {selectedIssueData.articleList.map((value, idx) => {
                    /**
                     * FILTERING: check filter criteria. If met, return a link. if not, return a nothing burger
                     */
                    if (false) {
                        return <></> // equivalent of returning nothing
                    }

                    const selectedArticleData = ArticleRegistry[value] || ErrorArticleData

                    return <div style={{
                        flexBasis: '25%',   // this is a hack to limit to 3 items per row.... not sure if there's a better value to use
                    }}>

                        <Link to={`/ArticlePage/${value}`}
                            key={value + idx}
                            style={{
                                display: 'flex', position: 'relative',
                                alignItems: 'center', justifyContent: 'center',
                                width: '200px', height: '200px', borderRadius: '100px',
                                backgroundColor: colors.pinksalmon
                            }}>
                            {value} <br />
                            {selectedArticleData.img || 'no image path found'} <br />
                            {selectedArticleData.title}
                            <div style={{
                                position: 'absolute',
                                bottom:'-12%',
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