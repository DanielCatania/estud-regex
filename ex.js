// Exercícios sobre regex (https://github.com/fabricadeideias/exercicios-regex)
// Todas as questões abaixo devem ser respondidas utilizando regex.

// Faça um regex para capturar os cpfs presentes no trecho abaixo. Obs.: o regex precisa casar com cpfs com ou sem pontuação (772.843.809-34 ou 77284380934)
// Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), porém, para confirmar o número do seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.

// Encontre a data e hora no texto abaixo. O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00.

// Escreva um regex que encontre o conteúdo do atributo href do link no html a seguir (somente o endereço).

// <html>
//   <head><title>Exercícios</title></head>
//   <body>
//     <p>Menu</p>
//     <ul>
//       <li><a href="https://google.com">Google</a></li>
//     </ul>
// </html>
// Encontre o texto dentro da tag h1 abaixo.
// <html>
//   <head><title>Exercícios</title></head>
//   <body>
//     <h1>Exercícios</h1>
//     <table>
//       <thead>
//         <th>#</th>
//         <th>Questão</th>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Primeiro exercício de regex</td>
//         </tr>
//       </tbody>
//     </table>
// </html>

function exerciseSolver(str, regex) {
  const match = str.match(regex);

  console.log(match);
  return match;
}

const ex1 = exerciseSolver(
  "Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), porém, para confirmar o número do seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.",
  /(\d{3}[.-]?)+\d{2}/gm
);

const ex2 = exerciseSolver(
  "O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00.",
  /(\d{2}[/]){2}\d{4}[^.]+\d+/gm
);

const ex3 = exerciseSolver(
  `<html>
  <head><title>Exercícios</title></head>
  <body>
    <p>Menu</p>
    <ul>
      <li><a href="https://google.com">Google</a></li>
    </ul>
</html>`,
  /(?<=href=")[^"]+/gm
);

const ex4 = exerciseSolver(
  `
  <html>
<head><title>Exercícios</title></head>
<body>
<h1>Exercícios</h1>
<table>
<thead>
<th>#</th>
<th>Questão</th>
</thead>
<tbody>
<tr>
  <td>1</td>
  <td>Primeiro exercício de regex</td>
</tr>
</tbody>
</table>
</html>
`,
  /(?<=<h1>)(.*?)(?=<\/h1>)/gm
);
