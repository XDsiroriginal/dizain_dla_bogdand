let wifi_conect = false;
let error_mesage = document.getElementById("error_mes");

function error_display () {
	if (wifi_conect == true) {
		setInterval(error_display_animation, 200);
	}
}

function error_display_animation() {
	let coordinate = 0;
	error_mesage.
}