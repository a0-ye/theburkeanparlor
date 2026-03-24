import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IssueRegistry } from "../data/IssueRegistry"


export default function Issue() {
    const issueNumber = useParams().issue || ' error';
    const [articleData, setArticleData] = useState<string[]>(IssueRegistry[issueNumber])

    return <>

        <div style={{ display: 'flex', width: '100%' }}>

            <div id="Header" style={{ display: 'flex', padding: '1em' }}>
                <img
                    // src={img}
                    alt="Issue related img here"
                    style={{
                        width: 100, height: 100, borderRadius: 100,
                        padding: '1em'
                    }}
                />

                <div>
                    <div style={{
                        borderBottom: 'solid 2px black',
                        fontSize: '5em'
                    }}> Issue {issueNumber}</div>
                    <div> HEy! this is a description of the current issue. Put more things here and eventually its gonna be awesome.</div>
                </div>
            </div>


        </div>
        <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gap: '2em' }}>
            {articleData.map((value, idx) => {
                return <>
                    <Link to={`/ArticlePage/${value}`}
                        key={value + idx}
                        style={{ backgroundColor: '#fff', borderRadius: 15, width: 50, height: 50, color: 'black' }}>
                        {idx} <br /> {value}
                    </Link>
                </>
            })}

        </div>


    </>


}