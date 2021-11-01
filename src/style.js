import { Drawer, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Box, styled, keyframes } from '@mui/system';

// import { createTheme } from "@mui/system";
// const defaultTheme = createTheme();

const gradientFramesGreenEnd = keyframes`
	0% {
		background: linear-gradient(90deg, rgba(64,169,223,1) 0%,rgba(115,194,130,1) 100%)
	} 10%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 25%,rgba(115,194,130,1) 100%)
	} 20%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 50%,rgba(115,194,130,1) 100%)
	}30%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 75%,rgba(115,194,130,1) 100%)
	}40%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 100%,rgba(115,194,130,1) 100%)
	}50%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 0%, rgba(64,169,223,1) 100%)
	}60%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 25%, rgba(64,169,223,1) 100%)
	}70%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 50%, rgba(64,169,223,1) 100%)
	}80%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 75%, rgba(64,169,223,1) 100%)
	}100%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 100%, rgba(64,169,223,1) 100%)
	}
`;

const gradientFramesDarkEnd = keyframes`
	0% {
		background: linear-gradient(90deg, rgba(64,169,223,1) 0%,rgba(115,194,130,1) 100%)
	} 10%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 25%,rgba(115,194,130,1) 100%)
	} 20%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 50%,rgba(115,194,130,1) 100%)
	}30%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 75%,rgba(115,194,130,1) 100%)
	}40%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 100%,rgba(115,194,130,1) 100%)
	}50%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 0%, rgba(64,169,223,1) 100%)
	}60%{
		background: linear-gradient(90deg,#242A38 25%, rgba(64,169,223,1) 100%)	
	}70%{
		background: linear-gradient(90deg,#242A38 50%, rgba(64,169,223,1) 100%)
	}80%{
		background: linear-gradient(90deg,#242A38 75%, rgba(64,169,223,1) 100%)
	}100%{
		background: linear-gradient(90deg,#242A38 100%, rgba(64,169,223,1) 100%)
	}
`;

const gradientFramesgrayEnd = keyframes`
	0% {
		background: linear-gradient(90deg, rgba(196, 196, 196, 1) 0%,rgba(173, 173, 173, 1) 100%)
	} 10%{
		background: linear-gradient(90deg,rgba(196, 196, 196, 1) 25%,rgba(173, 173, 173, 1) 100%)
	} 20%{
		background: linear-gradient(90deg,rgba(196, 196, 196, 1) 50%,rgba(173, 173, 173, 1) 100%)
	}30%{
		background: linear-gradient(90deg,rgba(196, 196, 196, 1) 75%,rgba(173, 173, 173, 1) 100%)
	}40%{
		background: linear-gradient(90deg,rgba(196, 196, 196, 1) 100%,rgba(173, 173, 173, 1) 100%)
	}50%{
		background: linear-gradient(90deg,rgba(173, 173, 173, 1) 0%, rgba(196, 196, 196, 1) 100%)
	}60%{
		background: linear-gradient(90deg,rgba(173, 173, 173, 1) 25%, rgba(196, 196, 196, 1) 100%)
	}70%{
		background: linear-gradient(90deg,rgba(173, 173, 173, 1) 50%, rgba(196, 196, 196, 1) 100%)
	}80%{
		background: linear-gradient(90deg,rgba(173, 173, 173, 1) 75%, rgba(196, 196, 196, 1) 100%)
	}100%{
		background: linear-gradient(90deg,rgba(173, 173, 173, 1) 100%, rgba(239, 241, 243, 1) 100%)
	}
`;

const gradientFramesblueEnd = keyframes`
0% {
	background: linear-gradient(90deg, rgba(64,169,223,0.5) 0%,rgba(115,194,130,0.5) 100%)
} 10%{
	background: linear-gradient(90deg,rgba(64,169,223,0.5) 25%,rgba(115,194,130,0.5) 100%)
} 20%{
	background: linear-gradient(90deg,rgba(64,169,223,0.5) 50%,rgba(115,194,130,0.5) 100%)
}30%{
	background: linear-gradient(90deg,rgba(64,169,223,0.5) 75%,rgba(115,194,130,0.5) 100%)
}40%{
	background: linear-gradient(90deg,rgba(64,169,223,0.5) 100%,rgba(115,194,130,0.5) 100%)
}50%{
	background: linear-gradient(90deg,rgba(115,194,130,0.5) 0%, rgba(64,169,223,0.5) 100%)
}60%{
	background: linear-gradient(90deg,rgba(115,194,130,0.5) 25%, rgba(64,169,223,0.5) 100%)
}70%{
	background: linear-gradient(90deg,rgba(115,194,130,0.5) 50%, rgba(64,169,223,0.5) 100%)
}80%{
	background: linear-gradient(90deg,rgba(115,194,130,0.5) 75%, rgba(64,169,223,0.5) 100%)
}100%{
	background: linear-gradient(90deg,rgba(115,194,130,0.5) 100%, rgba(64,169,223,0.5) 100%)
}
`;

const linkStyle = {
  background: '-webkit-linear-gradient( rgba(115, 194, 130, 1) 0%, rgba(64, 169, 223, 1) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#242A38'
    },
    secondary: {
      main: '#22BDCD',
      light: '#73C282'
    },
    text: {
      //blueish
      // secondary: "#708198",
      primary: '#708198',

      secondary: '#242A38'
      // primary: "#242A38",
    }
  },
  zIndex: {
    drawer: 1
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            borderRadius: '30px',
            color: '#242A38',
            // background: 'rgb(115, 194, 130)',
            background: 'linear-gradient(90deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)',
            '&:hover': {
              animation: ` ${gradientFramesGreenEnd} 0.5s forwards`
            }
            // animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
          }
        },
        {
          props: { variant: 'gradient2' },
          style: {
            borderRadius: '30px',
            color: '#242A38',
            // border: "1px solid white",
            // background: 'rgb(115, 194, 130)',
            background: 'linear-gradient(90deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)',
            '&:hover': {
              animation: ` ${gradientFramesDarkEnd} 0.5s forwards`,
              color: 'white'
            }
            // animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
          }
        },
        {
          props: { variant: 'gradient' },
          style: {
            borderRadius: '30px',
            color: '#242A38',
            // background: 'rgb(115, 194, 130)',
            background: 'linear-gradient(90deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)',
            '&:hover': {
              animation: ` ${gradientFramesGreenEnd} 0.5s forwards`
            }
            // animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
          }
        },
        {
          props: { variant: 'gradient3' },
          style: {
            borderRadius: '30px',
            color: '#242A38',
            // border: "1px solid white",
            // background: 'rgba(196, 196, 196, 1)',
            background: 'linear-gradient(90deg, rgba(173, 173, 173, 1)20%,rgba(196, 196, 196, 1) 100%)',
            '&:hover': {
              animation: ` ${gradientFramesgrayEnd} 0.5s forwards`
            }
            // animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
          }
        },
        {
          props: { variant: 'gradient4' },
          style: {
            borderRadius: '30px',
            color: '#242A38',
            // border: "1px solid white",
            // background: 'rgba(196, 196, 196, 1)',
            background: 'linear-gradient(90deg, rgba(64,169,223,0.5) 20%,rgba(115,194,130,0.5) 100%)',
            '&:hover': {
              animation: ` ${gradientFramesblueEnd} 0.5s forwards`
            }
            // animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
          }
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // scrollbarGutter: "stable both-edges",
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: '0.5em'
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            // background: 'rgb(115, 194, 130)',
            background: 'linear-gradient(180deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)',
            minHeight: 24,
            border: '1px solid #242A38'
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: 'rgba(64,169,223,1)'
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: 'rgba(64,169,223,1)'
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(64,169,223,1)'
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: 'none'
          }
        }
      }
    }
  }
});

// const GradientDrawer = styled(Drawer)`
// 	& > div {
// 		background: rgb(115, 194, 130);
// 		background: linear-gradient(360deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%);
// 	}
// `;
const GradientDrawer = styled(Drawer)({
  '& > div': {
    // background: "rgb(115, 194, 130)",
    background: 'linear-gradient(360deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)'
  }
  // "& paper": {
  // 	height: "500px",
  // },
});

const CenterTypography = styled(Typography)({
  textAlign: 'center'
});
const GradientBox = styled(Box)({
  // background: "rgb(115, 194, 130)",
  background: 'linear-gradient(180deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)'
});

export { theme, GradientDrawer, CenterTypography, GradientBox, linkStyle };
