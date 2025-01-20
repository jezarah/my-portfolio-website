import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {MdOutlineInfo, MdOutlineKeyboardArrowDown} from "react-icons/md";
import clsx from "clsx";
import {Tooltip} from "react-tooltip";
import React from "react";
import RichTextBlog from "./BlogPostBody";

const Aside = ({label, body}) => {
    return (
        <>
            <Disclosure>
                {({open}) => (
                    <>
                        <DisclosureButton className="aside-button">
                            <div>
                                <MdOutlineInfo className="aside-info"/>
                                {label}
                            </div>
                            <MdOutlineKeyboardArrowDown className={clsx("aside-arrow", open && "rotate-180")}/>
                        </DisclosureButton>
                        <DisclosurePanel className="aside">
                            <div className="aside-body">
                                <RichTextBlog richText={body}/>
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <Tooltip anchorSelect=".aside-button" place="top-end" variant="dark">
                Click To Expand
            </Tooltip>
        </>
    );
}

export default Aside;