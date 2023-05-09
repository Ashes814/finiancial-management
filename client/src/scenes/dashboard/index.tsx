import { Box, useTheme } from "@mui/material";

type Props = {};

export default function Dashboard(props: Props) {
  const { palette } = useTheme();
  return <Box color={palette.grey[300]}>Dashboard</Box>;
}
