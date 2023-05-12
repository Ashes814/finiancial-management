import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    // fles layout
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {/* some chart have an icon, others are not */}
        {icon}
        <Box width="100%">
          {/* set main title */}
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>

          {/* set subtitle */}
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>

      {/* second title */}
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
