import groq from 'groq';
import { sanityClient } from '~/lib/components/sanityio';
import { factsDataTransform } from '~/lib/celeb/getStaticProps/factsDataTransform';
import { getTags } from '~/lib/celeb/getStaticProps/getTags';
import { groqCeleb } from '~/lib/celeb/getStaticProps/groqCeleb';

export const getStaticProps = async () => {
  const celeb = await sanityClient.fetch(groqCeleb, { slug: 'elon-musk' });

  if (!celeb) {
    return {
      notFound: true,
    };
  }

  const { oldContent, facts, ...rest } = celeb;
  const [placeholderImage, orderOfTopics] = await Promise.all([
    sanityClient.getDocument(
      'image-98dc320a756a3f0f5dc40a59ced1194619719a60-225x225-png',
    ),
    sanityClient.fetch(
      groq`
        *[_type == 'orderOfTopics'][0]{
          'topics': topics[]->{name}.name
        }.topics
      `,
    ),
  ]);

  const transformedFacts = factsDataTransform(facts, orderOfTopics);
  const tags = getTags(transformedFacts, orderOfTopics);

  return {
    props: {
      celeb: {
        ...rest,
        tags,
        facts: transformedFacts,
      },
      placeholderImage,
    },
  };
};
