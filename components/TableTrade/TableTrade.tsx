import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "../ui/button"

const tradeData = [
  {
    name: "AAPL",
    value: "$150.00",
    chgPercent: "+1.25%",
    open: "$148.00",
    high: "$151.00",
    low: "$147.50",
  },
  {
    name: "TSLA",
    value: "$650.00",
    chgPercent: "-0.75%",
    open: "$655.00",
    high: "$660.00",
    low: "$640.00",
  },
  {
    name: "AMZN",
    value: "$3,200.00",
    chgPercent: "+0.50%",
    open: "$3,180.00",
    high: "$3,220.00",
    low: "$3,170.00",
  },
  {
    name: "GOOGL",
    value: "$2,500.00",
    chgPercent: "+0.85%",
    open: "$2,480.00",
    high: "$2,510.00",
    low: "$2,470.00",
  },
  {
    name: "MSFT",
    value: "$280.00",
    chgPercent: "-0.45%",
    open: "$285.00",
    high: "$287.00",
    low: "$278.00",
  },
]

export type TableTradeProps = {
  // props go here
}

export default function TableTrade(props: TableTradeProps) {
  return (
    <Table>
      <TableCaption>A list of your recent trades.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Chg%</TableHead>
          <TableHead className="text-right">Open</TableHead>
          <TableHead className="text-right">High</TableHead>
          <TableHead className="text-right">Low</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tradeData.map((trade) => (
          <TableRow key={trade.name}>
            <TableCell className="font-medium">{trade.name}</TableCell>
            <TableCell>{trade.value}</TableCell>
            <TableCell>{trade.chgPercent}</TableCell>
            <TableCell className="text-right">{trade.open}</TableCell>
            <TableCell className="text-right">{trade.high}</TableCell>
            <TableCell className="text-right">{trade.low}</TableCell>
            <TableCell className="text-right">
              <Button variant="destructive">Sell</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
