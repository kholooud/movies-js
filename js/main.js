const row = document.getElementById('rowID'),
      nowPlaying =document.getElementById('now-playing'),
      popular =document.getElementById('popular'),
      topRated =document.getElementById('top-rated'),
      upcoming =document.getElementById('upcoming');

async function getMovies(category){
    
    var response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    var finalResult = await response.json();
    const results = finalResult.results;
    console.log(results); 
    let display= () =>{
        for(var i=0; i<results.length;i++){  
            row.innerHTML+=`<div class="col-md-4 col-lg-4 py-3 m-auto">
                                <div class="img-card">
                                    <img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" alt="Avatar" class="image">
                                    <div class="overlay">
                                        <div class="text">
                                            <h2 id="title">${results[i].original_title}</h2>
                                            <p class="small" id="description">${results[i].overview}</p>
                                            <p id="rate">${results[i].vote_average}</p>
                                            <p id="date">${results[i].release_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
        }
    }

    display();
}
(async function(){
    nowPlaying.addEventListener( 'click', await getMovies('now_playing'));
    popular.addEventListener('click', await getMovies('popular'));
    topRated.addEventListener('click', await getMovies('top_rated'));
    upcoming.addEventListener('click', await getMovies('upcoming'));
    
})();




var nvWidth = 0,
    isTrue = !0;
$(".strip-toggel-menu").click(function() {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".strip-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1100), $(".nav-tab-menu .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1200), $(".nav-tab-menu .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1300), $(".nav-tab-menu .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1400), $(".nav-tab-menu .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1500), $(".nav-tab-menu .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".strip-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 500), isTrue = !isTrue)
});

let userName =document.getElementById("name"),
     userEmail=document.getElementById("email"),
     userPhone=document.getElementById("phone"),
     userAge=document.getElementById("age"),
     userPassword=document.getElementById("password"),
     userRepassword=document.getElementById("rePassword"),
     userNameAlert=document.getElementById("namealert"),
     userEmailAlert=document.getElementById("emailalert"),
     userPhoneAlert=document.getElementById("phonealert"),
     userAgeAlert=document.getElementById("agealert"),
     userPassAlert=document.getElementById("passwordalert"),
     RepasswordAlert=document.getElementById("repasswordalert");

let NameValidation = () =>{
   var regex= /[a-z]/;
   if(regex.test(userName.value)==true){
    userNameAlert.classList.add('d-none');
   }else{
    userNameAlert.classList.remove('d-none');
   }
}
let EmailValidation = () =>{
    var regex= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regex.test(userEmail.value)==true){
        userEmailAlert.classList.add('d-none');
    }else{
        userEmailAlert.classList.remove('d-none');
    }
 }
 
 let PhoneValidation = () =>{
    var regex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regex.test(userPhone.value)==true){
        userPhoneAlert.classList.add('d-none');
    }else{
        userPhoneAlert.classList.remove('d-none');
    }
 }
 let ageValidation = () =>{
    var regex= /^[1-9][0-9]?$|^100$/;
    if(regex.test(userAge.value)==true){
        userAgeAlert.classList.add('d-none');
    }else{
        userAgeAlert.classList.remove('d-none');
    }
 }
 let PassValidation = () =>{
    var regex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(userPassword.value)==true){
        userPassAlert.classList.add('d-none');
    }else{
        userPassAlert.classList.remove('d-none');
    }
 }
 let RePasswordValidation = () =>{
    if(userPassword.value == userRepassword.value){
        RepasswordAlert.classList.add('d-none');
    }else{
        RepasswordAlert.classList.remove('d-none');
    }
 }