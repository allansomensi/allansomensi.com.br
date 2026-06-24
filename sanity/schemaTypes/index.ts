import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import category from "./category";
import purchaseOption from "./purchaseOption";
import heroBanner from "./heroBanner";
import aboutImage from "./aboutImage";
import storeHighlight from "./storeHighlight";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    category,
    purchaseOption,
    heroBanner,
    aboutImage,
    storeHighlight,
  ],
};
