import * as Schema from "@effect/schema/Schema";

export const AggregateMessageId = Schema.UUID;

export class AggregateMessage extends Schema.Class<AggregateMessage>(
  "AggregateMessage"
)({
  _id: AggregateMessageId,
  _aggregateRoot: Schema.NonEmptyString,
  _aggregateId: Schema.NonEmptyString,
}) {}
