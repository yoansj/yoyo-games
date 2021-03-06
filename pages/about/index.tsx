import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageMetaTags from "../../components/PageMetaTags";

export default function About() {
  return (
    <div className="w-full">
      <Head>
        <title>About Us</title>
        <PageMetaTags
          title="About Us"
          contentTitle="About Us"
          description="This page explains our mentality at Yoyo Games and gives further information about the background of our website. Feel free to visit this page if you are curious about our project :)"
          url={"https://yoyo-games.vercel.app/about"}
          image="/Facebook-cover.png"
        />
        <MyMetaTags />
      </Head>
      <Header />
      <main className="my-10 mx-20 flex flex-col">
        <h1 className="mb-8 max-w-4xl whitespace-pre-line text-3xl font-bold underline">About us</h1>
        <p className="mb-8 max-w-4xl whitespace-pre-line text-2xl">
          As you may have noticed, Yoyo Games isn't a real website because you can't really order on it. If you go
          through all the steps you should be greeted with a message that redirects you on this page.
        </p>
        <h1 className="mb-8 max-w-4xl whitespace-pre-line text-3xl font-bold underline">What is Yoyo Games ?</h1>
        <p className="mb-8 max-w-4xl whitespace-pre-line text-2xl">
          Yoyo Games is a personal project which i'm currently working on. It's a project made to showcase my skills
          where I choose to use some slightly different technologies then the ones I usually use. I like video games so
          I figured making a game selling boutique was a cool idea. In Yoyo Games I like to refer as "we" but i'm
          reality i'm alone on this.
        </p>
        <h1 className="mb-8 max-w-4xl whitespace-pre-line text-3xl font-bold underline">Who am I ?</h1>
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="flex flex-col">
            <p className="mb-4 max-w-4xl whitespace-pre-line text-2xl">
              My name is Yoan Saint Juste. I'm 22 years old and i'm an IT student in France at Epitech Paris. I started
              my school because I liked video games and wanted to make some, (don't we all want to make some ?) but I
              transitionned to web developpment. I like front-end developpment and also back-end aswell. I still want to
              make video games but they will probably be personal projects. If you're interested by my profile be sure
              to grab my resume below and contact me :)
            </p>
            <a
              href="https://www.figma.com/file/fRn8UsrWWEgBVovG6bLoSs/CV-Yoan-Saint-Juste?node-id=2%3A2"
              className="mb-8 text-2xl text-purple-500 underline decoration-purple-500 underline-offset-1"
            >
              French Resume (May 9 2022)
            </a>
          </div>
          <div className="flex flex-col items-center justify-center lg:ml-10 xl:ml-20 2xl:ml-32">
            <img src="/coolpic.jpg" className="w-72 rounded-xl border-2 border-purple-500" />
            <p className="mb-8 mt-2 max-w-xs whitespace-pre-line text-center text-xl">
              Here is a cool pic taken in Haeundae, Busan, South Korea, 2021
            </p>
          </div>
        </div>
        <h1 className="mb-8 max-w-4xl whitespace-pre-line text-3xl font-bold underline">What's next for Yoyo Games</h1>
        <p className="mb-8 max-w-4xl whitespace-pre-line text-2xl">
          As Yoyo Games is not really in development anymore so I don't really think it will change that much. It's just
          a fun project I was working on.
        </p>
        <a
          href="https://hilarious-hyacinth-61f.notion.site/Yoyo-Games-4f5be1586f9547dd920ec393bad4f19e"
          className="mb-4 text-2xl text-purple-500 underline decoration-purple-500 underline-offset-1"
        >
          Notion page for the project
        </a>
        <a
          href="https://github.com/yoansj/yoyo-games"
          className="text-2xl text-purple-500 underline decoration-purple-500 underline-offset-1"
        >
          GitHub repository
        </a>
      </main>
      <Footer />
    </div>
  );
}
