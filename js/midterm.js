var cruis1Description = "BAHAMAS CRUIES	 You know the name, the laid-back attitude and where to find them, but you’ll just have to visit The Bahamas to truly appreciate this classic cruise destination. On this 700-strong string of sun-splashed islands dotting the blue Atlantic, the living’s easy. (And it’s not bad on a Bahamas cruise either!) The central port of Nassau is the bustling capital of the country — “bustling” is a relative term, of course — while Freeport is all chill, all the time. And nothing is as delightfully desolate as Half Moon Cay and Princess Cays: pure private-destination paradise. Enjoy sailing, snorkeling, strolling pearly pink-sand beaches, and swimming through crystalline turquoise seas. Make Christopher Columbus’ first stop your destination on a Bahamas cruise.";
var cruise1Ship ="MAJESTY OF SEA  Its hard to miss Harmony of the Seas standout feature a pair of purple slides cascading down the back of the ship but the Ultimate Abyss isn’t this Royal Caribbean ship’s only claim to fame. Harmony provides an Oasis-class experience, as well as a taste of the line Quantum class, with robotic bartenders at the Bionic Bar and a family-style dinner at Jamie’s Italian.";
var cruise2Description ="MEXICO TO LA CRUIES  Travel to the Mexican Riviera in style on our award winning ships! Voted best onboard entertainment, Best Specialty Restaurants, and Best Casinos, you know you’re in for an exciting cruise. Whats more? Norwegian is one of the youngest and most modern fleets in the Mexican Riviera! Sit back, relax, and let Norwegian take you to some of the most beautiful destinations on board Norwegian Joy, Norwegian Bliss, Norwegian Star, and Norwegian Gem.";
var cruise2Ship = "CARNIVAL INSPIRATION  Carnival Vista epitomizes the line’s ’Fun Ship’ moniker. It offers the most variety of restaurants, bars, entertainment and outdoor fun of any Carnival ship. There’s even an exclusive Havana area with a pool, hot tubs and bar available during the day to those staying in Cabana cabins.";
var cruise3Description = "EASTERN CARRIBBEAN   Leave your troubles behind and get on island time with a journey to the Eastern Caribbean. Hike through dense jungle and pass by thunderous waterfalls in Puerto Rico El Yunque National Forest.";
var cruise3Ship = "DISNEY SHIP  The first ship in Norwegian’s massive Breakaway Plus class, Norwegian Escape is an ideal choice for people who want high-quality entertainment and variety. The 4,200-passenger ship features two Broadway-style shows, 28 bars and restaurants and a handful of recreational activities -- including one of the scariest water slides at sea.";

function Cruise(cruiseDate,cruiseDestination,cruiseDescription,cruiseURL,shipName,shipDescription,shipURL,price){
			this.cruiseDate = cruiseDate;
			this.cruiseDestination = cruiseDestination;
			this.cruiseDescription = cruiseDescription;
			this.cruiseURL = cruiseURL;
			this.shipName = shipName;
			this.shipDescription = shipDescription;
			this.shipURL = shipURL;
			this.price = price;
			
		}

	
	var cruise1 = new Cruise('16 Mar 2018','3 Night Bahamas Cruise',cruis1Description,'https://www.ncl.com/cruise-destinations/bahamas-florida-cruises','Majesty of seas',cruise1Ship,'https://www.cruisecritic.com/ports/area.cfm?area=6&section=ports',169);
	var cruise2 = new Cruise('5 April 2018','3 Day Baja Mexico from Los Angeles CA',cruise2Description,'https://www.carnival.com/','Carnival Inspiration',cruise2Ship,'https://www.princess.com/learn/cruise-destinations/mexico-cruises/',259);
	var cruise3 = new Cruise('3 May 2018','70Night Eastern Carribbean',cruise3Description,'https://disneycruise.disney.go.com/','Disney Fantasy',cruise3Ship,'https://disneycruise.disney.go.com/ships/',1715);
	var arrayOfCruies = [cruise1,cruise2,cruise3];

function displayList(cruies){
       
        document.write('<body style="background-image:url(images/ship.jpg);background-repeat:no-repeat;background-size:cover">');
        document.write("<br><br><br>");
        document.write("<h1 align='center'>Display Cruises</h1><br><br>")
      	document.write("<div align='center'><table border= '2'>");
		document.write("<tr>");
		document.write("<th>Departs</th>");
		document.write("<th>Destination</th>");
		document.write("<th>Ship</th>");
		document.write("<th>Price from</th>");
		document.write("</tr>");
        for(var i= 0; i<cruies.length;i++){
            document.write("<tr>");
            document.write("<td>");
     		document.write(cruies[i].cruiseDate);
            document.write("</td>"); 
            document.write("<td>");          
            document.write("<a href='javascript:loadDesc(\""+ cruies[i].cruiseDescription + "\", \"" + cruies[i].cruiseURL+"\");'>"+ cruies[i].cruiseDestination +"</a>");
            document.write("</td>");  
            document.write("<td>");       	
            document.write("<a href='javascript:loadDesc(\""+ cruies[i].shipDescription + "\", \"" + cruies[i].shipURL+"\");'>"+ cruies[i].shipName +"</a>");
            document.write("</td>");
            document.write("<td>");       	
            document.write("$"+cruies[i].price);
            document.write("</td>");
	        document.write("</tr>");
        }
        document.write("</table></div>")
        document.write("</body>");
        
        myWin.document.close();
}   

function loadDesc(description, url) {
	myWin.focus();
	myWin.document.write("<p>\" " +description+ "\" <a href='javascript:popUpWindow(\"" + url+"\")'>Click Here for more Info</a></p>");
}     

