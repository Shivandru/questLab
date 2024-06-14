import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box bg="#000000">
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
