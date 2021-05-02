$(document).ready(function() {

  // array di oggetti gatti
  const gatti = [
    {
      nome: 'Tigro',
      età: 1,
      colore: '#4a8aeb',
      sesso: 'maschio'
    },
    {
      nome: 'Mimi',
      età: 3,
      colore: '#901780',
      sesso: 'femmina'
    },
    {
      nome: 'Muddy',
      età: 0.6,
      colore: '#23272f',
      sesso: 'maschio'
    },
    {
      nome: 'Garfield',
      età: 5,
      colore: '#f36b6b',
      sesso: 'maschio'
    },
    {
      nome: 'Gina',
      età: 8,
      colore: '#ae6b48',
      sesso: 'femmina'
    },
  ];

  // forEach() per stampare i gatti
  gatti.forEach((gatto) => {
   
    $('#gatti ul').append(colorName(gatto.colore, gatto.nome));
  })

  // colori fiocco
  const rosa = '#e16c7e';
  const azzurro = '#819fb3';

  // creo nuovo array e aggiungo le proprietà del fiocco
  const newArrayGatti = gatti.map((gatto) => {
    
    // colore e opacità in base al sesso
    let colore = (gatto.sesso === "femmina") ? rosa : azzurro;
    let opacity = gatto.età / 10;
    return{
      ...gatto,
      ribbon:{
        colore,
        opacity
      }
    }
  })

  const filtroFemmina = newArrayGatti.filter((gatto) => gatto.sesso === ' femmina')
  const filtroMaschio = newArrayGatti.filter((gatto) => gatto.sesso === ' maschio')

  filtroMaschio.forEach((gatto) => {

    $('#gatti_maschi ul').append(colorName(gatto.colore, gatto.nome, gatto.ribbon.colore, gatto.ribbon.opacity));
  })
 
  filtroFemmina.forEach((gatto) => {

    $('#gatti_femmina ul').append(colorName(gatto.colore, gatto.nome, gatto.ribbon.colore, gatto.ribbon.opacity));
  })

  // FUNZIONI
  // stamapa il nome e il colore del gatto
  function colorName (colore, nome, ...ribbon){
    
    let ribbonVuoto = "";
    if(ribbon.length > 0) {
      ribbonVuoto = 
      `
      <i class="fa fa-ribbon" style="color:${ribbon[0]}; opacity:${ribbon[1]}"></i>

      `
    }
    
    let html = 
    `
      <li>
        <i class="fas fa-cat" style="color:${colore}"></i>
        ${ribbonVuoto}
        <span style="color:white">${nome}</span>
      </li>
    
    `;

    return html
  }














})