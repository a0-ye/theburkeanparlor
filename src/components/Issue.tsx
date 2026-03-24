import { useState } from "react"
import { Link } from "react-router-dom"

interface IssueProps {

}

export default function Issue(props: IssueProps) {

    const [articleData, setArticleData] = useState<any[]>(['stationary', 'AnnoyingTheDead', '', '', '', '', '', '',])
    /**
     * Every issue holds a list of article data. We can do data.map to create n elements
     * to click on, each of them properly loaded with their actual content.
     *
     * Thus article data must already hold the content that is required of them.
     *
     *
     * WHERE DO WE DEFINE THE PIECE DATA LIST?
     *  - external file, loaded and sorted by issue?
     *  -
     *
     */


    /**
     * how do we know which json to get?
     * - append Issue num to the filename?
     * how do we store content in the json objects?
     *
     * 1.) store content directly & use a file viewer per type? e.g. pdf viewer for pdf submissions, docxviewer for docx submissions, png for png, etc
     * 2.) pre-process  (docx preview hack to HTML method? majorly boned if PDF? or just manual) and store as string in content. if image just display as image
     *
     * ASK evelyn: What formats will the submission be in? docx? PDF?
     *          images are easy since we use img tags to display.
     * 
     * 
     * 
     * 
     * I think we're over-engineering this.
     * Keep a list of strings. The strings reference filenames. Use ReactRouter to route to the tsx pages
     */
    // Issue1.json
    // {
    //     {
    //         'id':1,
    //         author:'john smith',
    //         content: 'submission1.pdf'
    //     },{
    //         'id':2,
    //         author:'jane doe',
    //         content: 'art.png'
    //     },{

    //     },{

    //     }
    // };

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