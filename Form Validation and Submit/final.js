function validatename()//validate user name
{
	var fname=document.getElementById("name").value;
	var re1=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(re1.test(fname))
	{
		document.getElementById("nameprompt").style.color="green";
		document.getElementById("nameprompt").innerHTML="<b>Valid</b>";
		return true;
	}
	else
	{
		document.getElementById("nameprompt").style.color="red";
		document.getElementById("nameprompt").innerHTML="<em>Enter charcter from 2-15</em>";
		return false;
	}
}
function validategender()//validate gender
{
	var gen=document.getElementById("gender").value;
	var re2=/^[MF]{1}$/;
	if(re2.test(gen))
	{
		document.getElementById("genderpompt").style.color="green";
		document.getElementById("genderpompt").innerHTML="<b>Valid</b>";
		return true;
	}
	else
	{
		document.getElementById("genderprompt").style.color="red";
		document.getElementById("genderprompt").innerHTML="<em>Enter M or F</em>";
		return false;
	}
}
function validatephonenumber()//validate phonenumber
{
	var phone=document.getElementById("phone").value;
	var re3=/^\d{3}-\d{3}-\d{4}$/;
	if(re3.test(phone))
	{
		document.getElementById("phoneprompt").style.color="green";
		document.getElementById("phoneprompt").innerHTML="<b>Valid</b>";
		return true;
	}
	else
	{
		document.getElementById("phoneprompt").style.color="red";
		document.getElementById("phoneprompt").innerHTML="<em>Enter number</em>";
		return false;
	}
}