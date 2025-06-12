import React, { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser, updateUser } from "../../graphql/mutations";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(graphqlOperation(getUser, { id: authUser.username }));

        setUser(authUser);
        setProfile({
          name: response.data.getUser?.name || "",
          email: authUser.attributes.email || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Failed to load user profile.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      await API.graphql(
        graphqlOperation(updateUser, {
          input: { id: user.username, name: profile.name },
        })
      );
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile.");
    }
  }

  async function handleDeleteAccount() {
    if (!window.confirm("Are you sure you want to delete your account? This action is irreversible!")) {
      return;
    }

    try {
      await Auth.deleteUser();
      alert("Your account has been deleted.");
      window.location.reload(); // Redirect or handle logout
    } catch (error) {
      console.error("Error deleting account:", error);
      setError("Failed to delete account. Please try again.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.profilePage}>
      <h2>User Profile</h2>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.profileForm} onSubmit={handleUpdate}>
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

      {/* Delete Account Button */}
      <button onClick={handleDeleteAccount} className={styles.deleteButton}>
        Delete Account
      </button>
    </div>
  );
}
