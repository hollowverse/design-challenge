import Link from 'next/link';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div>
      <div>
        <p>{value.date}</p>
      </div>

      <div>
        {(value.type === 'quote' && (
          <div>
            <p>
              {value.context}, {name} said
            </p>

            <blockquote>
              <p>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div>
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name}>
              # {t.isLowConfidence && 'Possibly '}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div>
        <Link href={value.source}>Source</Link>
        <Link href={value.forumLink}>Forum link</Link>
      </div>
    </div>
  );
};
