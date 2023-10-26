import Sidebar from "./sidebar";
function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h1 className="font-semibold tracking-wider p-10">Dashboard</h1>
      </div>
    </div>
  );
}
export default Dashboard;
