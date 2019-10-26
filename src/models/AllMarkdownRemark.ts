import { IPost } from './Post';

export interface IAllMarkdownRemark {
  readonly totalCount: number;
  readonly edges: ReadonlyArray<{ readonly node: IPost }>;
}
