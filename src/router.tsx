import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainLayout } from "./layouts";
import LinkListPage from "./pages/LinkListPage";
import { routes } from "./constants";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/"
                element={<MainLayout />}
                // This should be implement inside the outlet
                errorElement={<>Error Page</>}
            >
                <Route errorElement={<>Error Page</>}>
                    <Route index element={<LinkListPage />} />
                    <Route path={routes.LINK_LIST} element={<LinkListPage />} />
                </Route>
            </Route>
        </>
    )
);

export default router;