import Link from "next/link";
import React from "react";
import { PaginationList, PaginationListItem } from "./styles";
interface IProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (param: any) => void;
}
const Pagination = ({ nPages, currentPage, setCurrentPage }: IProps) => {
  const pageNumbers = [...(Array(nPages + 1).keys() as any)].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <PaginationList>
      <PaginationListItem onClick={prevPage}>{"<<"}</PaginationListItem>
      {pageNumbers.map((pgNumber) => (
        <PaginationListItem
          onClick={() => setCurrentPage(pgNumber)}
          key={pgNumber}
          className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
        >
          {pgNumber}
        </PaginationListItem>
      ))}
      <PaginationListItem onClick={nextPage}>{">>"}</PaginationListItem>
    </PaginationList>
  );
};

export default Pagination;
