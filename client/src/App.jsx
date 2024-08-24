import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/SignUp";
import { Header } from "./Components/Header";
import { PrivateRoute } from "./Components/PrivateRoute";
import { CreateListing } from "./pages/CreateListing";
import { UpdateListing } from "./pages/UpdateListing";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Create-listing" element={<CreateListing/>} />
          <Route path="/update-listing/:listingId" element={<UpdateListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
