declare module 'react-scrollable-anchor' {
  export interface ScrollableAnchorProps {
    id: any;
  }
  export class ScrollableAnchor extends React.Component<ScrollableAnchorProps, any> {}
  export function configureAnchors(config?: any): void;
  export default _default;
  export const _default: any;
  export const goToAnchor: any;
  export function goToTop(): void;
  export const removeHash: any;
}
