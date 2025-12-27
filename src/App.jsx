import Categories from "./components/Categories";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
  <Container>
    <Header />
    <Categories />
    <Home />
    <Footer />
  </Container>
);

export default App;