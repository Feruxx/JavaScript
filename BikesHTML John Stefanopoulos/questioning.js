
function score(){
	var questions =[
	{
		prompt:"Do you ever ride in the rain? \n (a) Yes \n (b) No \n (c) Why not",
		answer:"b",
	},
	{
		prompt:"How fast was the first bike? \n (a) 32 kph \n (b) 40 kph \n (c) 45 kph",
		answer:"b",
	},
		{
		prompt:"When you drive fast and you see a cop do you \n (a) Slow down to speed limit \n (b) Speed faster \n (c) Nothing",
		answer:"a",
	},
	{
		prompt:"What was the name of the bike that runs with dust instead of gas \n (a) Dowsty Bike \n (b) Toilet Bike Neo \n (c) Kawasaki with Dust",
		answer:"b",
	},
	{
		prompt:"How many wheels does a motorbike \n (a) 16 \n (b) 4 \n (c) 2",
		answer:"b",
	},
	{
		prompt:"how many motorbikes does it take to fill up a car spot \n (a) 8 \n (b) 4 \n (c) 6",
		answer:"a",
	},
	{
		prompt:"When was the first motorbike invented \n (a) 1922 \n (b) 1935 \n (c) 1885",
		answer:"c",
	},
	{
		prompt:"Who was the record for the longest ride with a motorbike \n (a) Harley Davidson  \n (b) Matthew McKelvey \n (c) Emilio Scotto",
		answer:"c",
	},
	{
		prompt:"how long was the ride \n (a) 3,256.5 km \n (b) 2,615.25km \n (c) 4.213km",
		answer:"a",
	},
	{
		prompt:"What’s the longest motorbike ever built \n (a) 28.28 meters \n (b) 20.33 meters \n (c) 26.29 meters",
		answer:"c",
	},
	]
	var score = 0

	for(var i=0; i< questions.length; i++){
		var answer = window.prompt(questions[i].prompt);
		if(answer == questions[i].answer){
			score++;
		}
		
	}
	alert(score+"/"+questions.length);
}

		var question001 = ["Do you ever ride in the rain?"];
        var choices001 = ["<input onclick=correct001() name=button001 type=radio />no<br /><input onclick=incorrect001() name=button001 type=radio />Yes<br /><input onclick=incorrect001() name=button001 type=radio />Why not<br />"];
        
        var question002 = ["How fast was the first bike?"];
        var choices002 = ["<input onclick=incorrect002() name=button002 type=radio />32kph<br /><input onclick=correct002() name=button002 type=radio />40kph<br /><input onclick=incorrect002() name=button002 type=radio />45kph<br />"];

        var question003 = ["When you drive fast and you see a cop do you"];
        var choices003 = ["<input onclick=incorrect003() name=button003 type=radio />Run faster<br /><input onclick=incorrect003() name=button003 type=radio />High Five him<br /><input onclick=correct003() name=button003 type=radio />Slow down<br />"];
        
        var question004 = ["What was the name of the bike that runs with dust instead of gas"];
        var choices004 = ["<input onclick=incorrect004() name=button004 type=radio />Dowsty Bike<br /><input onclick=incorrect004() name=button004 type=radio />Kawasaki with Dust<br /><input onclick=correct004() name=button004 type=radio />Toilet Bike Neo<br />"];

        var question005 = ["How many wheels does a motorbike"];
        var choices005 = ["<input onclick=incorrect005() name=button005 type=radio />8<br /><input onclick=incorrect005() name=button005 type=radio />4<br /><input onclick=correct005() name=button005 type=radio />2<br />"];

        var question006 = ["how many motorbikes does it take to fill up a car spot"];
        var choices006 = ["<input onclick=incorrect006() name=button006 type=radio />2<br /><input onclick=incorrect006() name=button006 type=radio />4<br /><input onclick=correct006() name=button006 type=radio />8<br />"];

        var question007 = ["When was the first motorbike invented"];
        var choices007 = ["<input onclick=incorrect007() name=button007 type=radio />1935<br /><input onclick=incorrect007() name=button007 type=radio />1915<br /><input onclick=correct007() name=button007 type=radio />1885<br />"];

        var question008 = ["Who was the record for the longest ride with a motorbike"];
        var choices008 = ["<input onclick=incorrect008() name=button008 type=radio />Harley Davidson <br /><input onclick=incorrect008() name=button008 type=radio />Matthew McKelvey<br /><input onclick=correct008() name=button008 type=radio />Emilio Scotto<br />"];

        var question009 = ["how long was the ride"];
        var choices009 = ["<input onclick=incorrect009() name=button009 type=radio />2,615.25km<br /><input onclick=incorrect009() name=button009 type=radio />4.213km<br /><input onclick=correct009() name=button009 type=radio />3,256.5 km<br />"];

        var question010 = ["What’s the longest motorbike ever built"];
        var choices010 = ["<input onclick=incorrect010() name=button010 type=radio />28.28 meters<br /><input onclick=incorrect010() name=button010 type=radio />20.33 meters<br /><input onclick=correct010() name=button010 type=radio />26.29 meters<br />"];

        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
       	var g;
       	var h;
       	var i;
       	var j;
        var z;

        window.onload = function() {
            a = 0;
            message001.innerHTML = question001;
            options001.innerHTML = choices001;
            click001.innerHTML = "<button onclick=set002()>Submit</button>";
        }

        function correct001() {
            a = 1;
        }

        function incorrect001() {
            a = 0;
        }

        function set002() {
            b = 0;
            message001.innerHTML = question002;
            options001.innerHTML = choices002;
            click001.innerHTML = "<button onclick=set003()>Next</button>";
        }

        function correct002() {
            b = 1;
        }

        function incorrect002() {
            b = 0;
        }

        function set003() {
            c = 0;
            message001.innerHTML = question003;
            options001.innerHTML = choices003;
            click001.innerHTML = "<button onclick=set004()>Next</button>";
        }

        function correct003() {
            c = 1;
        }

        function incorrect003() {
            c = 0;
        }

        function set004() {
            d = 0;
            message001.innerHTML = question004;
            options001.innerHTML = choices004;
            click001.innerHTML = "<button onclick=set005()>Next</button>";
        }

        function correct004() {
            d = 1;
        }

        function incorrect004() {
            d = 0;
        }

        function set005() {
            e = 0;
            message001.innerHTML = question005;
            options001.innerHTML = choices005;
            click001.innerHTML = "<button onclick=set006()>Next</button>";
        }

        function correct005() {
            e = 1;
        }

        function incorrect005() {
            e = 0;
        }

        function set006() {
            f = 0;
            message001.innerHTML = question006;
            options001.innerHTML = choices006;
            click001.innerHTML = "<button onclick=set007()>Next</button>";
        }

        function correct006() {
            f = 1;
        }

        function incorrect006() {
            f = 0;
        }

        function set007() {
            g = 0;
            message001.innerHTML = question007;
            options001.innerHTML = choices007;
            click001.innerHTML = "<button onclick=set008()>Next</button>";
        }

        function correct007() {
            g = 1;
        }

        function incorrect007() {
            g = 0;
        }

        function set008() {
            h = 0;
            message001.innerHTML = question008;
            options001.innerHTML = choices008;
            click001.innerHTML = "<button onclick=set009()>Next</button>";
        }

        function correct008() {
            h = 1;
        }

        function incorrect008() {
            h = 0;
        }

        function set009() {
            i = 0;
            message001.innerHTML = question009;
            options001.innerHTML = choices009;
            click001.innerHTML = "<button onclick=set010()>Next</button>";
        }

        function correct009() {
            i = 1;
        }

        function incorrect009() {
            i = 0;
        }

        function set010() {
            j = 0;
            message001.innerHTML = question010;
            options001.innerHTML = choices010;
            click001.innerHTML = "<button onclick=result001()>Score</button>";
        }

        function correct010() {
            j = 1;
        }

        function incorrect010() {
            j = 0;
        }



        function result001() {
            z = a + b + c + d + e + f + g + h + i + j;
            message001.innerHTML = "End of Quiz";
            options001.innerHTML = "";
            comment001.innerHTML = "Your score is: " + z;
            click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
        }

        function repeat001() {
            location.reload();
        }