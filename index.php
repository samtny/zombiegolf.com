<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>zombie golf</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="js/util.js"></script>
        <script src="js/state.js"></script>
        <script src="js/strings.js"></script>
        <script src="js/timer.js"></script>
        <script src="js/out.js"></script>
        <script src="js/courses.js"></script>
        <script src="js/round.js"></script>
        <script src="js/main.js"></script>
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
        <section>
            <pre class="out"></pre>
        </section>
        <section class="nocourse">
            <button class="start" style="display: none" onClick="courses.showAvailable()">Begin</button>
            <ul>
                <li class="greenerPastures" style="display: none">
                    <button onClick="round.start(courses.greenerPastures)">Greener Pastures</button>
                </li>
            </ul>
        </section>
        <section class="course" style="display: none">
            Current Course: <span class="title"></span>
        </section>
    </body>
</html>
