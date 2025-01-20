import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./LayoutComponents/Layout";
import About from "./Pages/About";
import 'reactjs-popup/dist/index.css';
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import * as contentful from "contentful";
import {useEffect, useState} from "react";
import BlogPost from "./Pages/BlogPosts/BlogPost";
import BlogPosts from "./Pages/BlogPosts/BlogPosts";
import Projects from "./Pages/Projects/Projects";

function App() {
    const [content, setContent] = useState({"blogPosts": {}, "projects": [], "skills": []});

    useEffect( () => {
        const client = contentful.createClient({
            space: `${process.env.REACT_APP_PUBLIC_CONTENTFUL_SPACE_ID}`,
            accessToken: `${process.env.REACT_APP_PUBLIC_CONTENTFUL_API_KEY}`
        });
        client.getEntries()
            .then((response) => {
                const [blogPosts, projects, skills] = [{}, [], []];
                for (let i = 0; i < response.items.length; i++) {
                    if (response.items[i].sys.contentType.sys.id === "blogPost") {
                        blogPosts[response.items[i].fields.id]=response.items[i].fields;
                    } else if (response.items[i].sys.contentType.sys.id === "projectPage") {
                        projects.push(response.items[i].fields);
                    } else if (response.items[i].sys.contentType.sys.id === "skills") {
                        for (let j = 0; j < response.items[i].fields.skills.content.length; j++) {
                            if (response.items[i].fields.skills.content[j].nodeType === "embedded-entry-block") {
                                skills.push(response.items[i].fields.skills.content[j].data.target.fields);
                            }
                        }
                    }
                }
                setContent({"blogPosts": blogPosts, "projects": projects, "skills": skills});
            }).catch(console.error);
    }, []);


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<About skills={content.skills}/>}/>
                        <Route path="contact-me" element={<Contact/>}/>
                        <Route path="blog-posts" element={<BlogPosts blogPosts={content.blogPosts}/>}/>
                        <Route path="blog-posts/fullstack-template-project-tutorial-p1-database"
                               element={<BlogPost blogPost={content.blogPosts.full_stack_tutorial_database}/>}/>
                        <Route path="blog-posts/fullstack-template-project-tutorial-p2-api"
                               element={<BlogPost blogPost={content.blogPosts.full_stack_tutorial_api}/>}/>
                        <Route path="projects" element={<Projects projects={content.projects}/>}/>
                        <Route path="*" element={<PageNotFound />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
    );
}
export default App;
