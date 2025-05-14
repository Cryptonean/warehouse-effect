const AggregateRootTypeId = Symbol.for("@@AggregateRoot");
export type AggregateRootTypeId = typeof AggregateRootTypeId;

export interface AggregateRoot<AggregateRootName extends string> {
  [AggregateRootTypeId]: AggregateRootTypeId;
  aggregateRootName: AggregateRootName;
}

export interface AggregateRootArgs<AggregateRootName extends string> {
  aggregateRootName: AggregateRootName;
}

export function AggregateRoot<AggregateRootName extends string>(
  args: AggregateRootArgs<AggregateRootName>
): AggregateRoot<AggregateRootName> {
  return {
    [AggregateRootTypeId]: AggregateRootTypeId,
    aggregateRootName: args.aggregateRootName,
  };
}
