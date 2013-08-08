<?php
	$nickname = $_GET["nickname"];
	$animal = $_GET["animal"];
	$msg = $_GET["msg"];
	$lat = $_GET["lat"];
	$lng = $_GET["lng"];

	exec ("python <<<<<scriptname>>>>>.py");
	
?>