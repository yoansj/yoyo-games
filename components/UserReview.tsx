import React from "react";

interface IProps {
  /**
   * Name of the reviewer
   */
  name: string;

  /**
   * Title occupation of the reviewer
   */
  title: string;

  /**
   * Quote said by the reviewer
   */
  quote: string;

  /**
   * Link on click
   */
  href?: string;

  /**
   * Image pic for the reviewer
   */
  imageUrl: string;

  /**
   * Alt for the image
   */
  imageAlt?: string;
}

export default function UserReview({
  name,
  title,
  quote,
  imageUrl,
  imageAlt,
  href,
}: IProps) {
  return (
    <li className="text-sm leading-6 m-3">
      <figure className="relative flex flex-col-reverse bg-purple-300 border border-purple-500 rounded-lg p-6">
        <blockquote className="mt-6 text-gray-700">
          <p className="max-w-xs">{quote}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-auto">
            <div className="text-base text-gray-900 font-semibold">
              <a href={href}>
                <span className="absolute inset-0"></span>
                {name}
              </a>
            </div>
            <div className="mt-0.5">{title}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
