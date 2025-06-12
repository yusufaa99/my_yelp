import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BusinessPage from "./pages/BusinessPage";
import BusinessesPage from "./pages/BusinessesPage"; // ✅ Import BusinessesPage
import ReviewPage from "./pages/ReviewPage";
import EditReviewPage from "./pages/EditReviewPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import ReservationsPage from "./pages/ReservationsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ConfirmSignup from "./pages/ConfirmSignup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AddBusinessPage from "./pages/AddBusinessPage";
import EditBusiness from "./components/Business/EditBusiness"; // ✅ Add this import


import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import RequireAuth from "./components/auth/RequireAuth"; // Wrapper for protected routes

import "bulma/css/bulma.css";
import "./styles/global.css";

// Configure AWS Amplify
Amplify.configure({
  ...awsExports,
  Storage: {
    AWSS3: {
      bucket: awsExports.aws_user_files_s3_bucket,
      region: awsExports.aws_user_files_s3_bucket_region,  // ✅ Explicitly set region
      level: "public",
    }
  }
});

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="app-container"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:term/:location" element={<SearchPage />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/review/:businessID" element={<ReviewPage />} />
        <Route path="/edit-review/:reviewID" element={<EditReviewPage />} />

        {/* Protected Routes */}
        <Route path="/favorites" element={<RequireAuth><FavoritesPage /></RequireAuth>} />
        <Route path="/reservations" element={<RequireAuth><ReservationsPage /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        <Route path="/add-business" element={<RequireAuth><AddBusinessPage /></RequireAuth>} />
        <Route path="/edit-business/:id" element={<RequireAuth><EditBusiness /></RequireAuth>} />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/confirm-signup" element={<ConfirmSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}
