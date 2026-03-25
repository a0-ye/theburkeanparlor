/** How to use?
 * 
 * 
 * 1. Upload Article to data/Articles
 * 
 */


import stationary from './Articles/TheStationaryWorker.pdf'
import annoyingthedead from "./Articles/AnnoyingTheDead.docx"


export type ArticleData = {
    id: string
    title: string
    author: string
    img: string | undefined;
    filepath: string
}

export const ErrorArticleData = {
    id: '__Error Article__',
    title: '__Error Title__',
    author: '__article ID has no data__',
    img: undefined,
    filepath: '',
}

export const ArticleRegistry: Record<string, ArticleData> =    // <string, string> because the imports are a post-build filepath baked into the website.
{
    "stationary": {
        id: "stationary",
        title: "The Stationary Worker",
        author: "Gabriel Malek",
        img: undefined,
        filepath: stationary
    },
    "AnnoyingTheDead": {
        id: "AnnoyingTheDead",
        title: "Annoying the Dead",
        author: "Paris O'Brien",
        img: undefined,
        filepath: annoyingthedead
    },
};