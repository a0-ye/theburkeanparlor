


export default function Home() {


    return <>
        <div id="tophalf-container" style={{
            display: 'flex', 
            width: '100%', height:'50%',
            alignItems: "center", justifyContent: "center", gap: '10vw',
            // padding: '5vh',
            backgroundColor: '#233b27ff'
        }}>
            <div style={{ width: 300, height: 300, backgroundColor: '#306144ff', }}>
                <h2>Small About about the website</h2>
                <p>
                    Hello this is supposed to be the description
                </p>
            </div>
            <div id="img-container" style={{ width: 600, height: 300, backgroundColor: '#6d0101ff' }}>this is the image container   </div>
            {/* <div> I am so awesome. </div> */}

        </div>
        <div id="bottomhalf-container" style={{
            display: 'flex', flexDirection:'column',
            alignItems: "center", justifyContent: "center",
            width: '100%', height:'50%',
            // padding: '5vh',
            backgroundColor: '#25233bff'
        }}>
            <h1 style={{ borderBottom: 'solid 2px white' }}> Current Issue: Theme</h1>
            <div style={{ display: 'flex', gap:'5em'}}>
                <div style={{
                    backgroundColor: '#ffeb33ff',
                    width: 100, height: 100, borderRadius: 25
                }}> </div>
                <div style={{
                    backgroundColor: '#ffeb33ff',
                    width: 100, height: 100, borderRadius: 25
                }}> </div>
                <div style={{
                    backgroundColor: '#ffeb33ff',
                    width: 100, height: 100, borderRadius: 25
                }}> </div>
            </div>

        </div>
    </>
}