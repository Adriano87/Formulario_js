(function(){
    var formulario = document.getElementById('formulario'),
        nome = formulario.nome,
        email = formulario.email,
        sexo = formulario.sexo,
        final = formulario.final,
        error = document.getElementById('error')

    function validarNome(e) {
        if (nome.value == '' || nome.value == null ) {
            console.log('Por favor complete seu nome');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor complete seu nome</li>';

            e.preventDefault();
        } else{
            erro.style.display = 'none';
        }
    }

    function validarEmail(e) {
        if (email.value == '' || email.value == null) {
            console.log('Por favor complete seu email');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor complete seu email</li>';

            e.preventDefault();
        } else{
            erro.style.display = 'none';
        }
    }

    function validarSexo(e) {
        if (sexo.value == '' || sexo.value == null) {
            console.log('Por favor complete seu sexo');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor complete seu sexo</li>';

            e.preventDefault();
        } else{
            erro.style.display = 'none';
        }
    }

    function validarFinal(e) {
      if  (final.checked == false){
          console.log('Por favor aceita os termos');
          error.style.display = 'block'
          error.innerHTML += '<li>Por favor aceita os termos</li>';

          e.preventDefault();
      } else{
          erro.style.display = 'none';
      }
    }

    function validarFormulario(e) {
        error.innerHTML = '';

        validarNome(e);
        validarEmail(e);
        validarSexo(e);
        validarFinal(e);
    }
        
    formulario.addEventListener('submit', validarFormulario);
}())