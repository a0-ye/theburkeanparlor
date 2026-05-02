import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContentRenderer from "./ContentRenderer"
import { ArticleRegistry } from "../data/ArticleRegistry"
import alt from '../data/Pictures/rem.webp'
import { colors } from "../assets/colors"


// interface ArticleProps {}

export default function ArticlePage() {
    const [title, setTitle] = useState<string>('__Placeholder Title__')
    const [author, setAuthor] = useState<string>('__Placeholder Author__')
    const [aboutAuthor, setAboutAuthor] = useState<string>('__Placeholder About__')
    const [articleImg, setArticleImg] = useState<string>(alt)
    const [authorImg, setAuthorImg] = useState<string>("https://placehold.co/350x350")
    const [filepath, setFilepath] = useState<string>('__Placeholder Content__')   // filepath to content (pdf or docx, or otherwise)
    const [id, _] = useState(useParams().id || '')

    useEffect(() => {
        const data = ArticleRegistry[id]
        console.log('id & data:', id, data)
        setTitle(data?.title || 'Error Title')
        setAuthor(data?.author || 'John Error (THIS IS AN ERROR)')
        setAboutAuthor(data?.aboutauthor || '__NO AUTHOR DESCRIPTION FOUND__')
        setAuthorImg(data?.authorImg || "https://placehold.co/350x350")
        setArticleImg(data?.articleImg || alt)
        setFilepath(data?.filepath || 'Error Content')
    }, [id])


    return <div id="ArticlePageMain" style={{
        display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',
    }}>

        <div id='debug' style={{ position: 'absolute', color: '#79efffff', }}>article id: {id}</div>

        <div id="Header" style={{ display: 'flex', padding: '1em', position:'relative', maxWidth:'60%'}}>
            <div style={{position:'absolute', left:-115, top:'25%'}}>
            <img src={articleImg}
                style={{
                    width: 100, height: 100, borderRadius: 100,
                    padding: '1em',
                    position: 'relative',
                    left: 0,
                }}
            />
            </div>

            <div>
                <div style={{ fontSize: '5em', borderBottom: 'solid 2px black', textAlign:'center' }}> {title}</div>
                <div> {author} </div>
            </div>
        </div>

        <div id="content" style={{
            backgroundColor: "rgb(255, 137, 64)", border: 'solid #586e5aff 2px',
            display: 'flex', justifyContent: 'center',
            width: '100%', maxWidth: '70%',

        }}>
            <ContentRenderer filepath={filepath} />
        </div>

        <div id="author-about"
            style={{
                display: 'flex', height: 300, width: '80%', margin: 30,
                backgroundColor: colors.pinksalmon, boxShadow: '2px 1px 5px black'
            }}
        >
            <div id="title-img-container"
                style={{
                    display: 'flex', flexDirection: 'column',
                    width: '50%', backgroundColor: '#1d9c6bff',
                    alignItems: 'center'
                }}
            >
                <div>About The author</div>
                <h2 style={{ padding: 0, margin: 0 }}>{author}</h2>
                <img src={authorImg} alt="Author Image Loading..." style={{
                    width: 150, height: 150, borderRadius: 100,
                    padding: '1em'
                }} />
            </div>
            <div id="description"
                style={{
                    width: '100%',
                    display: 'flex', textAlign: 'center',
                    justifyContent: 'center', alignItems: 'center', padding: '1em', 
                }}
            >
                This is where authors can write an ABOUT description for themselves. Nice and simple. Copy and paste this to get padding and show off the wrap. This is where authors can write an ABOUT description for themselves. Nice and simple. Copy and paste this to get padding and show off the wrap
                {aboutAuthor}
            </div>
        </div>

    </div>


}