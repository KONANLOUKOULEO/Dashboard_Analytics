import { useLocation, useNavigate } from "react-router";
import { Layout, theme, Avatar, Menu } from "antd";
const { Sider } = Layout;
import {
  BarChartOutlined,
  DashboardOutlined,
  UsergroupAddOutlined,
  ProductOutlined,
  EuroOutlined,
  ExportOutlined,
} from "@ant-design/icons";

export default function SideBarre({ open }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = theme.useToken(); // accès au thème courant

  const currenteActive = () => {
    const active = pathname.split("/").filter((i) => i);
    return [`/${active.join("/")}`];
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined  size="large"/>,
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
    },
    {
      key: "/utilisateurs",
      icon: <UsergroupAddOutlined size="large" />,
      label: "Utilisateurs",
      onClick: () => navigate("/utilisateurs"),
    },
    {
      key: "/produits",
      icon: <ProductOutlined size="large" />,
      label: "Produits",
      onClick: () => navigate("/produits"),
    },
    {
      key: "/ventes",
      icon: <EuroOutlined size="large" />,
      label: "Ventes",
      onClick: () => navigate("/ventes"),
    },
    {
      key: "/export",
      icon: <ExportOutlined  size="large" />,
      label: "Export",
      onClick: () => navigate("/export"),
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!open}
      width={220}
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        backgroundColor: token.colorBgContainer, // 🎨 couleur du thème actuel
        color: token.colorText,
        height: "100vh",
        transition: "all 0.3s",
        padding: "4px",
        borderRight: `1px solid ${token.colorBorder}`,
        borderTopRightRadius: "15px",
      }}
    >
      <div className="flex flex-col h-full gap-y-2 ">
        <div
          className={`border h-20 flex flex-row items-center justify-center gap-x-2 rounded  rounded-tr-xl shadow-md`}
          style={{ border: `1px solid ${token.colorBorder}` }}
        >
          <Avatar icon={<BarChartOutlined size="large" />} size="large" />
          <h2 className="font-semibold text-lg">DashAnalytics</h2>
        </div>
        <div
          className="flex flex-col  gap-y-3  border h-full rounded shadow "
          style={{ border: `1px solid ${token.colorBorder}` }}
        >
          <h2 className=" mt-3 text-lg font-semibold">Menu</h2>
          <Menu
            mode="inline"
            selectedKeys={currenteActive()}
            items={menuItems}
            style={{
              display:"flex",
              flexDirection:"column",
              gap:4
            }}
          />
        </div>
      </div>
    </Sider>
  );
}
