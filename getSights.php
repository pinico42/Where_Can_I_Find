<?php
	$lat = $_GET["lat"];
	$lng = $_GET["lng"];
	$postcode = $_GET["postcode"];

	exec("python <<<<scriptname>>>>.py",$output);

	echo $output;
?>