import React, {useState} from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {BLOCKS, MARKS} from "@contentful/rich-text-types";
import CopyAlert from "./CopyAlert";
import ReactMarkdown from "react-markdown";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {MdCopyAll, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import clsx from 'clsx'


const renderDocument = richText => {
    const Text = ({ children }) => <div className="paragraph">{children}</div>;
    const Heading2 = ({children}) => <h2 className="heading" id={children}>{children}</h2>;
    const Heading3 = ({children}) => <h3 className="heading">{children}</h3>;
    function CopyCode(title, setCopied)  {
        let copyText = document.getElementById(`${title}`).textContent;
        navigator.clipboard.writeText(copyText).then(r => {
            // Alert the copied text
            setCopied(true);
            setTimeout(() => {setCopied(false)}, 1000);
            }
        );
    }
    const CodeComponent = ({title, code, language, copied, setCopied}) => (
        <div style={{marginBottom: "2rem"}}>
            <div>
                <div className="code-block" style={{textWrap: "wrap"}}>
                    <p className="code-language">{language}</p>
                    <div className="code-copy sub_but" id={`${title}-btn`}
                       onClick={() => {CopyCode(title, setCopied)}}>
                        <MdCopyAll size={"18px"}/>
                        {copied && <CopyAlert/>}
                    </div>
                    <p id={`${title}`} style={{display: "none"}}>
                        {code}
                    </p>
                    <ReactMarkdown>
                        {code}
                    </ReactMarkdown>
                </div>
            </div>
            <div>
                <dd className="code-title">{title}</dd>
            </div>
        </div>
    );
    const InLineCodeComponent = ({code}) => (
        <div>
            <div className="code-block">
                <ReactMarkdown>
                    {code}
                </ReactMarkdown>
            </div>
        </div>
    );
    const InLineCodeComponentNoBackground = ({code}) => (
        <div>
            <ReactMarkdown>
                {code}
            </ReactMarkdown>
        </div>
    );
    const AccordionCodeBlockComponent = ({title, label, body, language, copied, setCopied, open, setOpen}) => (
        <div>
            <div className="accordion-code-button" onClick={() => setOpen(!open)}>
                {label}
                {!open && <MdOutlineKeyboardArrowDown/>}
                {open && <MdOutlineKeyboardArrowUp/>}
            </div>
            <div>
                {open && <CodeComponent className="accordion-code-block" title={label} code={body} language={language} copied={copied} setCopied={setCopied}/>}
            </div>
        </div>
    );
    const Aside = ({label, body}) => (
        <Disclosure>
            {({ open }) => (
                <>
                    <DisclosureButton className="aside-button">
                        {label}
                        <MdOutlineKeyboardArrowDown className={clsx("aside-arrow", open && "rotate-180")}/>
                    </DisclosureButton>
                    <DisclosurePanel>
                        <div className="aside">
                            <RichTextBlog richText={body}/>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
    const ImageComponent = ({title, description, file}) => (
        <div style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 0"}}>
            <img className={description} src={file.url} alt={title}/>
        </div>
    );
    const Code = ({children}) => (
        <div className="code-block">
            <code style={{textWrap: "wrap"}}>{children}</code>
        </div>
    );

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                if(node.data.target.sys.contentType.sys.id === "inLineCodeBlock") {
                    const code = node.data.target.fields.code;
                    return <InLineCodeComponent code={code}/>
                } else if (node.data.target.sys.contentType.sys.id === "inLineCodeBlockNoBackground") {
                    const code = node.data.target.fields.code;
                    return <InLineCodeComponentNoBackground code = {code}/>
                } else if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                    const { title, code, language } = node.data.target.fields;
                    const [copied, setCopied] = useState(false);
                    return <CodeComponent title={title} code={code} language={language} copied={copied} setCopied={setCopied}/>
                } else if (node.data.target.sys.contentType.sys.id === "accordianCodeBlock") {
                    const {title, label, body, language} = node.data.target.fields;
                    const [open, setOpen] = useState(false);
                    const [copied, setCopied] = useState(false);
                    return <AccordionCodeBlockComponent title={title} label={label}
                                                        body={body} language={language}
                                                        copied={copied} setCopied={setCopied}
                                                        open={open} setOpen={setOpen}/>
                } else if (node.data.target.sys.contentType.sys.id === "aside") {
                    const {label, body} = node.data.target.fields;
                    return <Aside label={label} body={body}/>
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, description, file } = node.data.target.fields;
                return <ImageComponent title={title} description={description} file={file}/>
            }
        },
        renderMark: {
            [MARKS.CODE]: (text) => <Code>{text}</Code>
        },
    };

    return documentToReactComponents(richText, options);
};

const RichTextBlog = ({richText}) => (
    <div>
        {renderDocument(richText)}
    </div>
);

export default RichTextBlog;