import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./LayoutComponents/Layout";
import About from "./Pages/About";
import 'reactjs-popup/dist/index.css';
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import * as contentful from "contentful";
import {useState} from "react";
import BlogPost from "./Pages/BlogPosts/BlogPost";
import AllBlogPosts from "./Pages/BlogPosts/AllBlogPosts";
import AllProjects from "./Pages/Projects/AllProjects";

function App() {
    const [contentfulFetched, setContentfulFetched] = useState(false);
    const [blogPosts, setBlogPosts] = useState({});
    const [projects, setProjects] = useState({});
    const [skills, setSkills] = useState([]);

    if (!contentfulFetched) {
        const client = contentful.createClient({
            space: `${process.env.REACT_APP_PUBLIC_CONTENTFUL_SPACE_ID}`,
            accessToken: `${process.env.REACT_APP_PUBLIC_CONTENTFUL_API_KEY}`
        });
        client.getEntries()
            .then((response) => {
                const blogPosts = {};
                const projects =  {
                    'david_rays_dampproofing_website': {},
                    'section_insights_term_project': {},
                    'bc_whales_remote_report_app': {},
                    'cmdf_fearless_hackathon_project': {},
                };
                const skills = [];
                for (let i = 0; i < response.items.length; i++) {
                    if (response.items[i].sys.contentType.sys.id === "blogPost") {
                        blogPosts[response.items[i].fields.id]=response.items[i].fields;
                    } else if (response.items[i].sys.contentType.sys.id === "projectPage") {
                        projects[response.items[i].fields.id]=response.items[i].fields;
                    } else if (response.items[i].sys.contentType.sys.id === "skills") {
                        for (let j = 0; j < response.items[i].fields.skills.content.length; j++) {
                            if (response.items[i].fields.skills.content[j].nodeType === "embedded-entry-block") {
                                skills.push(response.items[i].fields.skills.content[j].data.target.fields);
                            }
                        }
                    }
                }
                setBlogPosts(blogPosts);
                setProjects(projects);
                setSkills(skills);
                setContentfulFetched(true);
            })
            .catch(console.error);
    }
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<About skills={skills}/>}/>
                      <Route path="contact-me" element={<Contact/>}/>
                      <Route path="blog-posts" element={<AllBlogPosts blogPosts={blogPosts}/>}/>
                      <Route path="blog-posts/fullstack-template-project-tutorial-p1-database"
                             element={<BlogPost blogPost={blogPosts.full_stack_tutorial_database}/>}/>
                      <Route path="projects" element={<AllProjects projects={projects}/>}/>
                      <Route
                          path="*"
                          element={<PageNotFound />}
                      />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
);
}
export default App;
