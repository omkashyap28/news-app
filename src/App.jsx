import Categories from "./components/Categories";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Home from "./pages/Home";

const App = () => (
  <Container>
    <Header />
    <Categories />
    <Home />
    <Loader />
    <Footer />
  </Container>
);

export default App;