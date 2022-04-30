import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact } from '~/lib/celeb/Facts/Fact';

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <div>
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          <div
            key={`${topic}-${i}`}
            style={{ backgroundColor: '#F4ECF7', marginTop: 20 }}
          >
            <div>{topic}</div>

            {factGroup.map((fact, innerI) => {
              return (
                <div key={`${topic}-${i}-${innerI}`}>
                  <Fact value={fact} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
