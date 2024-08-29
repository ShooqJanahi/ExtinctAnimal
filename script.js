/*Resolution 1920x1080
Shooq Janahi 202001753, Nada Alawadhi 202100024, Rabab Abbas 202203500*/        
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function DD_Function()
    {
        document.getElementById("myDropdown").classList.toggle("show");
    }

// Close the dropdown if the user clicks outside of it
window.onclick = function(e)
    {
        if (!e.target.matches('.dropbtn'))
            {
                var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show'))
                    {
                        myDropdown.classList.remove('show');
                    }
            }
     }
        
        
//Slideshow script  /  from https://www.w3schools.com  /
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n)
    {
        showSlides(slideIndex += n);
    }

function currentSlide(n)
    {
        showSlides(slideIndex = n);
    }

function showSlides(n)
    {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) 
            {
                slideIndex = 1
            }
        if (n < 1)
            {
                slideIndex = slides.length
            }
        for (i = 0; i < slides.length; i++)
            {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++)
            {
                dots[i].className = dots[i].className.replace(" active", "");
            }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }


showSlides2();
slideIndex = 0;
function showSlides2()
    {
        var x;
        var slides2 = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (x = 0; x < slides2.length; x++)
            {
                slides2[x].style.display = "none";
            }
        slideIndex++;
        if (slideIndex > slides2.length) 
            {
                slideIndex = 1
            }    
        for (x = 0; x < dots.length; x++) 
            {
                dots[x].className = dots[x].className.replace(" active", "");
            }
        slides2[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides2, 3000); // Change image every 2 seconds
    }
                
        
//Form script//
function InterestForm()
    {
        var FirstName= document.getElementById("fname").value;
        var LastName= document.getElementById("lname").value;
        var Email= document.getElementById("email").value;
        var at = document.getElementById("email").value.indexOf("@");
        var alphabet= /^[a-zA-Z]+$/;
        
        if(FirstName=="")
            {
                document.getElementById("Form_respond").innerHTML="Please enter first name!";
                return false;
            }
        else if(!FirstName.match(alphabet))
            {
                document.getElementById("Form_respond").innerHTML="First name must be a string with no spaces!";
                return false;
            }
        else if (FirstName.length > 10) 
            {
                document.getElementById("Form_respond").innerHTML="Your first name is to long!";
                return false;
            } 
        else if(LastName=="")
            {
                document.getElementById("Form_respond").innerHTML="Please enter last name!";
                return false;
            }
        else if(!LastName.match(alphabet))
            {
                document.getElementById("Form_respond").innerHTML="Last name must be a string with no spaces!";
                return false;
            }
        else if (LastName.length > 10) 
            {
                document.getElementById("Form_respond").innerHTML="Your last name is to long!";
                return false;
            } 
        else if(Email=="")
            {
                document.getElementById("Form_respond").innerHTML="Please enter e-mail!";
                return false;
            }
        else if (at == -1) 
            {
                document.getElementById("Form_respond").innerHTML="Not a valid e-mail!";
                return false;
            }
        else
            {
                document.getElementById("Form_respond").innerHTML="<span style='color: green'>Submit successfully</span>";
                sessionStorage.setItem("FName", FirstName);
                sessionStorage.setItem("LName", LastName);
                sessionStorage.setItem("Email", Email);
                return true;
            }
    }

//
function DisplayName()
{
    var firstname=sessionStorage.getItem("FName");
    var lastname=sessionStorage.getItem("LName");
    if(firstname != null && lastname != null)
        {
            var message= "<span style='float: right;'>" + firstname +"  "+ lastname + "</span>";
            document.getElementById("showname").innerHTML= message;
        }
}


























