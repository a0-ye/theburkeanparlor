import { motion } from "motion/react"
import { colors, sunsetfield } from "../assets/colors"
export default function Submit() {


    return <>
        <div id="submit-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center", justifyContent: "center", gap: '0.5em',
            padding: '3em 1.5em 5em 1.5em',
            backgroundColor: sunsetfield.mauve,
        }}>
            <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 'clamp(2.4em, 6vw, 4.5em)', color: colors.brown,
                textAlign: 'center'
            }}>
                Submissions
            </div>
            <div style={{ fontStyle: 'italic', color: colors.brown, marginBottom: '1em' }}>
                Please read the following guidelines carefully.
            </div>
            <div id="column" style={{
                width: '100%',
                maxWidth: '760px',
                backgroundColor: colors.light,
                borderRadius: '16px',
                boxShadow: '0 12px 30px rgba(70, 48, 39, 0.2)',
                padding: 'clamp(1.5em, 5vw, 3.5em)',
                lineHeight: 1.75,

            }}>


                <h1 style={{}}>Current Theme: Echo</h1>
                <p>
                    The theme for Volume 1 of The Burkean Parlor is “Echo.” We were drawn to “Echo” because of its promise of impermanence. The word that embodies the impression, and impressionability, of memory. The constant of cycles, and the boundaries of space. We hope it inspires you to think about the presence of the past as you move into the future.
                </p>

                <hr />

                <h2>Submission Guidelines</h2>
                <p>
                    Submissions for Volume 1 of The Burkean Parlor are open until <span style={{
                        fontWeight: 'bold', color:
                            sunsetfield.mauve2
                    }}>February 28th of 2026</span>.

                </p>
                <p>

                    Any School of Cinematic Arts GRADUATE students or graduate student alumni are welcomed to submit.
                    We want to offer a space to explore genres and mediums that SCA classes may not allow,
                    encouraging graduate students to exercise their creative muscles.
                    While we accept fiction, nonfiction, prose, poetry, art, photos, and hybrid pieces,
                    do not feel limited by the conventional definitions of genre. If it can exist in two dimensions, we will consider it.
                    However, we do not accept scripts or film submissions—there are other SCA magazines for that.
                </p>
                <span style={{ fontWeight: 'bold', color: sunsetfield.mauve2 }}>
                    {'We do not accept any submissions that use AI in any capacity. '}
                </span>
                Please submit in doc/docx and pdf format and remove any identifying information from the document, including your name.
                To avoid bias or coercion, all submissions are read/assessed blind.
                We accept simultaneous submissions, but please notify us if you are accepted elsewhere.
                If published, The Burkean Parlor does not own the rights to any of the works; rights are reserved to the submitters.
                We accept pieces submitted only through our designated Google Form.
                If accepted, we will notify you for final permission to publish.
                We’d then ask for an author’s bio to accompany your piece upon publication.
                <p>
                    Additionally, we ask that you submit an Author’s Statement of 100 words or less, without your name explaining how your identity or studies connect to your piece. Include any relevant content warnings or notes here. Author’s Statements are a chance for authors to add potentially relevant context, justifications, or disclaimers to submissions. They will only be read internally by the board of The Burkean Parlor.
                </p>
                <p>
                    Each submitter is permitted to a maximum of 3 submissions (e.g. one prose piece, one poetry collection, and one visual; or three prose pieces; or two hybrid and one poetry collection, etc.). Submit one Google Form per piece (or in poetry’s case one collection). To withdraw a submission, please send an email to theburkeanparlor@gmail.com with your name, title of your piece(s) and "WITHDRAWAL" in the subject.
                </p>
                <ul>
                    <li>Prose (Fiction/Nonfiction/Biography/Review/Think Piece)</li>
                    <li>Maximum word count: 5000 words</li>
                    <li>No scripts</li>
                    <li>Poetry</li>
                    <li>Submit up to 4 poems</li>
                    <li>All poems on one document, each poem starting on a new page</li>
                    <li>Visuals (Photography/Traditional Art/Digital Art)</li>
                    <li>Submit up to 6 pieces of visual art</li>
                    <li>Submit as separate files on one Google Form</li>
                    <li>Hybrid</li>
                    <li>Up to 10 pages for a single piece</li>
                    <li>A combination of visual and written</li>
                </ul>
                <hr />

                <h1>Deadlines - <span style={{ fontWeight: 'bold', color: '#b22626' }}>SUBMISSIONS CLOSED </span> </h1>
                <ul>
                    <li>Submissions open: <span style={{ fontWeight: 'bold', color: sunsetfield.mauve2 }}>January 1st, 2026</span></li>
                    <li>Submissions close: <span style={{ fontWeight: 'bold', color: sunsetfield.mauve2 }}>February 28th, 2026</span></li>
                </ul>
                <hr />
                <div id="button-align-div"
                    style={{
                        width: '100%', display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        marginTop: "3em"
                    }}
                >

                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                        <motion.button className="btn-primary submit-button"
                            style={{
                                fontSize: '1.3em',
                                padding: '0.9em 2.2em',
                                backgroundColor: sunsetfield.blush,
                                cursor: 'pointer',
                                color: colors.light
                            }}
                            whileHover={{
                                backgroundColor: sunsetfield.mauve2,
                                scale: 1.03
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.25
                            }}
                        >Make A Submission</motion.button>
                    </a>
                </div>
            </div>


        </div>
    </>
}