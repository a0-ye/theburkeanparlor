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
        description: <> Hello, this is the first article and custom to the first article. Genuine and unique, I am able to write as much hogwash as I want! <br/> 
        I made a pagebreak, so I'm able to space this john out <span style={{fontStyle:'italic'}}>sooooooo (this is also a span)</span> awesomely, the huzz are going to be SWARMING me like flies. Skibbity toilet. was that tuff?
        <br/>
        <br/>
        I did two breaks! hows that? heh....
        
        </>,
        articleList: ['stationary', 'AnnoyingTheDead', 'fakeid', 'fakeid', 'fakeid', 'fakeid'],
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