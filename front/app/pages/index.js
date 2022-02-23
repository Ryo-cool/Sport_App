import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = (props) => {
  return (
    <div>
      <h2>
          POSTの一覧
      </h2>
        <table>
          {props.posts.map((post) =>
            <tr>
              <td>{post.id}.</td>
              <td>{post.title}</td>
            </tr>
          )}
        </table>
    </div>
  )
}

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  console.log(response)
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;