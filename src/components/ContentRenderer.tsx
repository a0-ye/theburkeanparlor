import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { renderAsync } from 'docx-preview';

interface ContentRendererProps {
    filepath: string;
}

export default function ContentRenderer(props: ContentRendererProps) {
    const [loading, setLoading] = useState(false);
    const [numPages, setNumPages] = useState<number>(0);
    const docxContainerRef = useRef<HTMLDivElement>(null);
    const isPdf = props.filepath.endsWith('.pdf');
    const isDocx = props.filepath.endsWith('.docx');

    useEffect(() => {
        const loadDocx = async () => {
            if (isDocx && docxContainerRef.current) {
                setLoading(true);
                try {
                    const response = await fetch(props.filepath);
                    const blob = await response.blob();
                    await renderAsync(blob, docxContainerRef.current, undefined, {
                        inWrapper: false,
                        ignoreWidth: false,
                        ignoreHeight: false,
                        breakPages: true,
                    });
                } catch (error) {
                    console.error("Docx Preview Error:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        loadDocx();
    }, [props.filepath, isDocx]);


    // RETURN LOGIC 
    if (isPdf) {
        return (
            <div className="pdf-viewer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Document
                    file={props.filepath}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <>
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={800}
                                pageColors={{foreground: '#000000', background: '#ffffff'}}
                            />
                            <br />
                        </>
                    ))}
                </Document>
            </div>
        );
    }
    if (isDocx) {
        return (
            <div className="docx-viewer-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <style>{`.docx { margin: 24px 0; background-color: rgb(255, 255, 255) }`}</style>
                {loading && <p>Loading Document...</p>}
                <div
                    ref={docxContainerRef}
                    className="docx-container"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                    
                />
            </div>
        );
    }
    return <p>Unsupported file format.</p>;
}