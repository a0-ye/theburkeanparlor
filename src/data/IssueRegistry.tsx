/** How to use?
 * 
 * 1. Make list of Articles to render (by their IDs, set in Article Registry)
 * 2. When making a <Link to=..... />, send it to /Issue/ ISSUE_NUMBER 
 */


export const IssueRegistry: Record<string, string[]> =    // <string, string> because the imports are a post-build filepath baked into the website.
{
    "1":['stationary', 'AnnoyingTheDead', 'AnnoyingTheDead2'],
    "2":[],
    "3":[],
    "4":[],
};