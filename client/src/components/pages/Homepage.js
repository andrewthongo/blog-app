import React from "react";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../redux/actions/ProjectAction";
function Homepage() {
  const dispatch = useDispatch();

  const modalHanlder = (value) => {
    dispatch(openModalAction(value));
  };

  return (
    <div>
      <section className="p-12 bg-gray-800 text-gray-100">
        <div className="mx-auto space-y-8">
          <div className="grid gap-x-20 gap-y-8 grid-cols-4">
            <article className="flex flex-col bg-gray-900 rounded-xl">
              <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img
                  alt
                  className="object-cover w-full h-52 rounded-t-xl"
                  src="https://source.unsplash.com/201x201/?fashion"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                />
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <a
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-400"
                >
                  Convenire
                </a>

                <div className="grid grid-cols-2 pt-3 space-x-2 text-xs text-gray-400">
                  <span>June 1, 2020</span>
                  <div className="grid grid-cols-2">
                    <div className="flex justify-end">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-red-200"
                        >
                          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                        </svg>
                      </button>
                    </div>
                    <span className="flex justify-center">1</span>
                  </div>
                </div>
              </div>
            </article>

            {/**/}
          </div>
        </div>
      </section>

      <button
        onClick={() => {
          modalHanlder(true);
        }}
        className="fixed bottom-10 right-10 h-16 w-16 items-center justify-center bg-purple-400 rounded-full"
      >
        Add
      </button>
    </div>
  );
}

export default Homepage;