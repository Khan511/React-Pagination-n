const paginate = (followers) => {
  const itemsPerPage = 10;
  const totalPages = followers.length / itemsPerPage;

  const newPages = Array.from({ length: totalPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newPages;
};
export default paginate;
