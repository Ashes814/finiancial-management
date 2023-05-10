import React from "react";
import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="d">
        d
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e">
        e
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="f">
        f
      </DashboardBox>
    </>
  );
};

export default Row2;
