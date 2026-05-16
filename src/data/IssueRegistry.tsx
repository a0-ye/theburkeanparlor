import type { ReactElement } from "react";

/** How to use?
 * 
 * 1. Make list of Articles to render (by their IDs, set in Article Registry)
 * 2. When making a <Link to=..... />, send it to /Issue/ ISSUE_NUMBER 
 */
export type IssueData = {
    description: string | ReactElement,
    articleList: string[]
}
const placeholder = '__Placeholder__'
/**
 * Copy Paste template!

"": {
        description: ,              // you can put a string or be fancier by writing using HTML tags
        articleList: [],
    },
 */

export const IssueRegistry: Record<string, IssueData> =    // <string, string> because the imports are a post-build filepath baked into the website.
{
    "1": {
        description: <> The theme for Volume 1 of The Burkean Parlor is “Echo.” We were drawn to “Echo” because of its promise of impermanence. The word that embodies the impression, and impressionability, of memory. The constant of cycles, and the boundaries of space. We hope it inspires you to think about the presence of the past as you move into the future.

        </>,
        articleList: ["ariadne", "lowtide", "teeth", "thankyou"],
    },
    "2": {
        description: placeholder,
        articleList: ['fakeid', 'you shouldnt be here'],
    },
    "3": {
        description: placeholder,
        articleList: ['stop digging around...', 'freak',],
    },
    "4": {
        description: placeholder,
        articleList: ['just kidding.', "you're pretty cool!"],
    },
};