import { CacheProvider, ThemeProvider } from "@emotion/react";
import "./App.css";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { theme } from "./theme/theme";
import createCache from "@emotion/cache";
import HomePage from "./components/HomePage";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalaliV3";
import { LocalizationProvider } from "@mui/x-date-pickers";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <HomePage />
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
