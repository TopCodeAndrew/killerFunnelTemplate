import routes from "./routes";
import Header from "./Component Blocks/Header";
import Footer from "./Component Blocks/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            {routes}
            <Footer />
        </div>
    );
}

export default App;
