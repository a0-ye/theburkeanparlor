/** How to use?
 * 
 * 
 * 1. Upload Article to data/Articles
 * 
 */


import type { ArticleData } from '../components/ArticlePage';
import stationary from './Articles/TheStationaryWorker.pdf'
import annoyingthedead from "./Articles/AnnoyingTheDead.docx"
import annoyingthedead2 from "./Articles/AnnoyingTheDead2.docx"

export const ArticleRegistry: Record<string, ArticleData> =    // <string, string> because the imports are a post-build filepath baked into the website.
{
    "stationary": {
        id: "stationary",
        title: "The Stationary Worker",
        author: "Gabriel Malek",
        img:undefined,
        filepath: stationary
    },
    "AnnoyingTheDead": {
        id: "AnnoyingTheDead",
        title: "Annoying the Dead",
        author: "Paris O'Brien",
        img:undefined,
        filepath: annoyingthedead
    },
    "AnnoyingTheDead2": {
        id: "AnnoyingTheDead",
        title: "Annoying the Dead",
        author: "Paris O'Brien",
        img:undefined,
        filepath: annoyingthedead2
    },
};