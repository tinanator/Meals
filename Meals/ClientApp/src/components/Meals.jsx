﻿import { useContext } from 'react';
import { useGlobalContext } from '../Context';

const Meals = () => {

    const context = useGlobalContext();
    console.log(context);

    return (
        <h1>Meals component</h1>
    )
}

export default Meals;