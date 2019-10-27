import { IBanner } from './Banner';

export interface IFrontmatter {
  readonly date: string;
  readonly title: string;
  readonly category: string;
  readonly tags: ReadonlyArray<string>;
  readonly banner: IBanner;
}
