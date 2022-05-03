import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Filter from "./Filter";
import SearchResults from "./SearchResults";
import Stack from "@mui/material/Stack";
import "./SearchPage.css";
import Container from "./Container";
import Sort from "./Sort";

function SearchPage() {
  return (
    <>
      <Header />
      <Container
        position={"relative"}
        zIndex={2}
        sx={{ position: "absolute", top: "-305px", left: "380px" }}
      >
        <SearchBar />
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Sort />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Filter />
        <SearchResults />
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default SearchPage;
