"use client";

import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { baseURL } from "@/app/baseurl";

interface Post {
  _id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  date: string;
  createdAt: string;
}

const Page: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const pathName = usePathname();
  const id = pathName.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Post>(`${baseURL}/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover mb-6"
          />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>{post.category}</span> / <span>By Sabri Helpage</span>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div>
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-orange-500 hover:underline">
                  Empowering underprivileged children: The impact of Sabri
                  Helpage in West Bengal
                </a>
                <p className="text-sm text-gray-500">October 5, 2023</p>
              </li>
              <li>
                <a href="#" className="text-orange-500 hover:underline">
                  Empowering Seniors: Sabri Helpage&apos;s life-changing
                  services
                </a>
                <p className="text-sm text-gray-500">October 5, 2023</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
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
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Subscribe</h2>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
