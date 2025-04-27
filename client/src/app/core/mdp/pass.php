<?php
// Informations de connexion à la base de données
$host = 'localhost'; // Hôte de la base de données
$user = 'root'; // Nom d'utilisateur de la base de données
$pass = ' ' ; // Mot de passe de la base de données (vide par défaut dans EasyPHP)
$db = 'isimed'; // Nom de la base de données
// Connexion à la base de données
$conn = mysql_connect($host, $user, $pass) or die('Connexion impossible à la base de données');
mysql_select_db($db, $conn) or die('Base de données introuvable');
// Récupération des données
$data = json_decode(file_get_contents("php://input"));

// Validation des données
if (!empty($data->firstname) && !empty($data->lastname)) {
    // Nettoyage des données
    $password = $conn->real_escape_string($data->password);
    $lastname = $conn->real_escape_string($data->lastname);
    $email=$_POST['email']
    // Requête d'insertion
    $sql = "UPDATE login SET  
            password = '$password' 
            WHERE email = $email";
    $result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(['exists' => true]);
} else {
    echo json_encode(['exists' => false]);
}

$conn->close();
}
?>