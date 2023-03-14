<?php
$connection = new mysqli("localhost","root","","DB1");
if($connection->connect_errno){
    echo "error";

}
echo "connection successful ";

$uname = $_POST["naame"];
$dep = $_POST["department"];
$reg = $_POST["reggno"];
$feed = $_POST["feedback"];

$sql = "INSERT INTO feed(naame,department,reggno,feedback) VALUES('$uname','$dep','$reg','$feed')";
$query = mysqli_query($connection,$sql);
if($query){
    echo "<div>submitted</div>
    
    <a href ='index.html'>add another</a>";
}
?>
