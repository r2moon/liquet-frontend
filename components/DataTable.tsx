import * as React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react"
import { useTable, Column } from "react-table"
import ReactLoading from "react-loading"

export type DataTableProps<Data extends object> = {
  data: Data[]
  columns: Column<Data>[]
  loading: boolean
}

export function DataTable<Data extends object>({ data, columns, loading }: DataTableProps<Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th isNumeric={(column as any).isNumeric}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()} isNumeric={(cell.column as any).isNumeric}>
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      {loading && (
        <Flex justify={"center"} grow={1} mt={"20px"}>
          <ReactLoading type={"spinningBubbles"} />
        </Flex>
      )}
    </>
  )
}
