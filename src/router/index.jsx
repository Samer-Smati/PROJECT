import React from "react";
import { Routes, Route } from "react-router-dom";

import { Routers } from "./routes";
function Index() {
  return (
    <Routes>
      {Routers?.map((router) => (
        <Route
          key={router.id}
          exact={router.exact}
          path={router.path}
          element={<router.component />}
        />
      ))}
    </Routes>
  );
}

export default Index;
