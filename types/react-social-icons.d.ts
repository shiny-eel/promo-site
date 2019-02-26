declare module 'react-social-icons' {
  export interface SocialIconProps {
    network?: string;
    url: string;
  }

  export class SocialIcon extends React.Component<SocialIconProps & any, any> {}
}
