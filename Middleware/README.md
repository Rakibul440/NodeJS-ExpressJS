# Middleware

1. body-parser
2. morgan

## Make your own Middleware

```
import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("Request Method",req.method);
  console.log("request URL",req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});


```

## How to use body-parser

```
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended: true})) //for parsing data from e HTML form

```
## How to use Morgan

```
import express from "express";
import morgan from "morgan"
const app = express();
const port = 3000;

app.use(morgan("combined"))

```

## How to get full file path of directory path

```
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); //Access file into 'public directory'
});

```