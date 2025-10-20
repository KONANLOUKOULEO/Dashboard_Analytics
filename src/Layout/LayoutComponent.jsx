import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";
import SideBarre from "./SideBarre";
import HeaderComponent from "./HeaderComponent";

const {Content}=Layout

export default function LayoutComponent() {
  const [open, setOpen] = useState(true);

{/********* */}
  useEffect(()=>{
    console.log(open)
  },[open])
{/********* */}



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
    <Layout className="flex flex-col ">
      <SideBarre open={open} />
      <Layout >
        <HeaderComponent open={open} setOpen={setOpen} />
        <Content>
          <div className="p-6 mx-auto">
              <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
