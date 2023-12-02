import { useEffect, useState } from "react";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  });
  return (
    <>
      <Table data={data} />
    </>
  );
}

export default App;
