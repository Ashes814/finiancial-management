import React from "react";
import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row1 = (props: Props) => {
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
