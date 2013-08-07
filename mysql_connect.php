<?php
	$postcode = $_get["postcode"];
	$species = $_get["species"];

	$postcodeprefix = substr($species, 0, 2);

	$link = mysql_connect("localhost", 'Access', 'hello_world');
	if(!$link) {
		die('Could not connect: '.mysql_error());
	}
	echo 'Connected successfully';
	mysql_close($link);

	$query = "select * from `WhereCanIFind`.`report` where `WhereCanIFind`.`postcodeprefix` = '".$postcodeprefix."' AND `WhereCanIFind`.`species` = '".$species."'";

	mysql_query($query);
?>