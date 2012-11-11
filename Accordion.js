var Accordion = function (options) {
	this.$el = $(options.someClass);
	
	this.closeAllButFirst();
	console.log(this.$myColor);
	if(options.coloring === 'red') {
		this.decorateRed();
	}
	if(options.coloring === 'blue') {
		this.decorateBlue();
	}

	this.bind(options.coloring);
};

Accordion.prototype.closeAllButFirst = function() {

	this.$el.find('.content').hide().first().show();
	

};
Accordion.prototype.decorateRed = function() {
	this.$el.find('.label').first().addClass('active');

};

Accordion.prototype.decorateBlue = function() {
	this.$el.find('.label').first().addClass('activeBlue');

};

Accordion.prototype.bind = function(colorz) {
	var that = this;

	this.$el.on('click', '.label', function() {

		var disp = $(this).next().css('display');
		if (disp === 'none') {

			//console.log(this, that);
			that.$el.find('.content').slideUp(300);
			$(this).next().slideDown(300);
			if(colorz === 'red') {
				that.$el.find('.label').removeClass('active');
				$(this).addClass('active');
			} else {
				that.$el.find('.label').removeClass('activeBlue');
				$(this).addClass('activeBlue');
			}
			
			
			
			
		}
		

	});

	
};