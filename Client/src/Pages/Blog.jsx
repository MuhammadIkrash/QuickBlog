import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../Assets/assets";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import moment from "moment";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [Comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = blog_data.find((blog) => blog._id === id);
      setData(data);
    }
    fetchData();
    async function fetchComments() {
      setComments(comments_data);
    }
    fetchData();
    fetchComments();
  }, []);
  return data ? (
    <div>
      <Navbar />
      <div className="text-center max-sm:m-1.5 mt-20 text-gray-600 selection:bg-primary/25 selection:text-primary/75">
        <img
          src={assets.gradientBackground}
          alt="gradientBackground"
          className="absolute -top-50 -z-1 opacity-50"
        />
        <p className="text-primary font-medium py-4">
          Published On : {moment(data.createdAt).format("D MMMM YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Muhammad Ikrash
        </p>
      </div>
      <div className="mx-5 md:m-auto max-w-5xl my-10 mt-6">
        <img
          src={data.image}
          alt="Blog_Image"
          className="rounded-3xl mb-5 select-none"
        />
        <p
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p>Comments ({Comments.length})</p>
          <div className="flex flex-col gap-4">
            {Comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="User_Icon" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <p className="absolute bottom-3 right-4 flex items-center gap-2 text-xs">{moment(item.createdAt).fromNow()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Blog;
