import React from "react";
import { firestore } from "firebase/app";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export const ListingsPage = () => {
  const [listings, loading, error] = useCollectionDataOnce(
    firestore().collection("listings")
  );
  return <main></main>;
};
