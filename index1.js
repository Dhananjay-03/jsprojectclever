function age()
{
  var age=prompt("when you were born... my friend");
var date=new Date().getFullYear();
var ageindayss=(date-age)*365;
var x=document.getElementById('result').value=ageindayss;
var y=document.getElementById('hori').style.color=red;

//alert("your age in days is::"+ageindayss)

}
function generateCat(){
  var image=document.createElement('img')
  var div=document.getElementById('flex-containerid')
  image.src="https://picsum.photos/id/1/200/300";
  div.appendChild(image);
}
