const Personal = function (update) {

  const divContent = $('<div class="form-personal"></div>');
  const text = $('<h3 class="text-center">Administración de Personal</h3>');
  const txtEmail = $('<input id="txtEmail" class="feedback-input" type="email" name="" value="" placeholder="Ingresa tu Email">');
  const txtPass = $('<input id="txtPass"  class="feedback-input" type="password" name="" value="" placeholder="Ingresa tu contrasenia">');
  const btnLogin = $('<button id="btnLogin" class="btn-login" type="button" name="button">Iniciar Sesión</button>');
  const btnSingUp = $('<button id="btnSingUp"  class="btn-login" type="button" name="button">Registrarse</button>');
  const btnLogOut = $('<button id="btnLogOut"  class="btn-login hiden" type="button" name="button">Cerrar Sesión</button>');

  divContent.append(text,txtEmail,txtPass,btnLogin,btnSingUp,btnLogOut);

  btnLogin.on('click', (e) => {
    const email = txtEmail.val();
    const pass = txtPass.val();
    const auth = firebase.auth(); //constante para almacenar la promesa que nos va a devolver
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => {
      console.log(e.message);
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user);
        $('#btnLogOut').removeClass('hiden');
        state.screen = "principal";
        update();

      } else {
        console.log('no logeado');
        $('#btnLogOut').addClass('hiden');
      }
    });
  });

  btnSingUp.on('click', (e) => {
    const email = txtEmail.val();
    const pass = txtPass.val();
    const auth = firebase.auth(); //constante para almacenar la promesa que nos va a devolver
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => {
      console.log(e.message);
    });
  });

  btnLogOut.on('click', (e) => {
    firebase.auth().signOut();
  });

  return divContent;
};
