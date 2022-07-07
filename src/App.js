import { Box, CssBaseline, Divider, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Properties from "./components/Properties";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CssBaseline>
        <Box>
          <Navbar />
          <Stack direction="row" justifyContent="space-between" spacing={1} width="100%">
            <Sidebar />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", sm: "none", md: "flex" }, minHeight: "100vh" }}
            />
            <Properties />
          </Stack>
        </Box>
      </CssBaseline>
    </LocalizationProvider>
  );
}

export default App;
