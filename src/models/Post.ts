import { IFrontmatter } from './Frontmatter';

export interface IPost {
  readonly id: number;
  readonly excerpt: string;
  readonly html: string;
  readonly frontmatter: IFrontmatter;
  readonly fields: {
    readonly slug: string;
  };
  readonly timeToRead: number;
}
