import { FixedObject, FluidObject } from 'gatsby-image';

export interface IBanner {
  readonly id: string;
  readonly childImageSharp: IChildImageSharp;
}

interface IChildImageSharp {
  readonly fixed: FixedObject;
  readonly fluid: FluidObject;
}
