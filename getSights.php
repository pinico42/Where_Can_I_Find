<?php
	$lat = $_GET["lat"];
	$lng = $_GET["lng"];
	$postcode = $_GET["postcode"];

	$file = fopen("APIfile.json","w",);
	fwrite($file, '["'.$postcode.'""]');
	fclose($file);

	exec("python get_where_can_I_find.py");

	$wFile = file_get_contents("APIfile.json");
	echo $wFile;


?>