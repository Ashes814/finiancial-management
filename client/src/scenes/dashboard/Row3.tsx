import React from "react";
import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="g">
        g
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="h">
        h
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="i">
        i
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="j">
        j
      </DashboardBox>
    </>
  );
};

export default Row3;
