//constant terminology


var projectA_swe = "ACTIVE@HOME";
var projectA_eng = "ACTIVE@HOME";
var projectB_swe = "ASSIST 2.0";
var projectB_eng = "ASSIST 2.0";
var projectC_swe = "Intervention med vårdpartner";
var projectC_eng = "The care partner intervention";
var projectD_swe = "Projektöverskridande samskapande";
var projectD_eng = "All things co";
var projectE_swe = "Ett systemmodellerings angrepp";
var projectE_eng = "A systems modelling approach";



var people = { 
asaba_eng: { name: "Eric Asaba", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/eric-asaba", email: "eric.asaba@ki.se", photo: "asaba"},
bostrom_eng: { name: "Anne-Marie Boström", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anne-marie-bostrom#about-me", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
lilienthal_eng: { name: "Anneliese Lilienthal", position: "</br>Doctoral Student", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anneliese-lilienthal", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
emami_eng: { name: "Azita Emami", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/azita-emami#about-me", email: "azita.emami@ki.se", photo: "emami"},
pour_eng: { name: "Mandana Fallah Pour", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/mandana-fallahpour", email: "mandana.fallahpour@ki.se", photo: "pour"},
engstrom_eng: { name: "Gabriella Engström", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "", email: "", photo: "engstrom"},



asaba_swe: { name: "Eric Asaba", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/eric-asaba#about-me", email: "eric.asaba@ki.se", photo: "asaba"}, 
bostrom_swe: { name: "Anne-Marie Boström", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anne-marie-bostrom", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
lilienthal_swe: { name: "Anneliese Lilienthal", position: "</br>Doktorand", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anneliese-lilienthal#about-me", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
emami_swe: { name: "Azita Emami", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/azita-emami#about-me", email: "azita.emami@ki.se", photo: "emami"},
pour_swe: { name: "Mandana Fallah Pour", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/mandana-fallahpour", email: "mandana.fallahpour@ki.se", photo: "pour"},
engstrom_swe: { name: "Gabriella Engström", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "", email: "", photo: "engstrom"},
guidetti_swe: { name: "Susanne Guidetti", position: "</br>Professor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/susanne-guidetti#about-me", email: "susanne.guidetti@ki.se", photo: "guidetti"},
raghothama_swe: { name: "Jayanth Raghothama", position: "</br>Universitetslektor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/jayanthr?l=sv", email: "jayanthr@kth.se", photo: "raghothama"},
darwich_swe: { name: "Adam Darwich", position: "</br>Universitetslektor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/darwich?l=sv", email: "darwich@kth.se", photo: "darwich"},
meijer_swe: { name: "Sebastiaan Meijer", position: "</br>Professor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/smeijer?l=sv", email: "smeijer@kth.se", photo: "meijer"},
kornevs_swe: { name: "Maksims Kornevs", position: "</br>Universitetsadjunkt", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/kornevs?l=sv", email: "kornevs@kth.se", photo: "kornevs"},
bergstrom_swe: { name: "Aileen Bergström", position: "</br>", affiliation: "Karolinska Institutet", link: "", email: "", photo: "bergstrom"},
rydwik_swe: { name: "Elisabeth Rydwik", position: "</br>", affiliation: "Karolinska Institutet", link: "", email: "", photo: "rydwik"},
assander_swe: { name: "Susanne Assander", position: "</br>", affiliation: "Karolinska Institutet", link: "", email: "", photo: "assander"},
patomella_swe: { name: "Ann-Helen Patomella", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "", email: "", photo: "patomella"},
taloyan_swe: { name: "Marina Taloyan", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "", email: "", photo: "taloyan"},	
	
	empty: { name: "", position: "</br>", affiliation: "", link: "", email: "", photo: ""}
}


function person(name,leader, level) {
	var levelstr = "";
	switch (level) {
		  case 0: levelstr = "";break;
		  case 1: levelstr = "../";break;
		  case 2: levelstr = "../../";break;
		  case 3: levelstr = "../../../";break;		  
		}
		
	str="<div class=\"item\"><div class=\"card-doctor\"><div class=\"header\"><img src=\"" + levelstr + "assets/img/team/" + people[name]['photo'] + ".jpg\" alt=\"\"><div class=\"meta\"><a href=\"" + people[name]['link'] + "\"><span class=\"mai-person\"></span></a><a href=\"mailto:" + people[name]['email'] + "\"><span class=\"mai-mail\"></span></a></div></div><div class=\"body\"><p class=\"text-xl mb-0\">" + people[name]['name'] + "</p><span class=\"text-sm text-grey\">" + leader + people[name]['position'] + "</br>" + people[name]['affiliation'] + "</span></div></div></div>";
	return (str);
}



function person_k(name, level) {
	var levelstr = "";
	switch (level) {
		  case 0: levelstr = "";break;
		  case 1: levelstr = "../";break;
		  case 2: levelstr = "../../";break;
		  case 3: levelstr = "../../../";break;		  
		}
		
	str="<div class=\"col-md-6 col-lg-4 py-3 wow zoomIn\"><div class=\"card-doctor\"><div class=\"header\"><img src=\"" + levelstr + "assets/img/team/" + people[name]['photo'] + ".jpg\" alt=\"\"><div class=\"meta\"><a href=\"" + people[name]['link'] + "\"><span class=\"mai-person\"></span></a><a href=\"mailto:" + people[name]['email'] + "\"><span class=\"mai-mail\"></span></a></div></div><div class=\"body\"><p class=\"text-xl mb-0\">" + people[name]['name'] + "</p><span class=\"text-sm text-grey\">" + people[name]['position'] + "</br>" + people[name]['affiliation'] + "</span></div></div></div>";
return (str);
}
