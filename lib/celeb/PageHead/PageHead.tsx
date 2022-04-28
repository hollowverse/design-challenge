import Head from 'next/head';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const PageHead = () => {
  const context = useCelebContext();

  return (
    <Head>
      <title>
        {context.celeb.name}&apos;s religion and political views | Hollowverse
      </title>
      {context.celeb.oldContent?.summaries && (
        <meta
          name="description"
          content={`Religion: ${context.celeb.oldContent.summaries.religion}; political views: ${context.celeb.oldContent.summaries.politicalViews}`}
        />
      )}
      <link
        rel="canonical"
        href={`https://hollowverse.com/${context.celeb.slug}`}
      />
    </Head>
  );
};
