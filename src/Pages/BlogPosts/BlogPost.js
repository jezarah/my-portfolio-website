import React from "react";
import RichTextBlog from "./BlogPostComponents/BlogPostBody";
import {Link} from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import {TbBrandGithub} from "react-icons/tb";
import './blog-posts.css';
const BlogPost = ({blogPost}) => {
    return (
        <>
            {blogPost &&
                <div className="page page-y-padding">
                <div className="content">
                    <div className="blog-post-page">
                        <div>
                            <div className="breadcrumbs">
                            <span>
                                <Link to="/blog-posts" className="breadcrumbs-link">blog-posts</Link>
                                <MdChevronRight size="14px" style={{paddingTop: "4px"}}/>
                            </span>
                                <span className="breadcrumbs-link" style={{paddingLeft: "4px"}}>{blogPost.path}</span>
                            </div>
                            <img className="blog-img-full-width blog-img-no-border" src={blogPost.hero.fields.file.url} alt={blogPost.hero.fields.title}/>
                            <h1 className="page-header blog-post-header">{blogPost.title}</h1>
                            <div>
                                <dd style={{padding: "1rem 0", fontSize: '14px', display: "flex", justifyContent: "space-between"}}>
                                    <p>Published On: {new Date(blogPost.publishedOn).toDateString()}</p>
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
                            Published On: {new Date(blogPost.publishedOn).toDateString()}
                        </dd>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default BlogPost;