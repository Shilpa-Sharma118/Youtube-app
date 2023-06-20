import React from "react";
import SingleComment from "./SingleComment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shilpa Sharma",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [],
    },
    {
      name: "Shilpa Sharma",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Shilpa Sharma",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [
                {
                  name: "Shilpa Sharma",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                  replies: [
                    {
                      name: "Shilpa Sharma",
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                      replies: [
                        {
                          name: "Shilpa Sharma",
                          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Shilpa Sharma",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [
                {
                  name: "Shilpa Sharma",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                  replies: [
                    {
                      name: "Shilpa Sharma",
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Shilpa Sharma",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [],
            },
          ],
        },
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
      ],
    },
    {
      name: "Shilpa Sharma",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Shilpa Sharma",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [],
            },
          ],
        },
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
      ],
    },
    {
      name: "Shilpa Sharma",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [],
    },
    {
      name: "Shilpa Sharma",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
        {
          name: "Shilpa Sharma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Shilpa Sharma",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [
                {
                  name: "Shilpa Sharma",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const CommentsList = ({ comments }) => {
    return comments.map((comment, idx) => {
      return (
        <div className="bg-slate-100" key={idx}>
          <SingleComment data={comment} />
          <div className="pl-2 border-l-2  bg-slate-100 ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="m-2 px-5">
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
