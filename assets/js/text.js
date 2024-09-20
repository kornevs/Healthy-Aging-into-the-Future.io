//constant terminology


var projectA_swe = "ACTIVE@HOME";
var projectA_eng = "ACTIVE@HOME";
var projectB_swe = "ASSIST 2.0";
var projectB_eng = "ASSIST 2.0";
var projectC_swe = "Intervention med vårdpartner";
var projectC_eng = "Project C: The care partner intervention";
var projectD_swe = "Projektöverskridande samskapande";
var projectD_eng = "All things co";
var projectE_swe = "Ett systemmodellerings angrepp";
var projectE_eng = "Project E";


var people = { 
    asaba_eng: { name: "Eric Asaba", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/eric-asaba", email: "eric.asaba@ki.se", photo: "asaba"}, 
    asaba_swe: { name: "Eric Asaba", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/eric-asaba#about-me", email: "eric.asaba@ki.se", photo: "asaba"}, 
    bostrom_eng: { name: "Anne-Marie Boström", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anne-marie-bostrom#about-me", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
	bostrom_swe: { name: "Anne-Marie Boström", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anne-marie-bostrom", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
	lilienthal_eng: { name: "Anneliese Lilienthal", position: "</br>Doctoral Student", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anneliese-lilienthal", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
	lilienthal_swe: { name: "Anneliese Lilienthal", position: "</br>Doktorand", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anneliese-lilienthal#about-me", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
	emami_swe: { name: "Azita Emami", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/azita-emami#about-me", email: "azita.emami@ki.se", photo: "emami"},
	pour_swe: { name: "Mandana Fallah Pour", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/mandana-fallahpour", email: "mandana.fallahpour@ki.se", photo: "pour"},
	engstrom_swe: { name: "Gabriella Engström", position: "</br>Lektor & Docent", affiliation: "Karolinska Institutet", link: "", email: "", photo: "engstrom"},
	
	
	
	
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



