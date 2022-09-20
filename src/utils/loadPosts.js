const loadPosts = async (qty) => {
  let data;
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => (data = res));
  data = data.filter((el) => el.id <= qty);
  return data;
};

export default loadPosts;
