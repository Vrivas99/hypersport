import React from "react";
import Prodcards from "@/components/Prodcards";
import { getPathsFromIds } from "@/lib/utils";
import { getItemData } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function ProductPage({ item }) {
  return (
    <div>
      <Navbar />
      <Prodcards item={item.data} showAs="Page" />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      item: product,
    },
  };
}
