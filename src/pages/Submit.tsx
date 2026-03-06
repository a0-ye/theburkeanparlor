import SubmitButton from "../components/submit-button"


export default function Submit(){


    return <>
        <div id="submit-container" style={{
            display: 'flex', width: '100vw', height:'100vh',
            flexDirection:'column',
            alignItems: "center", justifyContent: "center", gap: '1vw',
            padding:'5vh',
            backgroundColor: '#25233bff',
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
            
            <SubmitButton/>

        </div>
    </>
}