import React, { useEffect, useState, useMemo } from 'react';
import './styles.css';
import Post from './Post';

const UseMemoHook = () => {
  console.log('PARENT - renderizou');
  const [posts, setPosts] = useState([]);
  const [searchName, setValue] = useState('');

  //componentDidMount - executado apenas 1x
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="main">
      <input type="search" value={searchName} onChange={(e) => setValue(e.target.value)} />
      <div className="container">
        {/* quando useMemo é usado, o component Post é renderizado apenas uma vez, visto
        que é apenas um component funcional.
        já o component parent (esse aqui), será renderizado toda vez que houver alteração de state.*/}
        {useMemo(() => {
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
        }, [posts])}
      </div>
    </div>
  );
};

export default UseMemoHook;
