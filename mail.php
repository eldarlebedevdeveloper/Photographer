<?php
	if (isset($_POST['contactForm'])) {
		// $name = $_POST['name'];
		// $email = $_POST['email'];
		// $message = $_POST['message'];

		// $address = "eldarlebedev@gmail.com"; 
		// $mes = "Name: ".$name."\n\Theme: Message from the contact form" . "\n\nСообщение: ".$message."\n\n";
		// mail($address,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");


		$to  = "<stefan.obernosterer@ston.ch>" ; 
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$subject = "Name: " . $name . ". website contact form"  ; 
		$message = ' <h3>Username: ' . $name .  '</h3> <h3>Email: ' . $email . '</h3> <h3>Message: ' . $message . '</h3>';

		$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
		$headers .= "From: От кого письмо <from@example.com>\r\n"; 
		$headers .= "Reply-To: reply-to@example.com\r\n"; 

		mail($to, $subject, $message, $headers); 


		
	}

	$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']), 'https') === FALSE ? 'http' : 'https';
	$hostame     = $_SERVER['HTTP_HOST'];
	$currentUrl = $protocol . '://' . $hostame ;
		

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="<?php echo $currentUrl; ?>/wp-content/themes/photographer/css/components/basic_style.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $currentUrl; ?>/wp-content/themes/photographer/css/components/stars_button.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $currentUrl; ?>/wp-content/themes/photographer/css/fonts.css">


	<link rel="stylesheet" type="text/css" href="<?php echo $currentUrl; ?>/wp-content/themes/photographer/css/style.css">


	<title>Thanks</title>
</head>
<body>

	<style>
		body{
			background: #2d2d2d;
			    padding-top: 0;
		}
		.thanks{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 95vh;
		}

		.thanks_container{
			text-align: center;
			color: #155fb6;
		}

		a{
			text-decoration: none;
			color: inherit;
		}

		h1{
		    color: rgb(255, 255, 255);
		    font-size: 4vw;
		}

		@media screen and (max-width: 768px){
		    h1{
			    font-size: 10vw;
			}

			 .star_blue-text span:before , .star_blue-text span:after{
			     background-image: url(<?php echo $currentUrl; ?>/wp-content/themes/photographer/img/arrow_mob.svg)
			}

		}

	</style>

	<div class="thanks">
		<div class="thanks_container">
			<a href="<?php echo $currentUrl; ?>" class="backLink">
				<h1>Thank you</h1>
				<div class="star_background_blue">
					<a href="<?php echo $currentUrl; ?>" class="star_blue-text backLink"><span>come back</span></a>
				</div>
			</a>
		</div>
	</div>




	
</body>
</html>