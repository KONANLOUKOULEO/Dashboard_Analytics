import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Layout, ConfigProvider,theme } from "antd";
import SideBarre from "./SideBarre";
import HeaderComponent from "./HeaderComponent";
import { useTheme } from "../Context/ThemeContext";

const { Content } = Layout;

export default function LayoutComponent() {
  const [open, setOpen] = useState(true);
  const { isdark } = useTheme();

  {
    /********* */
  }
  useEffect(() => {
    console.log(open);
  }, [open]);
  {
    /********* */
  }

  useEffect(() => {
    const resizing = () => {
      const isopen = window.innerWidth >= 1024;
      setOpen(isopen);
    };

    resizing();

    window.addEventListener("resize", resizing);

    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);

  return (
    <ConfigProvider 
     theme={{
        algorithm: isdark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorBgContainer: isdark?"#0f172a":"#ffffff",
          colorBgLayout: isdark ? "#0f172a" : "#ffffff",
          colorText: isdark ? "#e2e8f0" : "#000000",
          colorPrimary: isdark ? "#38bdf8" : "#1677ff",
           colorBorder: isdark? "#2a2a3b":"#d9d9d9",
        },
      }}
    >
      <Layout className="flex flex-col ">
        <SideBarre open={open} />
        <Layout>
          <HeaderComponent open={open} setOpen={setOpen} />
          <Content>
            <div className="p-6 mx-auto">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
