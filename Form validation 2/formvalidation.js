function validatefirstname()
{
	var fname=document.getElementById("firstname").value;
	var re1=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(re1.test(fname))
	{
		document.getElementById("firstnameprompt").style.color="green";
		document.getElementById("firstnameprompt").innerHTML="<b>Valid</b>";
		return true;
	}
	else
	{
		document.getElementById("firstnameprompt").style.color="red";
		document.getElementById("firstnameprompt").innerHTML="<em>Enter charcter from 2-15</em>";
		return false;
	}
}
function validatelastname()
{
	var lname=document.getElementById("lastname").value;
	var re2=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(re2.test(lname))
	{
		document.getElementById("lastnameprompt").style.color="green";
		document.getElementById("lastnameprompt").innerHTML="<b>Valid</b>";
		return true;
	}
	else
	{
		document.getElementById("lastnameprompt").style.color="red";
		document.getElementById("lastnameprompt").innerHTML="<em>Enter charcter from 2-15</em>";
		return false;
	}
}
function validatephonenumber()
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
function calcorder()
{
	var firstname=document.getElementById("firstname").value;
	var lastname=document.getElementById("lastname").value;
	var username=firstname+" "+lastname;
	var phone1=document.getElementById("phone").value;
	var quantity=document.getElementById("quantity").value;
	var price=document.getElementById("price").value;
	document.getElementById("orderconfirm").innerHTML="<h2>Order Summary</h2>";
	document.getElementById("orderconfirm").innerHTML+="<p>"+username.toUpperCase()+"<br>"+phone1+"</p>";
	document.getElementById("orderconfirm").innerHTML+="<p>Order Total: $"+price*quantity+"</p>";
}