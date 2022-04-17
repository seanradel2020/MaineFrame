<html>
<head>
  <title>Newsletter Submission</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="./css/login_style.css" />
  <link rel="apple-touch-icon" sizes="180x180" href="media/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="media/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="media/icons/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
</head>
<body>
  <div id="logo" class="main-div">    
    <a href="index.html"><img src="media/umaineconnect.png" width="400" height="200"></a>
  </div>
  
Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>
Daily Updates? <?php echo $_GET["subscribe"]; ?>

</body>
</html>