import { format, parse } from 'date-fns';
import { difference, groupBy, intersection, keys } from 'lodash-es';
import { GroupedFacts, Fact } from '~/lib/components/types';

export const copyFacts = (facts: Fact[]) =>
  facts.map((f) => ({
    ...f,
    date: format(parse(f.date, 'yyyy-MM-dd', new Date()), 'd LLL yyyy'),
  }));

export const factsDataTransform = (
  _facts: Fact[],
  orderOfTopics: string[],
): GroupedFacts => {
  const facts = copyFacts(_facts);
  const groups = groupBy(facts, (f) => f.topics[0].name);
  const topicStrings = keys(groups);
  const intersectionArr = intersection(topicStrings, orderOfTopics);
  const differenceArr = difference(topicStrings, orderOfTopics);
  const sortedIntersection = intersectionArr.sort(
    (a, b) => orderOfTopics.indexOf(a) - orderOfTopics.indexOf(b),
  );
  const sortedDifference = differenceArr.sort();
  const sortedTopics = [...sortedIntersection, ...sortedDifference];

  return {
    groups,
    topics: sortedTopics,
  };
};
