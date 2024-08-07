"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Button from "../components/Button";
import Joinus from "../sections/Joinus";
import { baseURL } from "../baseurl";
import { MoonLoader } from "react-spinners";
interface Post {
  _id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  date: string;
  createdAt: string;
}

const categories = [
  { name: "All Posts", value: "" },
  { name: "Elderly Care", value: "Elderly Care" },
  {
    name: "Girl child and Women welfare",
    value: "Girl child and Women welfare",
  },
  { name: "Mental Health Awareness", value: "Mental Health Awareness" },
  { name: "Real Life Heroes", value: "Real Life Heroes" },
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [mainTitle, setMainTitle] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChangeCategory = (cat: string) => {
    setCategory(cat);
  };

  const handleSearch = (e: any) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/posts`)
      .then((response) => {
        setRecentPosts(response.data.slice(0, 2));
        setMainTitle(response.data[0]?.title || "Default Title");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the blog posts:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${baseURL}/posts?category=${category.replace(
          " ",
          "%20"
        )}&title=${title}`
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the blog posts:", error);
      });
  }, [category, title]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
    setMainTitle(posts[currentIndex]?.title || "Default Title");
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
    setMainTitle(posts[currentIndex]?.title || "Default Title");
  };

  return (
    <div>
      <main>
        {/* <div className="relative h-[450px] flex mx-2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                posts[currentIndex]?.image || "/Educating_Children.webp"
              })`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative self-end text-white w-full lg:w-[60%] md:w-[90%] p-4">
            <p className="text-lg lg:text-xl mb-2">{mainTitle}</p>
            <p className="text-sm text-gray-300">
              {new Date(posts[currentIndex]?.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button onClick={handlePrevClick} className="text-white">
              &#9664;
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button onClick={handleNextClick} className="text-white">
              &#9654;
            </button>
          </div>
        </div> */}
        {/* <div className="flex justify-center items-center w-full gap-2">
          {posts.map((item, index) => (
            <div
              key={index}
              className="w-4 h-4 border-2 border-gray-400 rounded-full mt-2 flex items-center justify-center"
            >
              {index === currentIndex && (
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              )}
            </div>
          ))}
        </div> */}
        <h1 className="md:text-5xl text-3xl font-serif text-center mt-12">
          All Blogs
        </h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <MoonLoader color={"#FF7536"} />
          </div>
        ) : (
          <div className="lg:w-[70%] lg:mx-auto flex flex-col lg:flex-row mx-4 py-8">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/4 p-4 mb-8 lg:mb-0">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search by title..."
                  className="w-full p-2 border rounded"
                  onChange={handleSearch}
                />
              </div>

              <div className="mb-8">
                <h2 className="text-2xl lg:text-4xl font-light mb-4">
                  Recent Posts
                </h2>
                <ul>
                  {recentPosts.map((post, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        href={`#`}
                        className="text-orange-500 hover:underline"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl lg:text-4xl font-light mb-4">
                  Categories
                </h2>
                <ul>
                  {categories.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleChangeCategory(item.value)}
                        className="text-orange-500 hover:underline"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div>
              <h2 className="text-2xl lg:text-4xl font-light mb-4 ">
                Subscribe
              </h2>
              <div className="md:w-full">
                <form className="space-y-4 md:space-y-0 md:space-x-4 md:flex items-center ">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@mail.com"
                      className="w-full p-2 text-black border border-black rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FF6B35] text-white px-4 py-2 rounded "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div> */}
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 p-4">
              <div className="mb-4 flex flex-wrap">
                {categories.map((item, index) => (
                  <button
                    className={`${
                      item.value === category
                        ? "bg-orange-500 text-white px-4 py-2 rounded mr-2 mb-2 lg:mb-0 text-xs"
                        : "border border-orange-500 text-orange-500 px-4 py-2 rounded mr-2 mb-2 lg:mb-0 hover:text-white hover:bg-orange-500 text-xs"
                    }`}
                    onClick={() => handleChangeCategory(item.value)}
                    key={index}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <div className="grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                  {posts.length > 0 ? (
                    posts.map((post, index) => (
                      <div key={index} className="lg:flex lg:flex-col mb-4">
                        <img
                          src={post.image || "/Educating_Children.webp"}
                          alt={post.title}
                          className="w-full lg:w-[360px] h-40 object-cover mb-4 lg:mb-0 lg:mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold">{post.title}</h3>
                          <p
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: post.content,
                            }}
                          ></p>
                          <Link
                            href={`/blogs/${post._id}`}
                            className="text-orange-500 hover:underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>No blog available!</>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <Joinus />
      </main>
    </div>
  );
};

export default Blog;
