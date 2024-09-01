import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";
import TableHeader from "../components/TableHeader";
import TableMui from "../components/TableMui";
import CardSale from "../components/CardSale";
import SimpleCharts from "../components/SimpleChart";
export default function DashboardPage() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const headers = ["No", "Name", "Date", "Amount"];
  const rows = [
    createData(1, "Sok", "1-1-2024", "10$"),
    createData(2, "Sok", "1-1-2024", "10$"),
    createData(3, "Sok", "1-1-2024", "10$"),
    createData(4, "Sok", "1-1-2024", "10$"),
  ];
  const data = { headers, rows };
  const content = (
    <>
      <h1>Dashboard Page 1</h1>
      <SimpleCharts />
      <Box
        sx={{
          boxShadow: 3,
        }}
      >
        <TableHeader />
        <TableMui data={data} />
      </Box>
      <CardSale />
      <SideBar />
    </>
  );
  return content;
}
