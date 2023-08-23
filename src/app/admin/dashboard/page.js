import Search from "@/components/search";
import Sidebar from "@/components/sidebar";
import Table1 from "@/components/tables/table1";
import Table2 from "@/components/tables/table2";
import Topbar from "@/components/topbar";
import ChartFactory from "@/factories/chart";

function AdminDash() {
  const combodata = [
    [
      "Year",
      "AI",
      "Big Data",
      "IoT"
    ],
    ["2022/23", 165, 938, 522],
    ["2023/24", 135, 1120, 599],
    ["2024/25", 157, 1167, 587]
  ];

  const combooptions = {
    title: "Trainees trained on different Tracks",
    vAxis: { title: "Number of Trainees" },
    hAxis: { title: "Year" },
    seriesType: "bars",
    series: { 3: { type: "line" } },
  };

  const piedata = [
    ["Status", "Participants"],
    ["Droped", 50],
    ["Recruited", 900],
  ];

  const pieoptions = {
    title: "Recruitment:",
  };

  // return <Loading/>

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topbar />
      <div className="flex-1 flex flex-wrap pt-20">
        <Sidebar />
        <div className="flex-1 p-4 w-full md:w-1/2">

          <div className="mt-8 flex flex-col">
            <div className="flex flex-wrap">
              <ChartFactory type="ComboChart" title="Tracks" data={combodata} options={combooptions}/>
              <ChartFactory type="PieChart" title="Trained" data={piedata} options={pieoptions}/>
            </div>
            <Search />
            <Table1 />
            <Table2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDash