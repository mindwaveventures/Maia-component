module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fill: {
      current: 'currentColor',
      primary: 'rgb(var(--primary) / <alpha-value>)',

      verypoorly: 'var(--mood-verypoorly)',
    },
    extend: {
      backgroundImage: {
        pattern: 'var(--pattern)',
      },
      content: {
        tick: 'var(--tick)',
      },

      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primaryContent: 'rgb(var(--primary-content) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        secondaryContent: 'rgb(var(--secondary-content) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accentContent: 'rgb(var(--accent-content) / <alpha-value>)',
        btnPrimary: 'rgb(var(--button-primary) / <alpha-value>)',
        btnPrimaryContent: 'rgb(var(--btn-primary-content) / <alpha-value>)',
        btnPrimaryStates: 'rgb(var(--btn-primary-states) / <alpha-value>)',
        btnSecondary: 'rgb(var(--button-secondary) / <alpha-value>)',
        btnSecondaryContent: 'rgb(var(--btn-secondary-content) / <alpha-value>)',
        btnSecondaryStates: 'rgb(var(--btn-secondary-states) / <alpha-value>)',
        navbar: 'rgb(var(--navbar) / <alpha-value>)',
        navbarContent: 'rgb(var(--navbar-content) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        headerContent: 'rgb(var(--header-content) / <alpha-value>)',
        headerIcon: 'rgb(var(--header-icon) / <alpha-value>)',
        neutral: 'rgb(var(--neutral) / <alpha-value>)',
        baseColor: 'rgb(var(--baseColor) / <alpha-value>)',
        titleColor: 'rgb(var(--titleColor) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        body: 'rgb(var(--body) / <alpha-value>)',
        outlineColor: 'rgb(var(--outline) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        disabled: 'rgb(var(--disabled) / <alpha-value>)',
        transparent: 'var(--transparent)',

        mood: {
          verypoorly: 'var(--mood-verypoorly)',
          poor: 'var(--mood-poor)',
          alright: 'var(--mood-alright)',
          well: 'var(--mood-well)',
          verywell: 'var(--mood-verywell)',
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
      },
    },

    fontFamily: {
      header: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    screens: {
      xs: '420px',
      s: '500px',
      sm: '576px',
      md: '768px',
      mdl: '981px',
      lg: '1024px',
      xlg: '1140px',
      xl: '1280px',
      '2xl': '1536px',
      '4k': '75%',
    },
    container: {
      sm: ['640px'],
      md: ['768px'],
      lg: ['1024px'],
      xl: ['1285px'],
      '2xl': ['1536px'],
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1.25rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.375rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.625rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      '2xl': [
        '1.375rem',
        {
          lineHeight: '1.875rem',
        },
      ],
      '3xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '4xl': [
        '1.625rem',
        {
          lineHeight: '2.125rem',
        },
      ],
      '5xl': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      '6xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '7xl': [
        '2.25rem',
        {
          lineHeight: '2.875rem',
        },
      ],
      '8xl': [
        '2.5rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '9xl': [
        '2.75rem',
        {
          lineHeight: '3.375rem',
        },
      ],
      xxl: [
        '4rem',
        {
          lineHeight: '4.375rem',
        },
      ],
    },
    minWidth: {
      0: '0',
      80: '80px',
      100: '100px',
      150: '150px',
      220: '220px',
      full: '100%',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
