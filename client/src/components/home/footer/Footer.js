import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-0 col-span-6">
            <button className="flex space-x-3 justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 rounded-full text-gray-900"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                Brand name
              </span>
            </button>
          </div>
          <div className="text-left col-span-3">
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              <li>
                <p href="#" className="hover:text-purple-400">
                  Link
                </p>
              </li>

              {/**/}
            </ul>
          </div>
          <div className="text-left col-span-3">
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              <li>
                <p href="#" className="hover:text-purple-400">
                  Link
                </p>
              </li>

              {/**/}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-6 justify-between">
            <div></div>
          <div className="flex justify-center text-sm">
            <span>©2021 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
