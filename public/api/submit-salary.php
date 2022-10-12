<?php
require("includes/database.php");

$json_str = file_get_contents('php://input');

$json_obj = json_decode($json_str);
$student = $json_obj->student;
$salary = $json_obj->salary;

$sql = "INSERT INTO salaries (student, salary)
				VALUES ($student, $salary)";
if(!$conn->query($sql))
{
    $msg = "Error description: " . mysqli_error($conn);
	echo json_encode(array('result' => false, 'message' => $msg));
	mysqli_close($conn);
	exit;

}
		
if (mysqli_affected_rows($conn) == 0) 
{
    $msg = "nÃO ADICIOU ROW!";
	echo json_encode(array('result' => false, 'message' => $msg));
	mysqli_close($conn);
	exit;	
}
mysqli_close($conn);
echo json_encode(array('result' => true));

?>
