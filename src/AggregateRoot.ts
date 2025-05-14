import { Schema } from "effect";

const AggregateRootTypeId = Symbol.for("@@AggregateRoot");
export type AggregateRootTypeId = typeof AggregateRootTypeId;

export interface AggregateRoot<AggregateRootName extends string> {
  [AggregateRootTypeId]: AggregateRootTypeId;
  aggregateRootName: AggregateRootName;
  metadataFields: AggregateRootMetadataFields<AggregateRootName>;
}

export interface AggregateRootArgs<AggregateRootName extends string> {
  aggregateRootName: AggregateRootName;
}

type AggregateRootMetadataFields<AggregateRootName extends string> = {
  _id: typeof Schema.UUID;
  _aggregateRoot: Schema.tag<AggregateRootName>;
  _aggregateId: typeof Schema.NonEmptyString;
};

export function AggregateRoot<AggregateRootName extends string>(
  args: AggregateRootArgs<AggregateRootName>
): AggregateRoot<AggregateRootName> {
  const metadataFields = {
    _id: Schema.UUID,
    _aggregateRoot: Schema.tag(args.aggregateRootName),
    _aggregateId: Schema.NonEmptyString,
    //
  };
  return {
    [AggregateRootTypeId]: AggregateRootTypeId,
    aggregateRootName: args.aggregateRootName,
    metadataFields,
  };
}
