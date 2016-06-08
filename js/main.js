function obtenerMensaje(){
	var textarea = document.getElementById("mensaje");
	return textarea.value;
}
//crea div
function crearDiv(mensaje){
	var div = document.createElement("div");
	div.className="mensaje";
	div.innerHTML= "<p class='texto'>"+mensaje+"</p>"                                 
	return div;
}
function limpiarTextarea(){
	var textarea = document.getElementById("mensajes");
	textarea.value= "";
}
//almacena div
function enviarMensaje(){
	var mensaje = obtenerMensaje();
	if(mensaje!==""){
		crearDiv(mensaje);
		clean();
	}
	var div=crearDiv(mensaje);
	var contenedor= document.getElementById("mensajes");
	contenedor.appendChild(div);
	limpiarTextarea();
}
function clean(){
	var textarea= document.getElementById("mensaje")
	textarea.value="";
	textarea.focus();
}

//llamado
$('#nombre').on('click', function(event){

	event.preventDefault() // permite no recargar
	var selec= ($('#nombre').val()).toUpperCase()
	if(selec=='LABORATORIA'){
		$('#ho').html('<div class="col-4"><img src="image/logocodeacademy.png" class="avatar"></div><div class="col-8"><h4>Laboratoria Perú</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="panelcharla clearfix"><h5 class="nombre mariana">Mariana Costa</h5><p class="dice">¿Finalmente se corto?</p><p class="hora">11:13</p></div><div class="panelcharla clearfix"><h5 class="nombre papu">Maria Paula Rivarola</h5><p class="dice">Jajaja Sii finalmente se corto!!!</p><p class="hora">11:13</p></div><div class="panelcharla hablagian clearfix"><p class="my">Antes parecia mufasa jajajaja</p><p class="hora">11:14</p></div><div class="panelcharla hablagian clearfix"><p class="my">Ahora si esta decente</p><p class="hora">11:18</p></div><div class="panelcharla espacioweb"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">¿Por qué se lo habrá cortado?</p><p class="hora">11:20</p></div><div class="panelcharla"><h5 class="nombre aldo">Aldo Alfaro</h5><p class="dice">Ya ya ya, hacia mucho calor que más</p><p class="hora">11:25</p></div><div class="panelcharla"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Esta siguiendo los pasos de Juan Diego!</p><p class="hora">11:12</p></div><div class="panelcharla"><h5 class="nombre papu">Maria Paula Rivarola</h5><p class="dice">Nunca!!! Juan Diego es único</p><p class="hora">11:31</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='RAYMI') {
		$('#ho').html('<div class="col-4"><img src="image/raymi.jpg" class="avatar"></div><div class="col-8"><h4>Raymi Saldomando</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
		
	}else if (selec=='MARIANA') {
		$('#ho').html('<div class="col-4"><img src="image/mariana.jpg" class="avatar"></div><div class="col-8"><h4>Mariana Costa</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
		
	}else if (selec=='ANAMARIA') {
		$('#ho').html('<div class="col-4"><img src="image/anamaria.jpg" class="avatar"></div><div class="col-8"><h4>Ana María Martinez Franklin</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='RODULFO') {
		$('#ho').html('<div class="col-4"><img src="image/rodulfo.jpg" class="avatar"></div><div class="col-8"><h4>Rodulfo Prieto</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='ANDREA') {
		$('#ho').html('<div class="col-4"><img src="image/andrea.jpg" class="avatar"></div><div class="col-8"><h4>Andrea Lama</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='MARIAPAULA') {
		$('#ho').html('<div class="col-4"><img src="image/mariapaula.jpg" class="avatar"></div><div class="col-8"><h4>Maria Paula Rivarola</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='KATY') {
		$('#ho').html('<div class="col-4"><img src="image/katy.jpg" class="avatar"></div><div class="col-8"><h4>Katy Sanchez</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='ALDO') {
		$('#ho').html('<div class="col-4"><img src="image/aldo.jpg" class="avatar"></div><div class="col-8"><h4>Aldo Alfaro</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='RAYMII') {
		$('#ho').html('<div class="col-4"><img src="image/avatar.jpg" class="avatar"></div><div class="col-8"><h4>Raymii</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}else if (selec=='JOSE') {
		$('#ho').html('<div class="col-4"><img src="image/jose.jpg" class="avatar"></div><div class="col-8"><h4>Jose</h4></div>')
		$('#charla').html('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
	}
			$('#nombre').val("")
			$('#nombre').focus()
			
 })
$('#laboratoria').on('click', function(){
	$('#ho').html('<div class="col-4"><img src="image/logocodeacademy.png" class="avatar"></div><div class="col-8"><h4>Laboratoria Perú</h4></div>')
	$('#charla').append('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="panelcharla clearfix"><h5 class="nombre mariana">Mariana Costa</h5><p class="dice">¿Finalmente se corto?</p><p class="hora">11:13</p></div><div class="panelcharla clearfix"><h5 class="nombre papu">Maria Paula Rivarola</h5><p class="dice">Jajaja Sii finalmente se corto!!!</p><p class="hora">11:13</p></div><div class="panelcharla hablagian clearfix"><p class="my">Antes parecia mufasa jajajaja</p><p class="hora">11:14</p></div><div class="panelcharla hablagian clearfix"><p class="my">Ahora si esta decente</p><p class="hora">11:18</p></div><div class="panelcharla espacioweb"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">¿Por qué se lo habrá cortado?</p><p class="hora">11:20</p></div><div class="panelcharla"><h5 class="nombre aldo">Aldo Alfaro</h5><p class="dice">Ya ya ya, hacia mucho calor que más</p><p class="hora">11:25</p></div><div class="panelcharla"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Esta siguiendo los pasos de Juan Diego!</p><p class="hora">11:12</p></div><div class="panelcharla"><h5 class="nombre papu">Maria Paula Rivarola</h5><p class="dice">Nunca!!! Juan Diego es único</p><p class="hora">11:31</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
})
$('#raymy').on('click', function(){
	$('#ho').html('<div class="col-4"><img src="image/raymi.jpg" class="avatar"></div><div class="col-8"><h4>Raymi Saldomando</h4></div>')
	$('#charla').append('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
})
$('.per1').on('click', function(){
	$('#ho').html('<div class="col-4"><img src="image/mariana.jpg" class="avatar"></div><div class="col-8"><h4>Mariana Costa</h4></div>')
	$('#charla').append('<div class="panelcharla clearfix"><h5 class="nombre andrea">Andrea Lamas</h5><p class="dice">Chicos han visto el nuevo corte de Aldo?</p><p class="hora">11:12</p></div><div class="idea"><div class="panelcharla hablagian" id="mensajes"></div></div>')
})

