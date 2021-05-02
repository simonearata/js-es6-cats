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
      età: 5,
      colore: '#901780',
      sesso: 'femmina'
    },
    {
      nome: 'Muddy',
      età: 2,
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
  });

  // colori fiocco
  const rosa = '#ffffff';
  const azzurro = '#000000';

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
  });
  
  // filtriamo in base al parametro maschio e femmina
  const filtroFemmina = newArrayGatti.filter((gatto) => gatto.sesso === 'femmina');
  const filtroMaschio = newArrayGatti.filter((gatto) => gatto.sesso === 'maschio');

  // aggiungiamo le liste filtrate
  filtroMaschio.forEach((gatto) => {

    $('#gatti_maschi ul').append(colorName(gatto.colore, gatto.nome, gatto.ribbon.colore, gatto.ribbon.opacity));
  });
 
  filtroFemmina.forEach((gatto) => {

    $('#gatti_femmina ul').append(colorName(gatto.colore, gatto.nome, gatto.ribbon.colore, gatto.ribbon.opacity));
  });

  // creo un array sommando i due array precendentemente filtrati in base al sesso
  const gattiOrdinati = [...filtroFemmina, ...filtroMaschio];
  console.log(gattiOrdinati)
  
  // creo nuovo array e destrutturo l'oggetto per estrapolare le caratteristiche che ci interessano e le aggiungo
  const gattiNuovi = gattiOrdinati.map((gatto) => {

    const {nome, colore, ribbon} = gatto;

    $('#gatti_ordinati ul').append(colorName(colore, nome, ribbon.colore, ribbon.opacity));

    return {nome, colore, ribbon}
  });

  


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