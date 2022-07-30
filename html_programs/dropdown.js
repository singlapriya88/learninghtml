function myfunction()
{
	document.getElementById("mydropdown").classList.toggle("show");
	
}

function filterfunction()
{
	var input,filter,a,i;
	input=document.getElementById("myinput");
	filter=input.value.toUpperCase();
	div=document.getElementById("mydropdown");
	a=div.getElementsByTagName("a");
	for(i=0;i<a.length;i++)
	{
		txtValue=a[i].textContent || a[i].innerText;
	if(txtValue.toUpperCase().indexOf(filter) > -1)
	{
		a[i].style.display = "";
	}
	else
	{
		a[i].style.display = "none";
	}
	}
}