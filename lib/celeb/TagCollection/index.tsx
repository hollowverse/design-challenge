import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div style={{ backgroundColor: '#E8F8F5' }}>
      <div>
        {tags.regular.map((t) => (
          <div key={t.tag.name}>{t.tag.name}</div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div>
          <p>Maybe</p>
          {tags.lowConfidence.map((t) => (
            <div key={t.tag.name}>{t.tag.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
