import {useState} from "react";

const AllBlogPosts = ({blogPosts}) => {
    const [fetched, setFetched] = useState(false);
    const [blogKeys, setBlogKeys] = useState([]);

    if (!fetched && blogPosts.full_stack_tutorial_database !== undefined) {
        setBlogKeys(Object.keys(blogPosts));
        setFetched(true);
    }

    return (
        <>
            {fetched &&
            <div className="page">
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
                                    <div key={key} className="blog-box">
                                        <div className="blog-box-header" key={key}>{blogPosts[key].title}</div>
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

export default AllBlogPosts;