// import { Container } from "@chakra-ui/react"
// import { Column } from "react-table"

// import { DataTable } from "components/DataTable"
// import { useTraderDayData } from "hooks/useTraderDayData"
// import { TableRow } from "../common/types"

// type TColumn = Column<TableRow> & { isNumeric?: boolean }

// const columns: TColumn[] = [
//   {
//     Header: "Ranking",
//     id: "row",
//     accessor: (_row: any, i: number) => i + 1
//   },
//   {
//     Header: "Address",
//     accessor: "address",
//     Cell: ({ row }) => <div className="text-wrap">{row.values.address}</div>
//   },
//   {
//     Header: "PnL",
//     accessor: "pnl",
//     isNumeric: true
//   }
// ]

const Home = () => {
  //   const { traderDayData, loading } = useTraderDayData()
  return (
    <div></div>
    //     <Container>
    //       <DataTable columns={columns} data={traderDayData} loading={loading} />
    //     </Container>
  )
}

export default Home
