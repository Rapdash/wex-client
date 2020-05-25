import React from "react";
import { firestore } from "firebase/app";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export const ListingsPage = () => {
  const [listings, loading, error] = useCollectionDataOnce(
    firestore().collection("listings")
  );

  if (error) {
    return (
      <main>
        <h2 className="text-2xl text-center">{error.message}</h2>
      </main>
    );
  }
  return <main className="container"></main>;
};
