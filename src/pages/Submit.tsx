
export default function Submit(){


    return <>
        <div id="submit-container" style={{
            display: 'flex', width: '100vw', height:'100vh',
            flexDirection:'column',
            alignItems: "center", justifyContent: "center", gap: '1vw',
            padding:'5vh',
            backgroundColor: '#DD9F86',
        }}>
            <div style={{ width: '50%', height: '70%', }}>
                <h3>Current Theme: "Something"</h3>
                <hr/> 

                <h3>Info</h3>
                    <ul>
                        <li></li>
                    </ul>
                <hr/>

                <h3>Submission Guidelines</h3>
                    <ul>
                        <li></li>
                    </ul>
                <hr/>

                <h3>Deadlines</h3>
                    <ul>
                        <li>Submissions open: Date</li>
                        <li>Submissions close: Date</li>
                    </ul>
                <hr/>

            </div>
            
            <a href = "https://www.google.com/?zx=1772829375394&no_sw_cr=1" target="_blank" rel="noopener noreferrer">
            <button className="submit-button">Submit Here</button>
            </a>

        </div>
    </>
}