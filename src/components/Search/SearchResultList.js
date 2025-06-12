import React from "react";
import { BusinessCard } from "../Business/BusinessCard";
import styles from "./SearchResultList.module.css";

export function SearchResultList({ businesses = [] }) {
  if (!Array.isArray(businesses)) {
    console.error("Error: `businesses` is not an array", businesses);
    return <p className={styles.error}>No search results found.</p>;
  }

  return (
    <div className={styles.resultList}>
      {businesses.length === 0 ? (
        <p className={styles.noResults}>No businesses found.</p>
      ) : (
        businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))
      )}
    </div>
  );
}
