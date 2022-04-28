import Image from 'next/image';
import React from 'react';
import { sanityImage } from '~/lib/components/sanityio';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div style={{ backgroundColor: '#FEF9E7' }}>
      <section>
        <header>
          <div>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
            />
          </div>

          <h1>
            <span>Religion, politics, and ideas of</span>
            <br /> <span>{context.celeb.name}</span>
          </h1>
        </header>
      </section>
    </div>
  );
};
