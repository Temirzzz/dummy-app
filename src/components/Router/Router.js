import React from "react";
import { Routes, Route } from "react-router-dom";
import { CountPage } from "../../pages/CountPage/CountPage";
import { PostsPage } from "../../pages/PostsPage/PostsPage";
import { FormPage } from "../../pages/FormPage/FormPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/count-page" element={<CountPage />} />
      <Route path="/form-page" element={<FormPage />} />
    </Routes>
  );
};
