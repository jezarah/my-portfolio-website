import {MdOutlineExpandMore, MdOutlineExpandLess} from "react-icons/md";
import React, {useState} from "react";
import CodeComponent from "./CodeBlock";
import {Tooltip} from "react-tooltip";

const AccordionCodeBlock = ({title, label, body, language}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="accordion" onClick={() => setOpen(!open)}>
                {label}
                {!open && <MdOutlineExpandMore size={18}/>}
                {open && <MdOutlineExpandLess size={18}/>}
            </div>
            <div>
                {open && <CodeComponent title={title} code={body} language={language} className="accordion-code-block"/>}
            </div>
            <Tooltip anchorSelect=".accordion" place="top-end" variant="dark">
                Click To Expand
            </Tooltip>
        </div>
    )
}

export default AccordionCodeBlock;
