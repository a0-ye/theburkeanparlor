import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IssueRegistry } from "../data/IssueRegistry"
import { colors } from "../assets/colors";


export default function Issue() {
    const issueNumber = useParams().issue || ' error';
    const [articleData, setArticleData] = useState<string[]>(IssueRegistry[issueNumber])

    useEffect(()=>{
        setArticleData(IssueRegistry[issueNumber])
    },[issueNumber])

    return <>

        <div id="IssueMain" style={{
            display: 'flex', flexDirection: 'column',
            width: '100%', height: '100%',
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
                            HEy! this is a description of the current issue.
                            <br />
                            Put more things here and eventually its gonna be awesome.
                        </div>
                    </div>
                </div>

                <div style={{ borderBottom: 'solid black 2px', margin: ' 3vh 15vw 3vh 15vw' }} />

                <div> Hello put the filter here?</div>

                <div style={{ borderBottom: 'solid black 2px', margin: ' 3vh 15vw 3vh 15vw' }} />
            </div>


            <div id="ArticleContainer" style={{
                margin: '0 10% 0 10%',
                display: "grid",
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '2em'
            }}>
                {articleData.map((value, idx) => {
                    return <>
                        <Link to={`/ArticlePage/${value}`}
                            key={value + idx}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '200px', height: '200px', borderRadius: '100px',
                                backgroundColor: colors.pinksalmon
                            }}>
                            {idx} <br /> {value}
                        </Link>
                    </>
                })}

            </div>
        </div>


    </>


}