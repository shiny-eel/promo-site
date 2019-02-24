// /** Global definitions for development **/
// import * as React from 'react';

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// declare module 'react-scrollable-anchor' {
//   import * as React from 'react';

//   export interface ScrollableAnchorProps {
//     id: any;
//   }
//   export class ScrollableAnchor extends React.Component<ScrollableAnchorProps, any> {}
//   export function configureAnchors(args?: any): void;
// }

// // Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
