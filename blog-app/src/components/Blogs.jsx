import blogs from "../data/blog";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlog(result);
  }, [search]);

  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="ค้นหาบทความ"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
