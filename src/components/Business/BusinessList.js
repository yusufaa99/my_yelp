import React from "react";
import { BusinessCard } from "./BusinessCard";
import styles from "./BusinessList.module.css";

export function BusinessList({ businesses, loading }) {
  if (loading) return <p className={styles.loading}>Loading businesses...</p>;

  return (
    <div className={styles.businessList}>
      {businesses.length === 0 ? (
        <p className={styles.noResults}>No businesses found.</p>
      ) : (
        businesses.map((business) => <BusinessCard key={business.id} business={business} />)
      )}
    </div>
  );
}
