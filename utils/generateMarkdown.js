// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
    <h1>${data.name}</h1>
    <h2>${data.city}</h2>
    <h3>${data.hobby}</h3>
    <a href="https://github.com/${data.github}">${data.github}</a>
  </body>
  </html>
`;
}


module.exports = generateMarkdown;
