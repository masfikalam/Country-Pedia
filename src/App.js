import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./App.css";
import AllCountries from "./components/all_countries";
import Country from "./components/country_details";
import FooterPart from "./components/footer_part";
import SearchBox from "./components/search_box";

// modal styles
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "90%",
    right: "auto",
    bottom: "auto",
    minWidth: "300px",
    maxWidth: "700px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState({});
  const [term, setTerm] = useState("");

  // Loading country data
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // open modal
  const showDetails = (c) => {
    setSelected(c);
    setIsOpen(true);
  };

  return (
    <main>
      <header>
        <h1>Country Pedia</h1>
      </header>

      {countries.length > 0 && (
        <h4 className="total">
          {countries.length} countries in a single page!
        </h4>
      )}

      <SearchBox setTerm={setTerm} />

      <AllCountries
        countries={countries}
        showDetails={showDetails}
        term={term}
      />

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <Country country={selected} setIsOpen={setIsOpen} />
      </Modal>

      <FooterPart />
    </main>
  );
}

export default App;
