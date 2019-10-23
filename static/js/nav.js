


let nav_team_transition = function(){
	$(transition_title).text("Nuestro Equipo");
	$(team2).hide();
	$(transition).show();
	setTimeout(function() {
		$(team2).show();
		$(transition).hide();
		$(logo_header).show();
	}, tiemOut_transition);
	setTimeout(function(){
		$(home).hide();
		$(services).hide();
		$(gallery).hide();
		$(customers).hide();
	}, tiemOut);
};
let nav_services_transition = function(){
	$(transition_title).text("Servicios");
	$(logo_header).hide();
	$(services).hide();
	$(transition).show();
	setTimeout(function() {
		$(services).show();
		$(transition).hide();
		$(logo_header).show();
	}, tiemOut_transition);
	setTimeout(function(){
		$(home).hide();
		$(team2).hide();
		$(gallery).hide();
		$(customers).hide();
	}, tiemOut);
};
let nav_portfolio_transition = function(){
	$(transition_title).text("Galería");
	$(logo_header).hide();
	$(gallery).hide();
	$(transition).show();
	setTimeout(function() {
		$(gallery).show();
		$(transition).hide();
		$(logo_header).show();
	}, tiemOut_transition);
	setTimeout(function(){
		$(home).hide();
		$(team2).hide();
		$(services).hide();
		$(customers).hide();
	}, tiemOut);
};
let nav_customers_transtion = function(){
	$(transition_title).text("Nuestros Clientes");
	$(logo_header).hide();
	$(customers).hide();
	$(transition).show();
	setTimeout(function() {
		$(customers).show();
		$(transition).hide();
		$(logo_header).show();
	}, tiemOut_transition);
	setTimeout(function(){
		$(home).hide();
		$(team2).hide();
		$(services).hide();
		$(gallery).hide();
	}, tiemOut);
};

$(nav_home).click(nav_home_transition)
$(nav_team).click(nav_team_transition)
$(nav_services).click(nav_services_transition)
$(nav_portfolio).click(nav_portfolio_transition)
$(nav_customers).click(nav_customers_transtion)