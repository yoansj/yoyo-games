import React from "react";

export default function Footer() {
  // <div className="grid grid-rows-5 lg:grid-cols-4 gap-0 lg:gap-4">
  return (
    <footer className="max-w-full p-8 bg-slate-50 border-t-4 border-t-purple-500">
      <div className="flex flex-col lg:flex-row">
        <div className="p-2 flex-1">
          <h1 className="text-xl font-bold pb-2">BIG TEXT</h1>
          <p className="text-base">
            I didn't have many ideas for the footer so let me tell you a story,
            once upon a time a boy named Yoan Saint Juste decided to create a
            website. Yoan loves video games so naturally a idea arised, it
            seemed like a funny enough idea, do you think you can guess what
            that idea was ?
          </p>
        </div>
        <div className="p-2 flex-1">
          <h1 className="text-xl font-bold pb-2">VIDEO GAMES</h1>
          <p className="text-base">
            Yeah this idea had to do with video games, what if I created a fake
            videogame boutique the boy said to himself. And then boom ! He
            started realizing his idea. He needed a name for his idea which was
            simple to find. Some of the people close to him call him Yoyo
            sometimes he likes it so he took it, then he had to find something
            related to games.
          </p>
        </div>
        <div className="p-2 flex-1">
          <h1 className="text-xl font-bold pb-2">YOYO GAMES</h1>
          <p className="text-base">
            Was created using a handfull of tools, React, Next, TailwindCSS and
            Headless UI by the Tailwind team. The boy decided to use Tailwind
            instead of using Material-UI that he really likes and uses most of
            the time for his other projects, he felt like Tailwind made him
            closer to CSS even though he doesn't really like CSS.
          </p>
        </div>
        <div className="p-2 flex-1">
          <h1 className="text-xl font-bold pb-2">NEED MORE ?</h1>
          <p className="text-base">
            This is usually where we put some buttons and logos.
          </p>
          <h1 className="text-xl font-bold py-2">BUTTONS AND LOGOS</h1>
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/ysjtek/">
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="flex-none w-14 h-14 mr-6 rounded-full object-cover"
              />
            </a>
            <a href="https://github.com/yoansj">
              <img
                src="/github.svg"
                alt="GitHub"
                className="flex-none w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:mt-5 p-2">
        © 1999-{new Date().getFullYear()} Yoyo Games we don't have much other
        things to say so yeah
      </div>
    </footer>
  );
}
