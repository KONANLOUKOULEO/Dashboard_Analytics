import { Layout, Button, Dropdown, Space, Avatar, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTheme } from "../Context/ThemeContext";

const { Header } = Layout;

const Me = {
  name: "Konan Loukou Leo",
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
  const { isdark, toggelTheme } = useTheme();
  const { token } = theme.useToken();

  return (
    <Header
      style={{
        backgroundColor: "transparent",
        paddingLeft: 28,
        paddingRight: 28,
      }}
    >
      <div className="flex w-full flex-row justify-between items-center border-b border-black/12">
        <div className="ml-2">
          <Button
            icon={open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            size="large"
            onClick={() => setOpen(!open)}
            style={{
              backgroundColor: token.colorBgContainer,
              color: token.colorText,
              border: `1px solid ${token.colorBorder}`,
            }}
          />
        </div>

        <div className="flex flex-row justify-between items-center gap-x-5 mr-3">
          <Button
            className="active:scale-95"
            icon={!isdark ? <MoonOutlined /> : <SunOutlined />}
            size="large"
            onClick={toggelTheme}
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          />
            <Dropdown menu={{ items }}>
              <Space>
                <Avatar icon={<UserOutlined />} size="large" />
              </Space>
            </Dropdown>
        </div>
      </div>
    </Header>
  );
}
