import React, { useEffect, useState } from "react";

export default function Pagination({ pageNumber, setPageNumber }) {
  const [pages, setPages] = useState([]);

  const initPages = () => {
    const pagesQuantity = 20;

    const pages = [];

    for (let i = 1; i < pagesQuantity + 1; i++) {
      pages.push(i);
    }

    setPages(pages);
  };

  useEffect(() => {
    initPages();
  }, []);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <span
          className={pageNumber === page && "active"}
          onClick={() => setPageNumber(page)}>
          {page}
        </span>
      ))}
    </div>
  );
}
