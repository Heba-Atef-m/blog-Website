import {
  AppBar,
  Box,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b3b3b",
    },
  },
});
function ButtonAppBar() {
  const nav = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JSOM
            </Typography>
            <Button onClick={() => nav("/")} color="inherit">
              Authors
            </Button>
            <Button onClick={() => nav("/MostLikedPost")} color="inherit">
              MostLikedPost
            </Button>
            <Button onClick={() => nav("/MostCommentPost")} color="inherit">
              MostCommentPost
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default ButtonAppBar;
