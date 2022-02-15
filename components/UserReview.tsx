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

/**
 * Renders a user review, used on the homepage
 * @param param0 Props
 * @returns React.Component
 */
export default function UserReview({ name, title, quote, imageUrl, imageAlt, href }: IProps) {
  return (
    <li className="m-3 text-sm leading-6">
      <figure className="relative flex flex-col-reverse rounded-lg border border-purple-500 bg-purple-300 p-6">
        <blockquote className="mt-6 text-gray-700">
          <p className="max-w-xs">{quote}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img src={imageUrl} alt={imageAlt} className="h-14 w-14 flex-none rounded-full object-cover" />
          <div className="flex-auto">
            <div className="text-base font-semibold text-gray-900">
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
