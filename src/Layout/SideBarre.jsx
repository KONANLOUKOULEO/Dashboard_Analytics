import { useLocation, useNavigate } from "react-router";
import { Layout } from "antd";
const { Sider } = Layout;

const menuItems = [];

export default function SideBarre({ open}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currenteActive = () => {
    const active = pathname.split("/").filter((i) => i);
    return [`/${active.join("/")}`];
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!open}
      width={220}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        backgroundColor: "white",
        height: "100vh",
        transition: "all 0.3s",
        padding:"4px",
        borderTopRightRadius:"15px"
        
      }}
    >
      <div className="flex flex-col h-full gap-y-2 ">
        <div className="border h-20 flex rounded  rounded-tr-xl border-black/15 shadow-md">
        </div>
        <div className="border h-full rounded border-black/20 shadow ">
        </div>
      </div>
    </Sider>
  );
}
