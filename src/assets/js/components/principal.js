const Principal = function () {

  const content = $('<div class="principal-content"></div>');
  const title = $('<h2 class="h2-principal">sistema regional de intenciones de siembra<br><small>REGION: Ayacucho</small></h2>');
  const p = $('<p>Ingreso</p>');
  const a1 = $('<a href="#" class="code-button"> Personal</a>');
  const a2 = $('<a href="#" class="code-button">Variedades</a>');
  const a3 = $('<a href="#" class="code-button"> Data</a>');
  const reportes = $('<br><p>Reportes y consultas</p>');
  const reporteCultivo = $('<a href="#" class="code-button">Reporte por cultivo</a>');
  const reporteProvincia = $('<a href="#" class="code-button">Reporte por provincia</a>');

  content.append(title,p,a1,a2,a3,reportes,reporteCultivo,reporteProvincia);

  a1.on('click', (e) =>{
    e.preventDefault();
    state.screen = "personal"
  });
  a2.on('click', (e) =>{
    e.preventDefault();
    state.screen = "variedades"
  });
  a3.on('click', (e) =>{
    e.preventDefault();
    state.screen = "data"
  });
  reporteCultivo.on('click', (e) =>{
    e.preventDefault();
    state.screen = "reporteCultivo"
  });
  reporteProvincia.on('click', (e) =>{
    e.preventDefault();
    state.screen = "reporteProvincia"
  });

  return content;
};
