// create HTML template for page, add styling
let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://kit.fontawesome.com/a8c6a3430b.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profiles</title>
</head>
<body>
    // need to add boostrap styling
    <header class="jumbotron">
        <h1 class="text-center">
        My Team
        </h1>
    </header><main>`

let endOfHTML = `</main>
</body>
</html>`

module.exports = {htmlTemplate, endOfHTML}