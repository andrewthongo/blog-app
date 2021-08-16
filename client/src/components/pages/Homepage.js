import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostAction,
  openModalAction,
  updatePostAction,
} from "../../redux/actions/ProjectAction";
import moment from "moment";

function Homepage() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.ProjectReducer);

  useEffect(() => {
    dispatch({ type: "GET_POSTS_API" });
  }, [dispatch]);
  const modalHanlder = (value) => {
    dispatch(openModalAction(value));
  };

  const renderPosts = () => {
    return posts.map((post, index) => {
      return (
        <article key={index} className="flex flex-col bg-gray-900 rounded-xl">
          <img
            alt="a"
            className="object-cover w-full h-52 rounded-t-xl"
            src={post.attachment || "https://picsum.photos/300"}
          />

          <div className="flex flex-col flex-1 p-6">
            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
              {post.title}
            </h3>
            <p className="text-xs">{post.content}</p>
            <div className="grid grid-cols-2 pt-3 space-x-2 text-xs text-gray-400">
              <span>{moment(post.createdAt).format("HH:MM DD-MM-YYYY")}</span>
              <div className="grid grid-cols-2">
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      dispatch(
                        updatePostAction({
                          ...post,
                          likeCount: post.likeCount + 1,
                        })
                      );
                    }}
                  >
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
                <span className="flex justify-center">{post.likeCount}</span>
              </div>
              <div className="pt-6">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-green-400"
                  >
                    <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    dispatch(deletePostAction(post));
                  }}
                  className="ml-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-red-400"
                  >
                    <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                  </svg>
                </button>{" "}
              </div>
            </div>
          </div>
        </article>
      );
    });
  };

  return (
    <div>
      <section className="p-12 bg-gray-800 text-gray-100">
        <div className="mx-auto space-y-8">
          <div className="grid gap-x-20 gap-y-8 grid-cols-4">
            {renderPosts()}

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
