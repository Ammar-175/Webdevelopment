// console.log("Hello World");
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box and Text Shadows</title>
    <style>
        .container{
            display: flex;
        }
        .card{
            background-color: aqua;
            /* border: 2px solid black; */
            padding: 12px 18px;
            margin: 15px 14px;

            /* box-shadow: offset-x offset-y color */
            /* box-shadow: offset-x offset-y  blur-radius color */
            /* box-shadow: offset-x offset-y blur-radius spread-radius color */

            /* box-shadow upper to use -px and lower to use +px */
            box-shadow: 12px 15px 19px /*20px*/ yellowgreen;
            /* box-shadow: -12px -15px yellowgreen; */

            /* inset means shadow apper inside the conatiner */
            /* box-shadow: inset 6px 12px red; */
        }
        .card h1{
            text-shadow: 3px 3px 2px white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card" id="card-1">
            <h1>This is HTML course</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, neque soluta nemo quae nam ipsum praesentium ducimus nisi rerum quisquam vel tenetur veritatis. Nam maxime suscipit ipsa tempore consequatur autem reprehenderit accusamus animi. Dolor.</p>
        </div>
        <div class="card" id="card-2">
            <h1>This is CSS Course</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, neque soluta nemo quae nam ipsum praesentium ducimus nisi rerum quisquam vel tenetur veritatis. Nam maxime suscipit ipsa tempore consequatur autem reprehenderit accusamus animi. Dolor.</p>
        </div>
        <div class="card" id="card-3">
            <h1>This is JavaScript</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, neque soluta nemo quae nam ipsum praesentium ducimus nisi rerum quisquam vel tenetur veritatis. Nam maxime suscipit ipsa tempore consequatur autem reprehenderit accusamus animi. Dolor.</p>
        </div>
    </div>
</body>
</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});