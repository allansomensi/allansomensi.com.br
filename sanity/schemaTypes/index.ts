import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import category from "./category";
import purchaseOption from "./purchaseOption";
import heroBanner from "./heroBanner";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, purchaseOption, heroBanner],
};
