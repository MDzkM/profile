import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  hr {
    border-color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  pre, code {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.subBody};
    transition: all 0.25s linear;
  }

  button .hamburger .hamburger-inner,
  button .hamburger .hamburger-inner::before,
  button .hamburger .hamburger-inner::after {
    background-color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  button .hamburger.is-active .hamburger-box span.hamburger-inner,
  button .hamburger.is-active .hamburger-box span.hamburger-inner::before,
  button .hamburger.is-active .hamburger-box span.hamburger-inner::after {
    background-color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .navbar {
    background-color: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
  }

  .navbar-light .navbar-brand {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .background-card {
    background-color: ${({ theme }) => theme.subBody};
    transition: all 0.25s linear;
  }
`