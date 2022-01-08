import Head from "next/head";
import MyMetaTags from "../../components/MyMetaTags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <MyMetaTags />
        <title>About Us</title>
        <meta property="og:title" content="About Us" />
        <meta
          property="og:description"
          content="This page explains our mentality at Yoyo Games and gives further information about the background of our website. Feel free to visit this page if you are curious about our project :)"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/yoansj/yoyo-games/main/public/Facebook-cover.png"
        />
        <meta
          name="description"
          content="This page explains our mentality at Yoyo Games and gives further information about the background of our website"
        />
      </Head>
      <Header />
      <main className="flex flex-col my-10 mx-20">
        <h1 className="text-3xl font-bold underline whitespace-pre-line max-w-4xl mb-8">
          About us
        </h1>
        <p className="text-2xl whitespace-pre-line max-w-4xl mb-8">
          As you may have noticed, Yoyo Games isn't a real website because you
          can't really order on it. If you go through all the steps you should
          be greeted with a message that redirects you on this page.
        </p>
        <h1 className="text-3xl font-bold underline whitespace-pre-line max-w-4xl mb-8">
          What is Yoyo Games ?
        </h1>
        <p className="text-2xl whitespace-pre-line max-w-4xl mb-8">
          Yoyo Games is a personal project which i'm currently working on. It's
          a project made to showcase my skills where I choose to use some
          slightly different technologies then the ones I usually use. I like
          video games so I figured making a game selling boutique was a cool
          idea. In Yoyo Games I like to refer as "we" but i'm reality i'm alone
          on this.
        </p>
        <h1 className="text-3xl font-bold underline whitespace-pre-line max-w-4xl mb-8">
          Who am I ?
        </h1>
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <div className="flex flex-col">
            <p className="text-2xl whitespace-pre-line max-w-4xl mb-4">
              My name is Yoan Saint Juste. I'm 22 years old and i'm an IT
              student in France at Epitech Paris. I started my school because I
              liked video games and wanted to make some, (don't we all want to
              make some ?) but I transitionned to web developpment. I like
              front-end developpment and also back-end aswell. I still want to
              make video games but they will probably be personal projects. If
              you're interested by my profile be sure to grab my resume below
              and contact me :)
            </p>
            <a
              href="https://hilarious-hyacinth-61f.notion.site/Yoan-Saint-Juste-CV-24ee091f666d4406a6a768519d183c49"
              className="text-2xl text-purple-500 underline underline-offset-1 decoration-purple-500 mb-4"
            >
              English Resume (online)
            </a>
            <a
              href="https://hilarious-hyacinth-61f.notion.site/Yoan-Saint-Juste-CV-24ee091f666d4406a6a768519d183c49"
              className="text-2xl text-purple-500 underline underline-offset-1 decoration-purple-500 mb-8"
            >
              French Resume (online)
            </a>
          </div>
          <div className="flex flex-col justify-center items-center lg:ml-10 xl:ml-20 2xl:ml-32">
            <img
              src="/coolpic.jpg"
              className="w-72 rounded-xl border-2 border-purple-500"
            />
            <p className="text-xl whitespace-pre-line mb-8 text-center max-w-xs mt-2">
              Here is a cool pic taken in Haeundae, Busan, South Korea, 2021
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold underline whitespace-pre-line max-w-4xl mb-8">
          What's next for Yoyo Games
        </h1>
        <p className="text-2xl whitespace-pre-line max-w-4xl mb-8">
          As Yoyo Games is still in developpment the website will continue to
          change and evolve. If you want to see where is the website going you
          can click the link belows that will lead you to the Notion page I use
          to manage this project. The project is also open source so you can
          check the GitHub link below.
        </p>
        <a
          href="https://hilarious-hyacinth-61f.notion.site/Yoyo-Games-4f5be1586f9547dd920ec393bad4f19e"
          className="text-2xl text-purple-500 underline underline-offset-1 decoration-purple-500 mb-4"
        >
          Notion page for the project
        </a>
        <a
          href="https://github.com/yoansj/yoyo-games"
          className="text-2xl text-purple-500 underline underline-offset-1 decoration-purple-500"
        >
          GitHub repository
        </a>
      </main>
      <Footer />
    </div>
  );
}
