import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#125D98',
            light: '#DDDDDD'
        },
    //   primary: {
    //     main: '#125D98',
        // secondary : '#F5A962',
        // third : '#3C8DAD',
        // background : '#DDDDDD'
    //   },
      success: {
        main: '#3C8DAD'
      },
      secondary: {
          main :'#F5A962'
      }
    },
    // typography: {
    //   fontSize: 16,
    //   h3: {
    //     fontWeight: 700,
    //     fontSize: '2.2rem'
    //   },
    //   h4: {
    //     fontWeight: 700,
    //     fontSize: '1.75rem'
    //   },
    //   h5: {
    //     fontWeight: 500
    //   },
    //   h6: {
    //     fontWeight: 500
    //   }
    // }
  })

  export default theme;