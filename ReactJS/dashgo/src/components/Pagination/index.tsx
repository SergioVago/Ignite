import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      marginTop="8"
      justify="space-between"
      alignItems="center"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  )
}