import React, { useState } from "react";

// Sample nested comment data
const commentsData = [
  {
    id: 1,
    text: "Hey, this is the parent",
    replies: [
      {
        id: 2,
        text: "My first reply",
        replies: [{ id: 3, text: "Boom, I am the last one", replies: [] }],
      },
    ],
  },
];

// Recursive Comment component
const Comment = ({ comment, depth = 0 }) => {
  const [showReplies, setShowReplies] = useState(true);

  const toggleReplies = (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent comment
    setShowReplies(!showReplies);
  };

  return (
    <div
      style={{
        marginLeft: `${depth * 20}px`,
        borderLeft: "1px solid #ccc",
        paddingLeft: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        <p>
          {comment.text}{" "}
          {comment.replies.length > 0 && (
            <button
              onClick={toggleReplies}
              style={{
                fontSize: "12px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              {showReplies ? "Hide replies" : "Show replies"}
            </button>
          )}
        </p>
      </div>

      {showReplies &&
        comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} depth={depth + 1} />
        ))}
    </div>
  );
};

// Main wrapper
const NestedComments = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Nested Comments</h2>
      {commentsData.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default NestedComments;
