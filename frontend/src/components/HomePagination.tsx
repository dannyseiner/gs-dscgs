import React from "react";
import Pagination from "react-bootstrap/Pagination";
import IHomePagination from "../interfaces/IHomePagination";
function HomePagination(props: IHomePagination) {
  const item = ({ position, active = false }: any) => {
    return active === true ? (
      <Pagination.Item active>{props.pageCount + position}</Pagination.Item>
    ) : (
      <Pagination.Item
        onClick={() => props.setPageCount(props.pageCount + position - 1)}
      >
        {props.pageCount + position}
      </Pagination.Item>
    );
  };
  return (
    <div className="div-center p-2 mt-3">
      <Pagination>
        <Pagination.First
          active={props.pageCount === 0 ? true : false}
          onClick={() => props.setPageCount(0)}
        />

        <Pagination.Prev
          onClick={() =>
            props.setPageCount(props.pageCount === 0 ? 0 : props.pageCount - 1)
          }
        />
        {/* ADDS BIG NUMS */}
        {props.pageCount > props.pageLength - 3 ? item({ position: -4 }) : ""}
        {props.pageCount > props.pageLength - 2 ? item({ position: -3 }) : ""}
        {/* MAIN -> MEDIAN NUMS */}
        {props.pageCount >= 2 ? item({ position: -1 }) : ""}
        {props.pageCount >= 1 ? item({ position: 0 }) : ""}
        {/* ACTIVE TAB */}
        {item({ position: 1, active: true })}
        {props.pageCount < props.pageLength - 1 ? item({ position: 2 }) : ""}
        {props.pageCount < props.pageLength - 2 ? item({ position: 3 }) : ""}
        {/* ADDS LOW NUMS */}
        {props.pageCount < 1 ? item({ position: 4 }) : ""}
        {props.pageCount < 2 ? item({ position: 5 }) : ""}

        <Pagination.Next
          onClick={() =>
            props.setPageCount(
              props.pageCount === props.pageLength - 1
                ? props.pageCount
                : props.pageCount + 1
            )
          }
        />
        <Pagination.Last
          active={props.pageCount === props.pageLength - 1 ? true : false}
          onClick={() => props.setPageCount(props.pageLength - 1)}
        />
      </Pagination>
    </div>
  );
}

export default HomePagination;
