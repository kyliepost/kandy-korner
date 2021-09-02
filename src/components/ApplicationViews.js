import React from "react";
import { Route } from "react-router";
import { LocationList } from "./locations/locationsList";
import { ProductList } from "./products/productList";

export const ApplicationViews = () => {
    return (
        <>

        <Route exact path="/locations">
            <LocationList />
        </Route>

        <Route path="/products">
            <ProductList />
        </Route>
        </>
    )
}