import { Layout, Button, Divider, Dropdown, Space,Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const Me = {
  name: "Konan Loukou leo",
  email: "leo@gmail.com",
};

const items = [
  {
    key: "1",
    label: (
      <div className="p-1 flex flex-col gap-y-1 w-50">
        <div className="font-semibold text-md">{Me.name}</div>
        <div>{Me.email}</div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: "Log out",
    icon: <LogoutOutlined />,
  },
];

export default function HeaderComponent({ open, setOpen }) {
  return (
    <Header
      style={{
        backgroundColor: "transparent",
        paddingLeft: 28,
        paddingRight: 28,
      }}
    >
      <div className="flex  w-full  flex-row justify-between items-center border-b border-black/12 ">
        <div className="ml-2">
          <Button
            icon={open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            size="large"
            onClick={() => setOpen(!open)}
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-x-5 mr-3">
          <Button
          className="active:scale-95"
            icon={true ? <MoonOutlined /> : <SunOutlined />}
            size="large"
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          ></Button>
          <Dropdown menu={{ items }} >
            <Space >
              <Avatar  icon={<UserOutlined />}  size="large"/>
            </Space>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
