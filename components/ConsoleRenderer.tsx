import React from "react";

interface IProps {
  console: string;
}

export default function ConsoleRenderer({ console }: IProps) {
  if (console === "PS5") {
    return (
      <a href="https://www.playstation.com/en-us/ps5/">
        <img
          src="https://cdn.mos.cms.futurecdn.net/cLf6g4KQr4FyX9ufAmxuW6.jpg"
          className="w-96 rounded-xl"
        />
      </a>
    );
  } else {
    return <div>No console</div>;
  }
}
