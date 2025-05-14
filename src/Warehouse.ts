import { Schema } from "effect";
import * as Member from "./Member.js";

export const WareHouseIdType = Symbol.for("@@WarehouseId");

export const WareHouse = Schema.UUID.pipe(
  Schema.annotations({
    identifier: " Warehouse",
  })
);

export const Warehouse = Schema.Struct({
  warehouseId: WareHouse,
  name: Schema.NonEmptyString,
  ownerId: Schema.Option(Member.MemberId),
}).pipe(
  Schema.annotations({
    identifier: "WareHouse",
  })
);
