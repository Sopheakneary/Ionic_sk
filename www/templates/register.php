<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$data = json_decode(file_get_contents('php://input'));
$db = new mysqli("localhost", "root", "", "ionic_sk");
$name = mysql_real_escape_string($data->name);
$name = mysql_real_escape_string($data->email);
$name = mysql_real_escape_string($data->pass);
$created = time();
$new_user = mysqli_query($db,"INTER INTO user value(null,'$name','$email','$pass','$created')");

if ($new_user) {
	echo "inserted";
}



// $result = $conn->query("SELECT CompanyName, City, Country FROM Customers");

// $outp = "";
// while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//     if ($outp != "") {$outp .= ",";}
//     $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
//     $outp .= '"City":"'   . $rs["City"]        . '",';
//     $outp .= '"Country":"'. $rs["Country"]     . '"}'; 
// }
// $outp ='{"records":['.$outp.']}';
$conn->close();

// echo($outp);
?>