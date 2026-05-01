/** How to use?
 * 
 * 
 * 1. Upload Article to data/Articles
 * 2. Import article from the filepath
 * 3. fill out the entry under the article registry
 */


import stationary from './Articles/TheStationaryWorker.pdf'
import annoyingthedead from "./Articles/AnnoyingTheDead.docx"
import ilovethestars from "./Articles/ilovethestars.docx"
import lowtide from "./Articles/lowtide.pdf"
import teeth from "./Articles/teeth.docx"
import thankyou19 from "./Articles/thankyou19.pdf"


export type ArticleData = {
    id: string
    title: string
    author: string
    img: string | undefined;    // About the author needs to be ADDED
    filepath: string,
    genres: string[]
}

export const ErrorArticleData = {
    id: '__Error Article__',
    title: '__Error Title__',
    author: '__article ID has no data__',
    img: undefined,
    filepath: '',
    genres: []
}

export const ArticleRegistry: Record<string, ArticleData> =    // <string, string> because the imports are a post-build filepath baked into the website.
{
    "stationary": {
        id: "stationary",
        title: "The Stationary Worker",
        author: "Gabriel Malek",
        img: undefined,
        filepath: stationary,
        genres: ['Prose']

    },
    "AnnoyingTheDead": {
        id: "AnnoyingTheDead",
        title: "Annoying the Dead",
        author: "Paris O'Brien",
        img: undefined,
        filepath: annoyingthedead,
        genres: ['Prose']

    },
    "ilovethestars": {
        id: "ilovethestars",
        title: "I Love the Stars that the Voyagers Will Crash Into",
        author: "Paris O'Brien",
        img: undefined,
        filepath: ilovethestars,
        genres: ['Prose']

    },
    "lowtide": {
        id: "lowtide",
        title: "Low Tide",
        author: "Devony Hof",
        img: undefined,
        filepath: lowtide,
        genres: ['Prose']

    },
    "teeth": {
        id: "teeth",
        title: "Teeth",
        author: "Paris O'Brien",
        img: undefined,
        filepath: teeth,
        genres: ['Poetry']

    },
    "thankyou19": {
        id: "thankyou19",
        title: "Thank You, Have a Nice Day!",
        author: "Doran J. Seff",
        img: undefined,
        filepath: thankyou19,
        genres: ['Prose']

    },

}