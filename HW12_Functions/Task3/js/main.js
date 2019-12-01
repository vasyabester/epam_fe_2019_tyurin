function getQuantityPostsAndCommentsByAuthor(listOfPosts, name) {
  const authorPostsQuantity = listOfPosts.filter((post) => post.author === name).length;
  let authorCommentsQuantity = 0;

  listOfPosts.forEach((post) => {
    if (post.comments) {
      authorCommentsQuantity += post.comments.filter((comment) => comment.author === name).length;
    }
  });

  return authorPostsQuantity === 0 || authorCommentsQuantity === 0
    ? '0'
    : `post: ${authorPostsQuantity}, comments: ${authorCommentsQuantity}`;
}

const listOfPosts = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
    ],
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus',
      },
    ],
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus',
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle',
  },
];

getQuantityPostsAndCommentsByAuthor(listOfPosts, 'Rimus');
