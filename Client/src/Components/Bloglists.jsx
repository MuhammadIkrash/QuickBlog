import { useState } from "react";
import { blog_data, blogCategories } from "../Assets/assets.js";
import { motion } from "motion/react";
import BlogCart from "./BlogCart.jsx";
const BlogLists = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      {/* Blog tag  */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${menu === item && "text-white max-sm:px-2 px-4 pt-0.5"} `}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0 left-0 right-0 h-7 -z-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      {/* Blog list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-8 mb-24  sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCart key={blog._id} blog={blog}></BlogCart>
          ))}
      </div>
    </div>
  );
};

export default BlogLists;
