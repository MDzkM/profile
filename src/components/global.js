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

  .hamburger .hamburger-inner,
  .hamburger .hamburger-inner::before,
  .hamburger .hamburger-inner::after {
    background-color: ${({ theme }) => theme.text};
  }

  .hamburger.is-active .hamburger-box div.hamburger-inner,
  .hamburger.is-active .hamburger-box div.hamburger-inner::before,
  .hamburger.is-active .hamburger-box div.hamburger-inner::after {
    background-color: ${({ theme }) => theme.text};
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

  .project-card {
    border-color: ${({ theme }) => theme.borderColor};
  }

  .pagination .page-link {
    background-color: ${({ theme }) => theme.subBody};
    border-color: ${({ theme }) => theme.subBody};
  }

  .post-card {
    background-color: ${({ theme }) => theme.subBody};
  }

  .session-search {
    color: ${({ theme }) => theme.text};
  }

  .session-search, .looking-glass {
    background-color: ${({ theme }) => theme.subBody};
		border: 1px solid ${({ theme }) => theme.subBody};
  }

  .session-search:focus,
  .session-search:hover {
    border-color: ${({ theme }) => theme.borderColor};
	}

  .session-search:focus + .looking-glass,
  .session-search:hover + .looking-glass {
		border-color: ${({ theme }) => theme.borderColor};
	}
`