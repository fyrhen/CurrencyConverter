function convert(){
  var quantia = document.getElementById("quantia").value;
  var moedaIn = document.querySelector('option[name="in"]:checked').value;
  var moedaOut = document.querySelector('option[name="out"]:checked').value;

  new Ajax.Request("index.php",
    {
      method: "get",
      parameters: {min: moedaIn, mout: moedaOut, valor: quantia},
      onSuccess: ajaxSuccess,
      onFailure: ajaxFailure
    }
  );
}

function ajaxSuccess(response){
  var data = JSON.parse(response.responseText);
  document.getElementById("resultado").innerHTML = data.valor.toFixed(2);
}

function ajaxFailure(response){
  alert(response.status);
}