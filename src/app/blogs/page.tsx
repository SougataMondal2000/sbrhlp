"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Button from "../components/Button";
import Joinus from "../sections/Joinus";

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [mainTitle, setMainTitle] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/27bd2b47d8fce22655ed")
      .then((response) => {
        setPosts(response.data);
        setRecentPosts(response.data.slice(0, 2));
        setMainTitle(response.data[0]?.title || "Default Title");
      })
      .catch((error) => {
        console.error("Error fetching the blog posts:", error);
      });
  }, []);

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
        <div className="relative h-[450px] flex mx-2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                posts[currentIndex]?.imageUrl || "/Educating_Children.webp"
              })`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative self-end text-white w-full lg:w-[60%] md:w-[90%] p-4">
            <p className="text-lg lg:text-xl mb-2">{mainTitle}</p>
            <p className="text-sm text-gray-300">{posts[currentIndex]?.date}</p>
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
        </div>

        <div className="flex flex-col lg:flex-row mx-4 py-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4 p-4 mb-8 lg:mb-0">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border rounded"
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
                <li>
                  <a href="#" className="text-orange-500 hover:underline">
                    Elderly Care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-orange-500 hover:underline">
                    Uncategorized
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl lg:text-4xl font-light mb-4 ">
                Subscribe
              </h2>
              {/* Subscribe Section */}
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
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 p-4">
            <div className="mb-4 flex flex-wrap">
              <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2 mb-2 lg:mb-0">
                All Posts
              </button>
              <button className="text-gray-700 px-4 py-2 rounded mr-2 mb-2 lg:mb-0">
                Elderly Care
              </button>
              <button className="text-gray-700 px-4 py-2 rounded mb-2 lg:mb-0">
                Uncategorized
              </button>
            </div>

            <div className="mb-8">
              <div className="grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                {posts.map((post, index) => (
                  <div key={index} className="lg:flex lg:flex-col mb-4">
                    <img
                      src={post.imageUrl || "/Educating_Children.webp"}
                      alt={post.title}
                      className="w-full lg:w-[360px] h-40 object-cover mb-4 lg:mb-0 lg:mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-700 mb-2">
                        {post.content.substring(0, 100)}...
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-orange-500 hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Joinus />
      </main>
    </div>
  );
};

export default Blog;
