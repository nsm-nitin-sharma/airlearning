<?php


if(isset($_POST['send']))
{

    $uname = $_POST['uname'];
    $lname = $_POST['lstname'];
    $email = $_POST['email'];
    $mno = $_POST['mno'];
    $message = $_POST['mssg'];

    if(empty($uname) || empty($email) || empty($lname) || empty($mno) || empty($message)){
        alert("please fill all blanks");
    }else{
        $to = "nitinsrma9944@gmail.com"

        if(mail($to, $uname, $lname, $email, $mno, $message)){
            alert("succesfully send");
        }
    }

}else{
    header(location:contact-me.html);
}


?>