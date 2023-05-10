import React from "react";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a">
        a
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b">
        b
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c">
        c
      </DashboardBox>
    </>
  );
};

export default Row1;
