import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContentRenderer from "./ContentRenderer"
import { ArticleRegistry } from "../data/ArticleRegistry"
import alt from '../data/Pictures/rem.webp'

export type ArticleData = {
    id:string
    title:string
    author:string
    img:string | undefined;
    filepath:string
}

// interface ArticleProps {}

export default function ArticlePage() {
    const [title, setTitle] = useState<string>('__Placeholder Title__')
    const [author, setAuthor] = useState<string>('__Placeholder Author__')
    const [img, setImg] = useState<string>(alt)
    const [filepath, setFilepath] = useState<string>('__Placeholder Content__')   // filepath to content (pdf or docx, or otherwise)
    const [id, _] = useState(useParams().id || '')

    useEffect(() => {
        const data = ArticleRegistry[id]
        console.log('id & data:',id, data)
        setTitle(data?.title || 'Error Title')
        setAuthor(data?.author || 'John Error (THIS IS AN ERROR)')
        setImg(data?.img || alt)
        setFilepath(data?.filepath || 'Error Content')
    }, [])


    return <div id="ArticlePageMain" style={{
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',
    }}>

        <div id='debug' style={{ position: 'absolute', color: '#79efffff', }}>article id: {id}</div>

        <div id="Header" style={{ display: 'flex', padding: '1em' }}>
            <img src={img}
                style={{
                    width: 100, height: 100, borderRadius: 100,
                    padding: '1em'
                }}
            />

            <div>
                <div style={{ fontSize: '5em', borderBottom: 'solid 2px black' }}> {title}</div>
                <div> {author} </div>
            </div>
        </div>

        <div id="content" style={{
            // backgroundColor: "#525252ff", border:'solid #586e5aff 2px',
            display:'flex', justifyContent:'center',
            width:'100%', maxWidth:'70%',

        }}>
            <ContentRenderer filepath={filepath}/>
        </div>


    </div>


}