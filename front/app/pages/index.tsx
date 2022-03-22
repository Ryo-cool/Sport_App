import React, { FC } from "react";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <div className="container mx-16 h-screen">
      <h2>POSTの一覧</h2>
      <h2>{siteTitle}</h2>
      <Link href="/about">
        about
      </Link>
      <div className="flex justify-center pt-4">
        <input name="name" id="name" type="text" className="appearance-none  rounded-full nm-inset-slate-100 leading-5 mx-2 px-8 py-4" placeholder="John Doe"></input>
      </div>
      <div className="flex justify-center pt-4">
          <button className="rounded-full nm-flat-slate-100 hover:nm-flat-slate-100-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110 flex">
          Submit
          <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
      </div>
      <div className="space-x-8 my-8 flex">
        <button className="w-12 h-12 flex justify-center items-center rounded-full nm-convex-slate-100-xs">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fill-current text-blue-600">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
          </svg>
        </button>
        <button className="h-12 px-6 flex justify-center items-center rounded-lg nm-concave-slate-100-sm text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fill-current mr-3 opacity-75">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02c-.33.45-.23 1.08.22 1.4.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1v5z"></path>
          </svg>
          <span className="uppercase font-bold tracking-widest">Buy Gift Card</span>
        </button>
      </div>
      {/* <table>

  {props.posts.map((post) =>
    <tr key={post.id}>
      <td>{post.id}.</td>
      <td>{post.title}</td>
    </tr>
        )}
      </table> */}
  </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;