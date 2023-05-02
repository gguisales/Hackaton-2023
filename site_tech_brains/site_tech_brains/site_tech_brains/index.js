function MenuShow() {
	let menuMobile = document.querrySelector('.mobile-menu');
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
		document.querrySelector('.icon').src = "";
	}else{
		menuMobile.classList.add('open');
		document.querrySelector('.icon').src = "";	
	}
}