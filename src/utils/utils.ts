const getCurrentPage = ({ paginatorOption, info }) => {
  let currentPage = 1;

  if (info.prev && paginatorOption) {
    currentPage = parseInt(info.prev.split("page=")[1], 10) + 1;
  }

  return currentPage;
};

export { getCurrentPage };
