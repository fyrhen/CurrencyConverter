<?php
  $valor = $_GET["valor"];
  $min =  $_GET["min"];
  $mout = $_GET["mout"];
  
  $url = "https://api.exchangeratesapi.io/latest?base=$min&symbols=$mout";
  $json = file_get_contents($url);
  
  $data = json_decode($json);
  $cotacao = $data->rates->$mout;
  
  $valorConvertido = $valor * $cotacao;

  $obj->valor = $valorConvertido;
  $responseJson = json_encode($obj);
  print $responseJson;
?>