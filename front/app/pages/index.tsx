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
    <div>
      <h2>POSTの一覧</h2>
      <div className="text-red-400">おはよう</div>
      <h1 className='text-blue-800'>ありがとう</h1>
      <div className='text-green-500'>こんにちは</div>
      <h2>{siteTitle}</h2>
      <Link href="/sample">
        sample
      </Link>
      <Link href="/about">
        about
      </Link>
      <table>

	{props.posts.map((post) =>
	  <tr key={post.id}>
	    <td>{post.id}.</td>
	    <td>{post.title}</td>
	  </tr>
        )}
      </table>
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