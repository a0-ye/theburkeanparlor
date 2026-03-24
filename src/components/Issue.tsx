import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IssueRegistry } from "../data/IssueRegistry"


export default function Issue() {

    const [articleData, setArticleData] = useState<string[]>(IssueRegistry[useParams().issue || 'error'])

    return <>

        <div style={{ display: 'flex', width: '100%' }}>

            <div> Image here</div>

            <div>
                <h1 style={{ borderBottom: 'solid 2px black' }}> Large Title</h1>
                <div> Sub Heading</div>
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