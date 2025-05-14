import { Schema } from "effect";
import * as UnitofMeasure from "./unitofmeasure.js";
const ProdcutIdTypeId = Symbol.for("@@ProdcutId");

export const ProdcutId = Schema.UUID.pipe(
  Schema.annotations({ identifier: "ProductID" }),
  Schema.brand(ProdcutIdTypeId)
);

export type ProdcutId = Schema.Schema.Type<typeof ProdcutId>;

export const Product = Schema.Struct({
  productId: Schema.String,
  name: Schema.NonEmptyString,
  unitofMeasureId: UnitofMeasure.UnitofMeasureId,
}).pipe(Schema.annotations({ identifier: "Product" }));
