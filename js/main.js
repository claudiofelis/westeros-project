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
		jeoquery.wikipediaSearch(function(data){
			console.log(data)
			$(data.geonames).each(function(key,data){

				if(this.feature == 'city'){
					that.recebeCityInfo(this)
				}
				
			})
		}, cidade);
		jeoquery.search(function(data){
			console.log(data)
			
		}, cidade)

	},
	recebeCityInfo:function(data){
		console.log(data)
		$('.result h1').text(data.title)
		$('p.desc').text(data.summary)
		$('img').attr('src',data.thumbnailImg)
	}
}
