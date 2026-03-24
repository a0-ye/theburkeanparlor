import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// 1. Setup the PDF worker (Required)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// 2. Import CSS for text selection/links to work correctly
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { renderAsync } from 'docx-preview';

interface ContentRendererProps {
    filepath: string;
}

export default function ContentRenderer(props: ContentRendererProps) {
    const [html, setHtml] = useState<string>('Loading...');
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
                    // 1. Fetch the file as a Blob (Binary Large Object)
                    const response = await fetch(props.filepath);
                    const blob = await response.blob();

                    // 2. Render it into our ref'd div
                    // The second argument is a config object for styling
                    await renderAsync(blob, docxContainerRef.current, undefined, {
                        className: "docx-render", // Custom class for CSS
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

    // --- RENDER LOGIC ---

    // Scenario A: PDF Rendering
    if (isPdf) {
        return (
            <div className="pdf-viewer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Document
                    file={props.filepath}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {/* This renders all pages in a list. 
                        Alternatively, use a 'pageNumber' state for a flippable book style. */}
                    {Array.from(new Array(numPages), (_, index) => (
                        <>
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={800}
                            />
                            <br />
                        </>
                    ))}
                </Document>
            </div>
        );
    }

    // Scenario B: DOCX Rendering (HTML)
    if (isDocx) {
        return (
            <div className="docx-viewer-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {loading && <p>Loading Document...</p>}
                <div
                    ref={docxContainerRef}
                    className="docx-container"
                />
            </div>
        );
    }

    // Scenario C: Fallback
    return <p>Unsupported file format.</p>;
}