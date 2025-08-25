import "./App.css";
import HomePage from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Signup from "./Components/forms/Signup";
import Login from "./Components/forms/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrowseFunds from "./Components/BrowseFunds";
import CreateFundraiser from "./Components/forms/CreateFund";
import FundraiserDetails from "./Components/FundraiserDetails";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/browsefunds" element={<BrowseFunds />} />
            <Route path="/createfund" element={<CreateFundraiser />} />
            <Route path="/fundraiser/:id" element={<FundraiserDetails />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
