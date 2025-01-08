import React, {useState} from "react";
import RichTextBlog from "./BlogPostBody";
import {Link} from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import {TbBrandGithub} from "react-icons/tb";
const BlogPost = ({blogPost}) => {
    const [fetched, setFetched] = useState(false);
    const [date, setDate] = useState(new Date("2000-01-01"));

    if (!fetched && blogPost !== undefined) {
        setDate(new Date(blogPost.publishedOn));
        setFetched(true);
    }

    return (
        <>
            {fetched &&
                <div className="page">
                <div className="content">
                    <div className="blogpost-page">
                        <div>
                            <div className="breadcrumbs">
                            <span>
                                <Link to="/blog-posts" className="breadcrumbs-link">
                                    blog-posts
                                </Link>
                                <MdChevronRight size="14px" style={{paddingTop: "2px"}}/>
                            </span>
                                <span className="breadcrumbs-link">{blogPost.path}</span>
                            </div>
                            <img className="blogpost-hero blog-img-full-width blog-img-no-border" src={blogPost.hero.fields.file.url} alt={blogPost.hero.fields.title}/>
                            <h1 className="page-header blogpost-header">{blogPost.title}</h1>
                            <div>
                                <dd style={{padding: "1rem 0", fontSize: '14px', display: "flex", justifyContent: "space-between"}}>
                                    <p>Published On: {date.toDateString()}</p>
                                    {blogPost.github &&
                                        <div className="project-link">
                                            <TbBrandGithub style={{margin: "0 2px -3px 0"}}/>
                                            <a href={blogPost.github.fields.link} target="_blank" rel="noreferrer" className="project-link">Github Repo</a>
                                        </div>
                                    }
                                </dd>
                            </div>
                            <RichTextBlog richText={blogPost.body}/>
                        </div>
                        <div>
                            <div className="table-of-contents">
                                <h2 className="table-of-contents-header">
                                    Table Of Contents
                                </h2>
                                <ul>
                                    {blogPost.tableOfContents.map((item) => {
                                        return(
                                            <li key={item} className="table-of-contents-item">
                                                <a href={`#${item}`} className="table-of-contents-item-link">
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <dd style={{padding: "0 0 2rem 0", fontSize: '14px'}}>
                            Published On: {date.toDateString()}
                        </dd>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default BlogPost;