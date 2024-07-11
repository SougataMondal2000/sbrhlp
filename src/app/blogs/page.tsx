"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Button from "../components/Button";

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

  useEffect(() => {
    axios
      .get("https://api.npoint.io/13000386040ac65c98de")
      .then((response) => {
        setPosts(response.data);
        setRecentPosts(response.data.slice(0, 2));
        setMainTitle(response.data[0]?.title || "Default Title");
      })
      .catch((error) => {
        console.error("Error fetching the blog posts:", error);
      });
  }, []);

  return (
    <div>
      <main>
        <div className="relative h-[450px] flex mx-2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Educating_Children.webp')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative self-end text-white lg:w-[60%] md:w-[90%] w-[80%] p-4">
            <p className="text-xl lg:text-xl mb-2">{mainTitle}</p>
            <p className="text-sm text-gray-300">{posts[0]?.date}</p>
          </div>
        </div>

        <div className="flex ml-32 py-8">
          {/* Left Sidebar */}
          <div className="w-1/4 p-4">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-light mb-4">Recent Posts</h2>
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
              <h2 className="text-4xl font-light mb-4">Categories</h2>
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
              <h2 className="text-4xl font-light mb-4">Subscribe</h2>
              {/* Subscribe Section */}
              <div>
                <form className="space-y-4">
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
                    className="bg-[#FF6B35] text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-4 mr-32">
            <div className="mb-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">
                All Posts
              </button>
              <button className="text-gray-700 px-4 py-2 rounded mr-2">
                Elderly Care
              </button>
              <button className="text-gray-700 px-4 py-2 rounded">
                Uncategorized
              </button>
            </div>

            <div className="mb-8">
              {posts.map((post, index) => (
                <div key={index} className="flex mb-4">
                  <img
                    src={"/Educating_Children.webp"}
                    alt={post.title}
                    className="w-[360px] h-40 object-cover mr-4"
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

        {/* Above Footer Banner */}
        <div className="relative h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/your_image_path.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center text-white lg:w-[60%] md:w-[90%] w-[80%]">
            <p className="text-xl lg:text-4xl mb-4">
              Be a catalyst for positive change
            </p>
            <div className="flex justify-center gap-4">
              <Button label="BE OUR PARTNER" boxShadow={"none"} />
              <Button label="JOIN OUR CAUSE" boxShadow={"none"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
