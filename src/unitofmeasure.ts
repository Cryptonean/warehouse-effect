import { Schema } from "effect";

export const UnitofMeasureTypeID = Symbol.for("@@UnitofMeasure");

export const UnitofMeasureId = Schema.UUID.pipe(
  Schema.annotations({ identifier: "UnitofMeasureID" }),
  Schema.brand(UnitofMeasureTypeID)
);

export const UnitofMeasure = Schema.Struct({
  unitofMeasureId: UnitofMeasureId,
  name: Schema.String,
}).pipe(
  Schema.annotations({
    identifier: "UniofMeasure",
  })
);
