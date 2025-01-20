import React from "react";
import '../blog-posts.css';

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {BLOCKS, MARKS, INLINES} from "@contentful/rich-text-types";
import CodeComponent from "./CodeBlock";
import AccordionCodeBlock from "./AccordionCodeBlock";
import Aside from "./Aside";


const renderDocument = richText => {
    const Text = ({ children }) => <div className="paragraph">{children}</div>;
    const Heading2 = ({children}) => <h2 className="heading" id={children}>{children}</h2>;
    const Heading3 = ({children}) => <h3 className="heading">{children}</h3>;
    const HyperLink = ({link, children}) => (
        <a className="hyperlink" href={link} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
    const Code = ({children}) => (
        <div className="code-block">
            <pre>
                <code className="in-line-code">{children}</code>
            </pre>
        </div>
    );
    const InLineCodeComponent = ({code}) => (
        <div className="code-block">
            <pre>
                <code className="in-line-code">
                    {code}
                </code>
            </pre>
        </div>
    );
    const InLineCodeComponentNoBackground = ({code}) => (
        <pre>
            <code className="in-line-code">
                {code}
            </code>
        </pre>
    );
    const ImageComponent = ({title, description, file}) => (
        <div className="img-component">
            <img className={description} src={file.url} alt={title}/>
        </div>
    );

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [INLINES.HYPERLINK]: (node, children) => <HyperLink link={node.data.uri}>{children}</HyperLink>,
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                if(node.data.target.sys.contentType.sys.id === "inLineCodeBlock") {
                    const code = node.data.target.fields.code;
                    return <InLineCodeComponent code={code}/>
                } else if (node.data.target.sys.contentType.sys.id === "inLineCodeBlockNoBackground") {
                    const code = node.data.target.fields.code;
                    return <InLineCodeComponentNoBackground code = {code}/>
                } else if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                    const { title, code, language } = node.data.target.fields;
                    return <CodeComponent title={title} code={code} language={language} className="code-block"/>
                } else if (node.data.target.sys.contentType.sys.id === "accordianCodeBlock") {
                    const {title, label, body, language} = node.data.target.fields;
                    return <AccordionCodeBlock title={title} label={label} body={body} language={language}/>
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
            [MARKS.CODE]: (text) => <Code>{text}</Code>,
            [MARKS.UNDERLINE]: (text) => <span className="call-out">{text}</span>
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