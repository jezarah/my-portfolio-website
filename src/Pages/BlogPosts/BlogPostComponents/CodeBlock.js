import {MdCopyAll} from "react-icons/md";
import CopyAlert from "./CopyAlert";
import React, {useEffect, useState} from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python';
import './code.css';

const CodeComponent = ({title, code, language, className}) => {
    const [copied, setCopied] = useState(false);
    const CopyCode = (title) => {
        let copyText = document.getElementById(`${title}`).textContent;
        navigator.clipboard.writeText(copyText).then(r => {
                // Alert the copied text
                setCopied(true);
                setTimeout(() => {
                    setCopied(false)
                }, 1000);
            }
        );
    }

    useEffect(() => {
        Prism.highlightAll();
    }, []);


    return (
        <>
            <div className={className}>
                <p className="code-language">{language}</p>
                <div className="code-copy sub_but" id={`${title}-btn`}
                     onClick={() => {
                         CopyCode(title, setCopied)
                     }}>
                    <MdCopyAll size={"18px"}/>
                    {copied && <CopyAlert/>}
                </div>
                <p id={`${title}`} style={{display: "none"}}>
                    {code}
                </p>
                <pre className={`language-${language.toLowerCase()}`}>
                    <code>
                        {code}
                    </code>
                </pre>
            </div>
        </>
    );
};

export default CodeComponent;