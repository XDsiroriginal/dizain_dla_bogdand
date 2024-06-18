let wifi_conect = false;
let error_mesage;

let ip;
let ip_iput;
let ip_x = false;

let lampa_bool = false;
let lampa_element;

let titi_box_element;

function error_display () {
	if (wifi_conect == true) {
		error_mesage.style["animation-name"] = "off_eroor_dispaly";
	}
}

setInterval(error_display, 100);

function set_ip() {
	ip_iput = document.getElementById("input_id");
	if (ip_iput.value != "") {
		error_mesage = document.getElementById("error_mes");
		wifi_conect = true;
		ip = ip_iput.value;
		ip_iput.value = "";
		console.log(ip);
		ip_x = true;
	}
	else if (ip_x == true){
		alert("your ip " + ip);
	}
}

function lampa() {
	if(lampa_bool == false && ip_x == true) {
		lampa_element = document.getElementById("lampa_id");
		lampa_bool = true;
		lampa_element.style["background-image"] = 'url("lampa_on.png")';
	}
	else if (lampa_bool == true && ip_x == true) {
		lampa_element = document.getElementById("lampa_id");
		lampa_bool = false;
		lampa_element.style["background-image"] = 'url("lampa_off.png")';
	}
}

	function titi_on() {
		titi_box_element = document.getElementById("titi_pod_box");
		titi_box_element.style["display"] = "block";
		titi_box_element.style["animation-name"] = "titi_pod_box_on";
	}

function titi_off() {
	titi_box_element = document.getElementById("titi_pod_box");
	titi_box_element.style["animation-name"] = "titi_pod_box_off";
}