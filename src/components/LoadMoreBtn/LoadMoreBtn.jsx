const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '20px auto', display: 'block' }}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;