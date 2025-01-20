import React, {useEffect, useState} from "react";
import './blog-posts.css';
import {Link} from "react-router-dom";

const BlogPosts = ({blogPosts}) => {
    const [blogKeys, setBlogKeys] = useState([]);

    useEffect(() => {
        setBlogKeys(Object.keys(blogPosts));
    }, [blogPosts]);

    return (
        <>
            {blogPosts &&
            <div className="page page-y-padding">
                <div className="content">
                    <div className="all-blog-posts-page">
                        <div className="all-blog-posts-section">
                            <div className="page-header all-blog-posts-header">
                                My BlogPosts
                            </div>
                        </div>
                        <div className="all-blog-posts-section">
                            {blogKeys.map((key) => {
                                return (
                                        <div className="blog-post-box">
                                            <div className="blog-post-box-header">{blogPosts[key].title}</div>
                                            <p>{blogPosts[key].preview}</p>
                                            <img className="blog-post-box-img"
                                                 src={blogPosts[key].hero.fields.file.url}
                                                 alt={blogPosts[key].hero.fields.title}/>
                                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                <p>Published On: {new Date(blogPosts[key].publishedOn).toDateString()}</p>
                                                <Link key={key} to={blogPosts[key].path} className="blog-post-link">
                                                    <p>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default BlogPosts;