import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface IPagination {
  count: number;
  page: number;
  onChange: (e: any, value: any) => void;
}
const PaginationComponent = ({ count, page, onChange }: IPagination) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        color="secondary"
        onChange={onChange}
        page={page}
      />
    </Stack>
  );
};
export default PaginationComponent;
