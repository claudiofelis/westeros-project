var APP = APP || {};

APP.City = {
	_City: "",
	setUp:function(){
		this.getCity()

	},
	getCity:function(){
		console.log(this)
		var cidade = window.location.href.split('=')[1]
		if (cidade == ""){
			window.location = "index.html"
		} else {
			console.log('teste',cidade)
			this._City = cidade
			this.getGPInfo()
		}
		
	},
	getGPInfo:function(){
		var cidade = this._City
		that =this
		// jeoquery.wikipediaSearch(function(data){
		// 	console.log(data)
		// 	$(data.geonames).each(function(key,data){

		// 		if(this.feature == 'city'){
		// 			that.recebeCityInfo(this)
		// 		}
				
		// 	})
		// }, cidade);
		jeoquery.search(function(data){
			console.log(data)
			city = data.geonames[0]
			that.getWikiInfo(city.lat,city.lng)
			that.recebeGeoInfo(city.population,city.adminName1,city.countryName)
			
		}, cidade)

	},
	getWikiInfo:function(lat,lng){
		that = this
		jeoquery.findNearbyWikipedia(function(data){
			that.recebeCityInfo(data.geonames[0])
		}, lat, lng);
	},
	recebeCityInfo:function(data){
		console.log(data)
		$('.result h1').text(data.title)
		$('p.desc').text(data.summary)
		$('.result-content').fadeIn('fast')
		$('img').attr('src',data.thumbnailImg)
	},
	recebeGeoInfo:function(pop,state,cou){
		$('.geo .pop span').text(pop)
		$('.geo .state span').text(state)
		$('.geo .country span').text(cou)
	}
}
