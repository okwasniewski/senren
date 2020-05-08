export default interface ThemeInterface {
  primary: string
  background: string
  fontColor: string
  buttonFont: string
  inputs: {
    input: string
    largeInput: string
    placehoder: string
  }
  auth: {
    background: string
    primary: string
    button: string
  }
  nav: {
    background: string
    link: string
    activeLink: string
  }
  mobileNav: {
    background: string
    iconBackground: string
    icon: string
  }
}
