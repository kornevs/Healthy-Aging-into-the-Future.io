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
		asaba_eng: { name: "Eric Asaba", position: "</br>Professor", affiliation: "University of Gothenburg", link: "https://www.gu.se/en/about/find-staff/ericasaba", email: "eric.asaba@gu.se", photo: "asaba"},
		bostrom_eng: { name: "Anne-Marie Boström", position: "</br>Associate professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anne-marie-bostrom#about-me", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
		lilienthal_eng: { name: "Anneliese Lilienthal", position: "</br>Doctoral Student", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/anneliese-lilienthal", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
		emami_eng: { name: "Azita Emami", position: "</br>Professor", affiliation: "Yale University", link: "https://nursing.yale.edu/faculty-research/faculty-directory/azita-emami-phd-msn-bsn-rnt-rn-faan", email: "ysn.dean@yale.edu", photo: "emami"},
		pour_eng: { name: "Mandana Fallah Pour", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/mandana-fallahpour#about-me", email: "mandana.fallahpour@ki.se", photo: "pour"},
		engstrom_eng: { name: "Gabriella Engström", position: "</br>", affiliation: "", link: "", email: "", photo: "engstrom"},
		guidetti_eng: { name: "Susanne Guidetti", position: "</br>Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/susanne-guidetti#about-me", email: "susanne.guidetti@ki.se", photo: "guidetti"},
		raghothama_eng: { name: "Jayanth Raghothama", position: "</br>Associate professor", affiliation: "KTH Royal Institute of Technology", link: "https://www.kth.se/profile/jayanthr?l=sen", email: "jayanthr@kth.se", photo: "raghothama"},
		darwich_eng: { name: "Adam Darwich", position: "</br>Associate professor", affiliation: "KTH Royal Institute of Technology", link: "https://www.kth.se/profile/darwich?l=en", email: "darwich@kth.se", photo: "darwich"},
		meijer_eng: { name: "Sebastiaan Meijer", position: "</br>Professor", affiliation: "KTH Royal Institute of Technology", link: "https://www.kth.se/profile/smeijer?l=en", email: "smeijer@kth.se", photo: "meijer"},
		kornevs_eng: { name: "Maksims Kornevs", position: "</br>Lecturer", affiliation: "KTH Royal Institute of Technology", link: "https://www.kth.se/profile/kornevs?l=en", email: "kornevs@kth.se", photo: "kornevs"},
		bergstrom_eng: { name: "Aileen Bergström", position: "</br>Assistant Senior Lecturer", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/aileen-bergstrom", email: "aileen.bergstrom@ki.se", photo: "bergstrom"},
		rydwik_eng: { name: "Elisabeth Rydwik", position: "</br>Associate professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/elisabeth-rydwik#about-me", email: "elisabeth.rydwik@ki.se", photo: "rydwik"},
		assander_eng: { name: "Susanne Assander", position: "</br>Lecturer", affiliation: "Uppsala University", link: "https://www.uu.se/en/contact-and-organisation/staff?query=N22-2740", email: "susanne.assander@uu.se", photo: "assander"},
		patomella_eng: { name: "Ann-Helen Patomella", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/ann-helen-patomella#about-me", email: "ann-helen.patomella@ki.se", photo: "patomella"},
		taloyan_eng: { name: "Marina Taloyan", position: "</br>Associate Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/marina-taloyan#about-me", email: "marina.taloyan@ki.se", photo: "taloyan"},
        englund_eng: { name: "Camilla Englund", position: "</br>Doctoral Student", affiliation: "Karolinska Institutet", link: "https://ki.se/en/people/camilla-englund", email: "camilla.englund@ki.se", photo: "englund"},

		
		asaba_swe: { name: "Eric Asaba", position: "</br>Professor", affiliation: "Göteborgs Universitet", link: "https://www.gu.se/om-universitetet/hitta-person/ericasaba", email: "eric.asaba@gu.se", photo: "asaba"}, 
		bostrom_swe: { name: "Anne-Marie Boström", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anne-marie-bostrom", email: "anne-marie.bostrom@ki.se", photo: "bostrom"},
		lilienthal_swe: { name: "Anneliese Lilienthal", position: "</br>Doktorand", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/anneliese-lilienthal#about-me", email: "anneliese.lilienthal@ki.se", photo: "lilienthal"},
		emami_swe: { name: "Azita Emami", position: "</br>Professor", affiliation: "Yale University", link: "https://nursing.yale.edu/faculty-research/faculty-directory/azita-emami-phd-msn-bsn-rnt-rn-faan", email: "ysn.dean@yale.edu", photo: "emami"},
		pour_swe: { name: "Mandana Fallah Pour", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/mandana-fallahpour", email: "mandana.fallahpour@ki.se", photo: "pour"},
		engstrom_swe: { name: "Gabriella Engström", position: "</br>", affiliation: "", link: "", email: "", photo: "engstrom"},
		guidetti_swe: { name: "Susanne Guidetti", position: "</br>Professor", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/susanne-guidetti#about-me", email: "susanne.guidetti@ki.se", photo: "guidetti"},
		raghothama_swe: { name: "Jayanth Raghothama", position: "</br>Universitetslektor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/jayanthr?l=sv", email: "jayanthr@kth.se", photo: "raghothama"},
		darwich_swe: { name: "Adam Darwich", position: "</br>Universitetslektor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/darwich?l=sv", email: "darwich@kth.se", photo: "darwich"},
		meijer_swe: { name: "Sebastiaan Meijer", position: "</br>Professor", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/smeijer?l=sv", email: "smeijer@kth.se", photo: "meijer"},
		kornevs_swe: { name: "Maksims Kornevs", position: "</br>Universitetsadjunkt", affiliation: "Kungliga Tekniska högskolan", link: "https://www.kth.se/profile/kornevs?l=sv", email: "kornevs@kth.se", photo: "kornevs"},
		bergstrom_swe: { name: "Aileen Bergström", position: "</br>Assisterande Lektor", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/aileen-bergstrom", email: "aileen.bergstrom@ki.se", photo: "bergstrom"},
		rydwik_swe: { name: "Elisabeth Rydwik", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/elisabeth-rydwik", email: "elisabeth.rydwik@ki.se", photo: "rydwik"},
		assander_swe: { name: "Susanne Assander", position: "</br>Universitetsadjunkt", affiliation: "Uppsala Universitet", link: "https://www.uu.se/kontakt-och-organisation/personal?query=N22-2740", email: "susanne.assander@uu.se", photo: "assander"},
		patomella_swe: { name: "Ann-Helen Patomella", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/ann-helen-patomella", email: "ann-helen.patomella@ki.se", photo: "patomella"},
		taloyan_swe: { name: "Marina Taloyan", position: "</br>Docent", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/marina-taloyan", email: "marina.taloyan@ki.se", photo: "taloyan"},	
        englund_swe: { name: "Camilla Englund", position: "</br>Doktorand", affiliation: "Karolinska Institutet", link: "https://ki.se/personer/camilla-englund", email: "camilla.englund@ki.se", photo: "englund"},
		
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
