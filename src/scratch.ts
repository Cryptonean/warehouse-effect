import * as Schema from "@effect/schema/Schema";
import * as AggreagateRoot from "./AggregateRoot.js";

const ProductAggreagate = AggreagateRoot.AggregateRoot({
  aggregateRootName: "products",
});

//
export class ChangeProductNameWithSchema extends Schema.TaggedRequest<ChangeProductNameWithSchema>()(
  "ChangeProductNameWithSchema",
  {
    payload: {
      ...ProductAggreagate.metadataFields,
      newName: Schema.NonEmptyString,
    },
    success: Schema.Boolean,
    failure: Schema.Never,
  }
) {}

ChangeProductNameWithSchema.make({
  newName: "New product",
  _id: "messgae",
  _aggregateId: "prodcut",
});

// export class ChangeProductName extends ProductAggreagate.Command<ChangeProductName>()(
//   {
//     _tag: "ChangeProductName",
//     payload: {
//       newName: Schema.NonEmptyString,
//     },
//     success: Schema.Boolean,
//     failure: Schema.Never,
//   }
// ) {}
