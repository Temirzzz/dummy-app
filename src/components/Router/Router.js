import React from "react";
import { Routes, Route } from "react-router-dom";
import { CountPage } from "../../pages/CountPage/CountPage";
import { PostsPage } from "../../pages/PostsPage/PostsPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/count-page" element={<CountPage />} />
      <Route path="/" element={<PostsPage />} />
    </Routes>
  );
};
