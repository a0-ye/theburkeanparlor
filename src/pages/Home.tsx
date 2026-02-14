


export default function Home() {


    return <>
        <div id="tophalf-container" style={{
            display: 'flex', width: '100vw',
            alignItems: "center", justifyContent: "center", gap: '10vw',
            padding:'5vh',
            backgroundColor: '#25233bff'
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
            display: 'flex', width: '100vw',
            alignItems: "center", justifyContent: "center", gap: '10vw',
            padding:'5vh',
            backgroundColor: '#25233bff'
        }}>
            <div style={{backgroundColor:'#ffeb33ff', 
                width:100, height:100, borderRadius:25
            }}> </div>
        </div>
    </>
}