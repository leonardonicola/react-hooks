import P from 'prop-types';

const Post = ({ post }) => {
  console.log('POST - renderizou');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

/* utilização de prop types é uma boa prática quando
não se utiliza Typescript */

export default Post;
