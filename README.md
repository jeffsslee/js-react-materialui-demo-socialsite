# Social-media demo with Material UI & React JS

Social Media Demo App with Material UI and React JS

## 0110 Project Setup

### Inital Setup

To create React app  
To setup Material UI with icons

```
// React
npx create-react-app .

// Material UI
npm install @mui/material @emotion/react @emotion/styled

// Material UI Icons
npm install @mui/icons-material
```

To setup Roboto font

```javascript
// [public/index.html]

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap"
/>
<style>
  * {
    margin: 0;
    font-family: "Roboto", serif;
  }
</style>

```

### Project Inital Cleanup

To delete redandancy or unnecessary files

```
// Delete files except the followings

public  / index.html
src     / App.js
          index.css
          index.js
```

> Folder strcture after cleanup  
> ![siple folder structure](./images_forMD/simple-folder-structure.PNG)

To edit files with only necessary contents

```javascript
// [public/index.html]

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap"
    />
    <style>
      * {
        margin: 0;
        font-family: "Roboto", serif;
      }
    </style>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>


// [src/App.js]

function App() {
  return <div>App</div>;
}

export default App;


// [src/index.js]

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// [src.index.css]

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## 0210 Material UI Basic Intro

### sx (prop)

sx is a prop of Material UI components.  
In sx, you may write the CSS directly.

```javascript
// Careful : import from "@mui/material"

import { Box, Button } from "@mui/material";

function App() {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          background: "tomato",
          color: "yellowgreen",
          margin: 2, // 2 * 8px = 16px
          "&:hover": {
            background: "orange",
          },
          "&:disabled": {
            background: "grey",
            color: "#111",
          },
        }}
      >
        My button
      </Button>
    </Box>
  );
}

export default App;
```

> \* **In css**

```
.classA.classB => <div class="classA, classB">~~</div>
.classA .classB => <div class="classA"><div class="classB">~~</div><div>
```

> \* **& of scss**  
>  & : parent selector of scss

```javascript
// scss
.button {
  &:visited { }
  &:hover { }
  &:active { }
}

// css compiled from upper scss
  .button:visited { }
  .button:hover { }
  .button:active { }
```

### Custom component

styled() method(from "@mui/material") can custimize components.

```javascript
import { Box, Button, styled } from "@mui/material";

function App() {
  const MyButton = styled(Button)({
    background: "tomato",
    color: "yellowgreen",
    margin: 2, // 2 * 8px = 16px
    "&:hover": {
      background: "orange",
    },
    "&:disabled": {
      background: "grey",
      color: "#111",
    },
  });
  return (
    <Box>
      <MyButton variant="contained">My button</MyButton>
      <MyButton variant="contained" disabled>
        My button
      </MyButton>
    </Box>
  );
}

export default App;
```

### Custom theme

Default Theme of Material UI

> https://mui.com/material-ui/customization/default-theme/

To customize theme

- To defined a customized theme in theme.js
- To apply the theme in root side file such as index.js

```javascript
// [src/theme.js]

import { createTheme } from "@mui/material";
...

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d50000",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#a1a1a1",
    },
  },
});

// {src/index.js}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

You may apply the theme in the customized component.

```javascript
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { theme } from "./theme";

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    background: theme.palette.otherColor.main,
    color: "yellowgreen",
    margin: 2, // 2 * 8px = 16px
    "&:hover": {
      background: "orange",
    },
    "&:disabled": {
      background: "grey",
      color: "#111",
    },
  }));
  return (
    ...
  );
}

export default App;

```

## Reference

Lama Dev  
https://www.youtube.com/watch?app=desktop&v=fzxEECHnsvU
