import React from "react";
import Pagination from "react-bootstrap/Pagination";
import IHomePagination from "../interfaces/IHomePagination";
function HomePagination(props: IHomePagination) {
  return (
    <div className="div-center p-2">
      <Pagination>
        <Pagination.Prev
          onClick={() =>
            props.setPageCount(props.pageCount === 1 ? 1 : props.pageCount - 1)
          }
        />

        {/* {props.pageCount >= props.pageLength + 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount - 2)}
          >
            {" "}
            {props.pageCount - 2}
          </Pagination.Item>
        ) : (
          ""
        )}

        {props.pageCount >= props.pageLength + 2 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount + 2)}
          >
            {" "}
            {props.pageCount + 2}
          </Pagination.Item>
        ) : (
          ""
        )} */}

        {props.pageCount !== 2 && props.pageCount !== 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount - 2)}
          >
            {props.pageCount - 2}
          </Pagination.Item>
        ) : (
          ""
        )}

        {props.pageCount !== 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount - 1)}
          >
            {props.pageCount - 1}
          </Pagination.Item>
        ) : (
          ""
        )}

        <Pagination.Item active>{props.pageCount}</Pagination.Item>

        {props.pageCount <= props.pageLength - 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount + 1)}
          >
            {props.pageCount + 1}
          </Pagination.Item>
        ) : (
          ""
        )}

        {props.pageCount <= props.pageLength - 2 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount + 2)}
          >
            {" "}
            {props.pageCount + 2}
          </Pagination.Item>
        ) : (
          ""
        )}
        {props.pageCount === 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount + 3)}
          >
            {props.pageCount + 3}
          </Pagination.Item>
        ) : (
          ""
        )}

        {props.pageCount === 2 || props.pageCount === 1 ? (
          <Pagination.Item
            onClick={() => props.setPageCount(props.pageCount + 4)}
          >
            {props.pageCount + 4}
          </Pagination.Item>
        ) : (
          ""
        )}

        <Pagination.Next
          onClick={() => props.setPageCount(props.pageCount + 1)}
        />
      </Pagination>
    </div>
  );
}

export default HomePagination;
