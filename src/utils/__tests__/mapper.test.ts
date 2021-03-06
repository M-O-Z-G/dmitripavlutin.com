import { toPostImageFluid } from '../mapper';

const fluidImage = {
  src: 'test',
  base64: 'test',
  aspectRatio: 1,
  srcSet: 'test',
  sizes: 'test',
  srcWebp: 'src-webp',
  srcSetWebp: 'src-set-webp',
};

const post = {
  title: 'Title',
  description: 'Description',
  published: '2019-01-01',
  slug: 'title',
  tags: ['tag1', 'tag2'],
  thumbnail: {
    childImageSharp: {
      fluid: fluidImage,
    },
  },
};

const edge = {
  node: {
    frontmatter: post,
  },
};

describe('toPostImageFluid()', function() {
  test('should map to post', function() {
    expect(toPostImageFluid(edge)).toStrictEqual({
      title: 'Title',
      description: 'Description',
      published: '2019-01-01',
      slug: 'title',
      tags: ['tag1', 'tag2'],
      thumbnail: fluidImage,
    });
  });
});
