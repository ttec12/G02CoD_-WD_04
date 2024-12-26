

var allFilters = document.querySelectorAll('.portfolioBtns li.btn');
var allCards = document.querySelectorAll('.portfolioGallery .card');


for(var i = 0; i < allFilters.length; i++){
	allFilters[i].addEventListener('click', filterFunction);
}

function filterFunction(){
	
	var activeTab = document.querySelector('.portfolioBtns .active');
	
	activeTab.classList.remove('active');

	this.classList.add('active');

	
	var filter = this.getAttribute('data-filter');

	
	if(filter != 'all'){
		for(let i = 0; i < allCards.length; i++){
			allCards[i].classList.add('hide');
			var currentItem = allCards[i].getAttribute('data-item');
			if(currentItem == filter){
				allCards[i].classList.add('active');
				allCards[i].classList.remove('hide');
			}
		}
	}
	
	else{
		for(let i = 0; i < allCards.length; i++){
			allCards[i].classList.remove('hide');
			allCards[i].classList.add('active');
		}
	}
}


for(let i = 0; i < allCards.length; i++){
	allCards[i].addEventListener('click', popupFunction);
}

function popupFunction(){
	document.querySelector('.portfolioPopupBox').
	style.display = 'block';
	document.querySelector('.portfolioPopupBox img').
	src = this.querySelector('.imgBox img').getAttribute('src');
}


document.querySelector('.portfolioPopupBox span').
addEventListener('click', function(){
	document.querySelector('.portfolioPopupBox').style.display = 'none';
});




