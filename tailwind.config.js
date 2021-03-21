module.exports = {
  prefix: 'pa-',
  purge: [],
  darkMode: 'class', 
  theme: {
    extend: {
        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }
      
            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }
      
            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }
            
            'md': {'max': '769px'},
            // => @media (max-width: 767px) { ... }
      
            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
            'xs': {'max': '415px'},
            'xxs': {'max': '376px'},
            's': {'max': '321px'}
          },
        spacing: {
            '99': '40rem',
            '100':'50rem',
            '110':'70rem',
            '120':'80rem',
            '130':'90rem',
            '150':'110rem'
          },
        minHeight: {
            '120': '30rem',
        },
        height: {
            '15': '3.75rem',
            '17': '4.25rem',
            '7': '1.75rem',
            '75': '18.75rem',
        },
        width: {
            '15': '3.75rem',
            open: '11.875rem',
            '75': '18.75rem',
        },
        margin: {
            '7': '1.75rem',
            '17': '4.25rem',
            '22':'5.5rem',
            '27': '6.75rem',
        },
        padding: {
            '7': '1.75rem',
        },
        borderWidth: {
            '5': '5px',
        },
        fontSize: {
            '5xl': '3.375rem',
            'xxl': '1.375rem',
            '10xl':'15rem',
            '30xl':'30rem'
        },
        boxShadow: {
            'lg': '0px 0px 10px #00000033',
            'xl': '0px 0px 20px #00000080',
        },
        gap: {
            '7': '1.75rem',
        },
        inset: {
            '10': '2.5rem',
            '11': '2.75rem',
            '17': '4.25rem',
            '1/2': '50%',
            '4/5':'85%'
        },
        backgroundImage: {
             'hero-lg': "url('../assets/img/cart-bg.png')",
            // 'logo':"url('../assets/img/logo.png')"
            
        },
    }
},
variants: {
},
  plugins: [],
}
