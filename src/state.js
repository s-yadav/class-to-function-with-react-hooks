import React, { Component, useState, useReducer } from "react";

/** Class Component Example */

export class ClassStateExample extends Component {
  state = {
    count: 0,
    book: {
      title: "Sapiens",
      author: "Yuval Noah Harari"
    }
  };
  updateBookTitle(title) {
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        title: title
      }
    });
  }
  render() {
    const {
      count,
      book: { author, title }
    } = this.state;
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <hr />
        <p>Book: {`${title} by ${author}`}</p>
        <button onClick={() => this.updateBookTitle("Homo Deus")}>
          Update book Title
        </button>
      </div>
    );
  }
}

/** Functional Component Example */

function bookReducer(state, action) {
  if (action.type === "UPDATE_BOOK_TITLE") {
    return {
      ...state,
      title: action.title
    };
  }

  return state;
}

export function FunctionStateExample() {
  const [count, setCount] = useState(0);

  const [book, updateBook] = useReducer(bookReducer, {
    title: "Sapiens",
    author: "Yuval Noah Harari"
  });

  const { title, author } = book;

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <p>Book: {`${title} by ${author}`}</p>
      <button
        onClick={() => {
          updateBook({
            type: "UPDATE_BOOK_TITLE",
            title: "Homo Deus"
          });
        }}
      >
        Update book Title
      </button>
    </div>
  );
}
