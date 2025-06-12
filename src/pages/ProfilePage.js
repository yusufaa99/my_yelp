import React, { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { createUser, updateUser } from "../graphql/mutations";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const userId = authUser.attributes.sub; // Cognito unique ID
        console.log("Authenticated User:", authUser);
        console.log("User ID (sub):", userId);

        // 🔍 Fetch user from API
        const response = await API.graphql(graphqlOperation(getUser, { id: userId }));
        console.log("GraphQL Response:", response);

        if (response?.data?.getUser) {
          console.log("✅ User found:", response.data.getUser);
          setUser(response.data.getUser);
          setProfile({
            name: response.data.getUser.name || "No Name",
            email: authUser.attributes.email || "No Email",
          });
        } else {
          console.warn("⚠️ User not found. Attempting to create new user...");

          // 🔄 Create user if not found
          const newUserResponse = await API.graphql(
            graphqlOperation(createUser, {
              input: {
                id: userId,  // Use Cognito ID as unique identifier
                username: authUser.username,
                email: authUser.attributes.email,
                name: authUser.attributes.name || "New User",
                phoneNumber: authUser.attributes.phone_number || "",
              },
            })
          );

          console.log("🔄 New User Created:", newUserResponse);

          if (newUserResponse?.data?.createUser) {
            setUser(newUserResponse.data.createUser);
            setProfile({
              name: newUserResponse.data.createUser.name,
              email: newUserResponse.data.createUser.email,
            });
          } else {
            console.error("❌ User creation failed.");
            setError("Failed to create a new user profile.");
          }
        }
      } catch (err) {
        console.error("❌ GraphQL Full Error:", err);
        setError(`Failed to load user data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  async function handleUpdateProfile(e) {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    if (!user) {
      setError("User not loaded. Please try again.");
      return;
    }

    try {
      const updateResponse = await API.graphql(
        graphqlOperation(updateUser, {
          input: { id: user.id, name: profile.name },
        })
      );

      console.log("✅ Profile Updated:", updateResponse);
      setSuccessMessage("Profile updated successfully!");
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      setError("Failed to update profile.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.profilePage}>
      <h1>User Profile</h1>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.profileForm} onSubmit={handleUpdateProfile}>
        <label>Name:</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          required
        />
        <label>Email:</label>
        <input type="email" value={profile.email} disabled />
        <button type="submit" className="btn-primary">Update Profile</button>
      </form>
    </div>
  );
}
