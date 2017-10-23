const Personal = function (update) {

  const divContent = $('<div class="container"></div>');
  const title = $('<h3 class="text-center">Administración de Personal</h3>');
  const form = $('<form></form>');
  const provincias = $('<div class="form-group"<label for="provincia">Provincia</label><select class="form-control" id="provincia">'+
        '<option>Huamanga</option><option>Cangallo</option><option>Huanta</option><option>Cangallo</option>'+
        '<option>Huanca Sancos</option><option>La Mar</option><option>Lucanas</option><option>Parinacochas</option>'+
        '<option>Paucar del Sara Sara</option><option>Sucre</option><option>Victor Fajardo</option><option>Vilcas Huaman</option>'+
        '</select></div>');

  const fgNombre = $('<div class = "form-group"></div>');
  const labelNombre  = $('<label for="nombre"></label>');
  const iptNombre  = $('<input type="text" id = "nombrePersonal" placeholder="Nombre">');

  const fgLastNombre = $('<div class = "form-group"></div>');
  const labelLastNombre  = $('<label for="nombre"></label>');
  const iptLastNombre  = $('<input type="text" id = "apellidoPersonal" placeholder="Apellido">');

  const cargo = $('<div class="form-group"<label for="cargo">Cargo</label><select class="form-control" id="cargo">'+
        '<option>Huamanga</option><option>Cangallo</option><option>Huanta</option><option>Cangallo</option>'+
        '<option>Huanca Sancos</option><option>La Mar</option><option>Lucanas</option><option>Parinacochas</option>'+
        '<option>Paucar del Sara Sara</option><option>Sucre</option><option>Victor Fajardo</option><option>Vilcas Huaman</option>'+
        '</select></div>');

  const comentarios = $('<div class="form-group"><label for="comment">Comment:</label>'+
                    '<textarea class="form-control" rows="5" id="comment"></textarea>'+
                    '</div>');

  const btnActualizar = $('<button id="btnActulizarPersonal" class="btn-login" type="button" name="button">Actualizar</button>');
  const btnGuardar = $('<button id="btnGuardarPersonal"  class="btn-login" type="button" name="button">Guardar</button>');
  const btnSalir = $('<button id="btnSalirPersonal"  class="btn-login" type="button" name="button">Regresar</button>');

  divContent.append(title,form);
  fgNombre.append(labelNombre,iptNombre);
  fgLastNombre.append(labelLastNombre,iptLastNombre);
  form
      .append(provincias)
      .append(fgNombre)
      .append(fgLastNombre)
      .append(cargo)
      .append(comentarios)
      .append(btnActualizar)
      .append(btnGuardar)
      .append(btnSalir);

  btnActualizar.on('click', (e) => {
    console.log("personal");
  });

  btnGuardar.on('click', (e) => {
    console.log("personal");
  });

  btnSalir.on('click', (e) => {
    state.screen = "principal";
    update();
  });

  return divContent;
};
