<script language="JavaScript">

function InputParameter()
{
	if(document.getElementById("CalcBasis").value == "")
	{
	document.getElementById("reliab").innerHTML = "Make a selection above";
	}
       	else if(document.getElementById("CalcBasis").value == "Required Reliability for specific YEO")
	{
	document.getElementById("reliab").innerHTML = "Enter YEO reliability";
	}
 	else if(document.getElementById("CalcBasis").value == "YEO for given achievable reliability")
	{
	document.getElementById("reliab").innerHTML = "Enter average reliability";
	}
}

function Calculate()
{
    var Year1 = new Date(document.getElementById("Year").value);
    var yn = Year1.getFullYear();
    var mn = Year1.getMonth();
    var dn = Year1.getDate();
    var d1 = new Date(yn,0,1,12,0,0); // noon on Jan. 1
    var d2 = new Date(yn,mn,dn,12,0,0); // noon on input date
    var d3 = new Date(yn,11,31,12,0,0);// noon on last day of the year
    var ddiff = Math.round((d2-d1)/864e5).toString();
    var drem = Math.round((d3-d2)/864e5).toString();
    var dtotal= Math.round((d3-d1)/864e5).toString();
    var Curr_year = yn.toString();
var rel_ytd1 = new Number(
document.getElementById("rel_ytd").value).toString();
var rel1 = new Number(
document.getElementById("rel").value).toString();

// Set the result to reflect your calculation
if(document.getElementById("CalcBasis").value == "")
	{
	document.getElementById("Result").setAttribute(
"value", "Make a selection");
	}
else if(document.getElementById("CalcBasis").value == "Required Reliability for specific YEO")
	{
	document.getElementById("Result").setAttribute(
"value", (((rel1 * dtotal) - (rel_ytd1 * ddiff)) / drem).toFixed(2));
	}
else if(document.getElementById("CalcBasis").value == "YEO for given achievable reliability")
	{
	document.getElementById("Result").setAttribute(
"value", (((rel_ytd1 * ddiff) + (drem * rel1)) / dtotal).toFixed(2));
	}
}

</script>
