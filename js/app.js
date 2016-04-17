$( document ).ready(function() {
    
	$(".button-cover").click(goTohome);
	$(".button-promo").click(goTopromo);
	$(".button-locate").click(goTolocate);


window.sr = ScrollReveal();
sr.reveal('.left-01',
	{duration:2500, origin:'left', distance:'500px',delay:'500',reset:true},50);
sr.reveal('.right-01',
	{duration:2500, origin:'right', distance:'500px',delay:'900',reset:true},50);
sr.reveal('.top-01',
	{duration:2500, origin:'top', distance:'500px', delay:'800',reset:true},50);
sr.reveal('.bottom-01',
	{duration:2500, origin:'bottom', distance:'500px',delay:'800',reset:true},50);
sr.reveal('.logo_text',
	{duration:4000, delay:'800',reset:true});
sr.reveal('.boink1',
	{duration:500, origin:'top',distance:'500px',delay:'3000',reset:true});
sr.reveal('.boink2',
	{duration:500, origin:'top',distance:'500px',delay:'3500',reset:true});

sr.reveal('.bottom-02',
	{duration:2500, origin:'bottom', distance:'500px', delay:'800'},300);
sr.reveal('.top-02',
	{duration:2500, origin:'top', distance:'500px', delay:'800'},300);
sr.reveal('.left-02',
	{duration:2500, origin:'left', distance:'500px',delay:'500'},300);
sr.reveal('.right-02',
	{duration:2500, origin:'right', distance:'500px',delay:'900'},300);
sr.reveal('.boink3',
	{duration:2000,distance:'30px',delay:'3000'});
sr.reveal('.boink4',
	{duration:3000,origin:'top', distance:'50px',delay:'4500'});



});

function goTohome (event){
	event.preventDefault();
	var goTopposition = $(".home").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goTopromo (event){
	event.preventDefault();
	var goTopposition = $(".promo").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goTolocate (event){
	event.preventDefault();
	var goTopposition = $(".locate").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}


