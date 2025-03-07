declare module 'ng-walkthrough' {
  export interface WalkthroughStep {
    selector: string;
    description: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    arrow?: boolean;
    arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  }

  export interface WalkthroughOptions {
    steps: WalkthroughStep[];
  }

  export class NgWalkthroughService {
    startWalkthrough(options: any): void;
  }

  export class NgWalkthroughModule {}
}
