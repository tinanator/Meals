import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Favourites from './components/Favourites';
import Search from './components/Search';
import Modal from './components/Modal';
import Meals from './components/Meals';

export default function App() {
    return (
        <main>
            {/*<Search />*/}
            {/*<Favourites />*/}
            <Meals />
            {/*<Modal />*/}
        </main>
    );
}
