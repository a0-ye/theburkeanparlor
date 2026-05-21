/** How to use?
 * 
 * 
 * 1. Upload Article to data/Articles
 * 2. Import article from the filepath
 * 3. fill out the entry under the article registry
 */

import lowtide from "./Articles/lowtide.docx"
import ariadne from "./Articles/ariadne.docx"
import teeth from "./Articles/teeth.docx"
import thankyou from "./Articles/thankyou.docx"
import jew from "./Articles/Jew.docx"
import toWhom from "./Articles/ToWhomItMayConcern.docx"
import grief from "./Articles/Grief.docx"


export type ArticleData = {
    id: string
    title: string
    author: string
    aboutauthor: string
    articleImg: string | undefined;
    authorImg: string | undefined;
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
    "lowtide": {
        id: "lowtide",
        title: "Low Tide",
        author: "Devony Hof",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",
        articleImg: undefined,
        authorImg: undefined,
        filepath: lowtide,
        genres: ['Prose']

    },
    "ariadne": {
        id: "ariadne",
        title: "ariadne",
        author: "Devony Hof",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",
        articleImg: undefined,
        authorImg: undefined,
        filepath: ariadne,
        genres: ['Prose']

    },
    "teeth": {
        id: "teeth",
        title: "Teeth",
        author: "Paris O'Brien",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",
        articleImg: undefined,
        authorImg: undefined,
        filepath: teeth,
        genres: ['Poetry']

    },
    "thankyou": {
        id: "thankyou",
        title: "Thank You, Have a Nice Day!",
        author: "Doran J. Seff",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",        
        articleImg: undefined,
        authorImg: undefined,
        filepath: thankyou,
        genres: ['Prose']
    },
    "grief": {
        id: "grief",
        title: "Grief",
        author: "Doran J. Seff",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",        
        articleImg: undefined,
        authorImg: undefined,
        filepath: grief,
        genres: ['Prose']
    },
    "jew": {
        id: "jew",
        title: "Jew",
        author: "Doran J. Seff",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",        
        articleImg: undefined,
        authorImg: undefined,
        filepath: jew,
        genres: ['Prose']
    },
    "toWhom": {
        id: "toWhom",
        title: "To Whom It May Concern",
        author: "Doran J. Seff",
        aboutauthor: " ERROR________ TODO PLACEHOLDER",        
        articleImg: undefined,
        authorImg: undefined,
        filepath: toWhom,
        genres: ['Prose']
    },

}