import React, { useEffect, useState, useMemo } from 'react';
import './styles.css';
import Post from '../../utils/Post';
import loadPosts from '../../utils/loadPosts';
import Button from '../../utils/Button';

const UseMemoHook = () => {
  const [posts, setPosts] = useState([]);
  const [searchName, setValue] = useState('');
  const [counter, setCounter] = useState(10);

  const handleIncrement = (qty) => {
    setCounter((prev) => (prev += qty));
  };

  //componentDidMount - executado apenas 1x
  useEffect(() => {
    const handleLoadPosts = async () => {
      const data = await loadPosts(counter);
      setPosts(data);
    };
    handleLoadPosts();
  }, [counter]);

  console.log('PARENT - renderizou');
  return (
    <div className="main">
      <input type="search" value={searchName} onChange={(e) => setValue(e.target.value)} />
      {useMemo(() => {
        return <Button increment={handleIncrement} />;
      }, [])}
      <div className="container">
        {/* quando useMemo é usado, o component Post é renderizado apenas uma vez, visto
        que é apenas um functional component.
        já o component parent (esse aqui), será renderizado toda vez que houver alteração de state.*/}
        {useMemo(() => {
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
        }, [posts])}
      </div>
    </div>
  );
};

export default UseMemoHook;
