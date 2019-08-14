export default {
  initialColorMode: 'light',
  useCustomProperties: true,
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem'
  ],
  fonts: {
    body: 'IBM Plex Sans, sans-serif'
  },
  fontSizes: [
    '0.6rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '2rem'
  ],
  fontWeights: {
    normal: 400,
    bold: 600
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.6,
    loose: 2
  },
  colors: {
    text: '#333',
    primary: '#FF5252',
    highlight: '#FFBF75',
    border: 'rgba(0, 0, 0, 0.20)',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        border: 'rgba(255, 255, 255, 0.20)'
      }
    }
  },
  styles: {
    root: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 4,
      lineHeight: 'normal',
      fontWeight: 'normal'
    },
    h1: {
      mt: 6,
      mb: 4,
      fontSize: 7,
      fontWeight: 'bold',
      lineHeight: 'tight'
    },
    h2: {
      mt: 9,
      mb: 6,
      pb: 2,
      fontSize: 2,
      lineHeight: 'tight',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      borderBottom: '1px solid',
      borderColor: 'border'
    },
    h3: {
      mt: 7,
      mb: 2,
      fontSize: 6,
      lineHeight: 'tight',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: 1,
      fontWeight: 'normal'
    },
    p: {
      mt: 0,
      mb: 4
    },
    ul: {
      p: 0,
      listStyle: 'none'
    },
    li: {
      mt: 0,
      mb: 2,
      '&::before': {
        content: '"•"',
        pr: 4
      }
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: 'border',
      '&:hover': {
        backgroundColor: 'highlight'
      }
    },
    hr: {
      my: 9,
      border: 0,
      height: 1,
      backgroundColor: 'border'
    }
  }
}
