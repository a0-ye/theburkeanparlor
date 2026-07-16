import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContentRenderer from "./ContentRenderer"
import { ArticleRegistry } from "../data/ArticleRegistry"
import alt from '../data/Pictures/rem.webp'
import { colors, sunsetfield } from "../assets/colors"
import "../styles/ArticlePage.css"


// interface ArticleProps {}

export default function ArticlePage() {
    const [title, setTitle] = useState<string>('__Placeholder Title__')
    const [author, setAuthor] = useState<string>('__Placeholder Author__')
    const [, setArticleImg] = useState<string>(alt)
    const [filepath, setFilepath] = useState<string>('__Placeholder Content__')   // filepath to content (pdf or docx, or otherwise)
    const [id, _] = useState(useParams().id || '')

    useEffect(() => {
        const data = ArticleRegistry[id]
        console.log('id & data:', id, data)
        setTitle(data?.title || 'Error Title')
        setAuthor(data?.author || 'John Error (THIS IS AN ERROR)')
        setArticleImg(data?.articleImg || alt)
        setFilepath(data?.filepath || 'Error Content')
    }, [id])


    return <div id="ArticlePageMain" style={{
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',
    }}>

        {/* <div id='debug' style={{ position: 'absolute', color: '#79efffff', }}>article id: {id}</div> */}

        <div id="Header" style={{ display: 'flex', padding: '2em 1em 1em 1em', position:'relative'}}>
            <div className="author-avatar">
            {/* <img src={articleImg}
                style={{
                    width: 100, height: 100, borderRadius: 100,
                    objectFit: 'cover',
                    boxShadow: '0 6px 16px rgba(70, 48, 39, 0.25)',
                }}
            /> */}
            </div>

            <div>
                <div style={{ fontSize: 'clamp(2em, 6vw, 3.6em)', borderBottom: `solid 2px ${sunsetfield.mauve2}`, paddingBottom: '0.2em', textAlign:'center' }}> {title}</div>
                <div style={{ textAlign: 'center', marginTop: '0.4em', fontStyle: 'italic', color: 'rgba(42,42,42,0.7)' }}> {author} </div>
            </div>
        </div>

        <div id="content" style={{
            backgroundColor: colors.light,
            display: 'flex', justifyContent: 'center',
            width: '100%',
            padding: '2em 0',

        }}>
            <ContentRenderer filepath={filepath} />
        </div>

    </div>


}