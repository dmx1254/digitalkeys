import Item from "@/components/Item";
import { products } from "@/lib/data";
import React from "react";

const CollectionPage = ({
  params,
}: {
  params: {
    collectionId: string;
  };
}) => {
  const { collectionId } = params;
  const productFilter = products.filter(
    (product) => product.category === collectionId
  );

  const handleReturnCategory = (name: string) => {
    if (name.includes("-")) {
       let newName = name.split("-").join(" ");
      return newName;
    } else {
      return name;
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-start justify-center mx-auto my-8 gap-4">
        <h2 className="px-4 text-2xl text-gray-800 font-bold capitalize">{handleReturnCategory(collectionId)}</h2>
        <div className="px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {productFilter?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <img src="/logo.png" alt="logo" className="self-center w-60 h-56 object-contain object-center my-4" />
    </div>
  );
};

export default CollectionPage;
