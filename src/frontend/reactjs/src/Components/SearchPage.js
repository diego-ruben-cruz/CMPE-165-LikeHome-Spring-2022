import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import TotalLocations from './TotalLocations';
import Footer from './Footer';
import Filter from './Filter';
import SearchResults from './SearchResults';
import Stack from '@mui/material/Stack';
import './SearchPage.css';

function area(){
    var location = document.getElementsByClassName();
}

function SearchPage(){ 
    return (
        <>
        <Header/>
        <br/>
        <br/>
        <br/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Filter/>
        <SearchResults/>
        </Stack>
        <br/>
        <Footer/>
        </>
    );
}

export default SearchPage;