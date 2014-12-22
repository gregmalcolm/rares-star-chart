var graphHeader = [['ID', 'X', 'Y', 'System', 'Z']];
var graphShortDistances =
  [
    ['39 Tauri (-20)', -7, -51, '39 Tauri Chimes', -20],
    ['Aerial (-103)', 100, 8, 'Aerial Edan Apples', -103],
    ['Altair (-3)', -12, 11, 'Altairian Skin', -3],
    ['Arouca (-7)', 105, -4, 'Arouca Conventula Sweets', -7],
    ['Alacarakmo (169)',  -32, -50, 'Alacarakmo Skin Art', 169],
    ['Any Na (-2)', 125, 14, 'Any Na Coffee', -2],
    ['Bast (16)', -37, -36, 'Bast Snake Gin', 16],
    ['Belalans (-95)', 79, -59, 'Belalans Ray Leather', -95],
    ['Aegaeon (23)', 47, -60, 'Aegaeon, Chateau De', 23],
    ['Chi Eridani (-52)', 26, 4, 'Chi Eridani Marine Paste', -52],
    ['Damna (4)', -41, -122, 'Damna Carapaces', 4],
    ['Delta Phoenicis (-131)', 54, 15, 'Delta Phoenicis Palms', -131],
    ['Eleu (32)', -30, 105, 'Eleu Thermals', 32],
    ['Eranin (36)', -23, 1, 'Eranin Pearl Whisky', 36],
    ['Eshu (-248)', 121, -16, 'Eshu Umbrellas', -248],
    ['Esuseku (29)', -108, -21, 'Esuseku Cavier', 29],
    ['Ethgreze (72)', -30, -24, 'Ethgreze Tea Buds', 72],
    ['Goman (-174)', 152, 25, 'Goman Yaupon Coffee', -174],
    ['Heike (71)', -77, 69, 'Heike: Ceremonial Heike Tea', 71],
    ['Helvetitj (80)', -23, 62, 'Helvetitj Pearls', 80],
    ['HR 7221 (-56)', 58, 91, 'HR 7221 Wheat', -56],
    ['Kamitra (-184)', 5, 64, 'Kamitra Cigars', -184],
    ['Karetii (44)', -125, 78, 'Karetii Couture', 44],
    ['Kongga (82)', -144, -32, 'Kongga Ale', 82],
    ['Lave (48)', 76, 71, 'Lavian Brandy', 48],
    ['Momus Reach (-45)', -35, -77,'Momus Bog Spaniel', -45],
    ['Hecate (-26)', -56, -44, 'Hecate Live Hecate Sea Worms', -26],
    ['Rapa Bao (-168)', 94, -23, 'Rapa Bao Snake Skins', -168],
    ['Rusani (57)', -65, -83, 'Rusani Old Smokey', 57],
    ['Tanmark (-78)', 2, -30, 'Tanmark Tranquil Tea', -78],
    ['Tarach Tor (-81)', -7, -20, 'Tarach Tor Spice', -81],
    ['Thrutis (8)', -91, -80, 'Thrutis Cream', 8],
    ['Toxandji (-13)', 165, 61, 'Toxandji Virocide', -13],
    ['Shinrarta Dezhra (permit)(17)', 56, 27, 'Shinrarta Dezhra: Waters of Shintara', 17],
    ['Xihe (-36)', -20, 34, 'Xihe Biomorphic Companions', -36],
    ['Yaso Kondi (-176)', 5, -1, 'Yaso Kondi Leaf', -176],
    ['Coquim (-82)', 21, 34, 'Coquim Spongiform Victuals', -82],
    ['CD-75 661 (-21)', 68, 51, 'CD-75 Kitten Brand Coffee', -21],
    ['HIP 10175 (-93)', -46, -84, 'HIP 10175 Bush Meat', -93],
    ['Epsilon Indi (-9)', 3, 7, 'Epsilon Indi Bourbon', -9],
    ['Fujin (-30)', -6, -59, 'Fujin Tea', -30],
    ['George Pantazis (-16)', -12, -14, 'George Pantaa Prayer Sticks', -16],
    ['Kachirigin (-73)', -106, 28, 'Kachirigin', -73],
    ['Kamorin (-82)', -124, 45, 'Kamorin Historic Weapons', -82],
    ['Kappa Fornacis (-67)', 12, -23, 'Kappa Fornacis Onionhead', -67],
    ['Neritus (3)', 75, -31, 'Neritus Berries', 3],
    ['Nguna (-103)', -123, -23, 'Nguna Modern Antiques', -103],
    ['Quechua (-112)', 52, -41, 'Quechua Albino Quechua Mammoth Meat', -112],
    ['Tiolce (-35)', 10, 25, 'Tiolce Waste 2 Paste', -35],
    ['Uszaa (49)', 69, 75, 'Uszaa', 49],
    ['Utgaroar (-103)', 0, -6, 'Utgaroar Millennial Eggs', -103],
    ['Wolf 1301 (-35)', -15, -79, 'Wolf Fesh', -35],
    ['Witchhaul (-52)', -13, -66, 'Witchhaul Kobe Beef ', -52],
    ['Wuthielo Ku (-190)', 68, 12, 'Wuthielo Ku Froth', -190],
    ['Zeessze (-3)', -20, -14, 'Zeessze Ant Grub Glue', -3],
    ['Jaroua (-111)', 157, 28, 'Jaroua Rice', -111],
    ['Leesti (49)', 73, 68, 'Leesti Evil Juice/Blue Milk', 59],
    ['Orrere (49)', 69, 77, 'Orrerian Vicious Brew', 49],
    ['Vanayequi (-12)', -88, 99, 'Vanayequi Ceratomorpha Fur', -12],
    ['Zaonce (49)', 81, 69, 'Zaonce Alien Eggs', 49],
    ['AZ Cancri (27)', 20, -38, 'Az Cancri Formula 42', 27],
    ['Baltah\'Sine (-56)', 85, 40, 'Baltha\'sine Vacuum Krill', -56],
    ['Karsuki Ti (-164)', 134, 71, 'Karsuki Locusts', -164],
    ['Ochoeng (-2)', -139, -7, 'Ochoeng Chillies', -2],
    ['Vega (permit) (8)', -22, 9, 'Vega Slimweed', 8],
  ];

var graphLongDistances =
  [
    ['Alpha Centuri (0)', 3, 3, 'Alpha Centauri Mega Gin', 0],
    ['Alya (-57)', 77, 31, 'Alya Body Soup', -57],
    ['Anduliga (2.5)', 125, 61, 'Anduliga Fire Works', 2.5],
    ['Banki (16)', 50, -92, 'Banki Amphibious Leather', 16],
    ['Cherbones (85)', 5, -17, 'Cherbones Blood Crystals', 85],
    ['Dea Motrona (62)', -12, 30, 'Dea Motrona Experience Jelly', 62],
    ['Geras (-13)', -7, -56, 'Gerasian Gueuze Beer', -13],
    ['Haiden (-13)', -142, -43, 'Haiden Black Brew', -13],
    ['Havasupai (-77)', -89, -40, 'Havasupai Dream Catcher', -77],
    ['HIP 41181 (75)', -8, -105, 'HIP Proto-Squid', 75],
    ['Holva (-171)', 59, 91, 'Holva Duelling Blades', -171],
    ['Jaradharre (21)', 40, 57, 'Jaradharre Puzzle Box', 21],
    ['Korro Kung (53)', 81, 31, 'Korro Kung', 53],
    ['LFT 1421 (19)', -45, 13, 'LFT 1421 Void Extract Coffee', 19],
    ['Mechucos (40)', 67, -70, 'Mechucos High Tea', 40],
    ['Medb (5)', 13, 39, 'Medb starlube', 5],
    ['Mokojing (58)', 73, 0, 'Mokojing Beast Feast', 58],
    ['Mukusubii (-64)', -147, 46, 'Mukusubii Chitin-os', -64],
    ['Mulachi (-6)', 6, 36, 'Mulachi Giant Fungus', -6],
    ['Ngadandari (-74)', 63, 109, 'Ngadandari Fire Opals', -74],
    ['Njangari (-205)', 9, 64, 'Njangari Saddles', -205],
    ['Uzumoku (10)', -95, -74, 'Uzumoku Low-G Wings', 10],
    ['Vidavanta (90)', -51, 66, 'Vidavantian Lace', 90],
    ['Wheemete (-140)', 145, 132, 'Wheemete Wheat Cakes', -140],
  ];

var drawStarChart = function() {
  var distances = graphShortDistances.slice(0);
  if ($("#long-trip").is(':checked')) {
    distances = distances.concat(graphLongDistances);
  }
  distances = distances.sort();
  var dataArray = graphHeader.concat(distances);
  var data = google.visualization.arrayToDataTable(dataArray);
  var options = {
    bubble: {textStyle: {fontSize: 11, fontName: 'Verdana'} },
    chartArea: {width: '70%', height: '90%'},
    sizeAxis: {minSize: 1, maxSize: 14},
    explorer: {
      maxZoomOut: 1,
    }
  };

  var chart = new google.visualization.BubbleChart($('#star-chart')[0]);
  chart.draw(data, options);
}

google.setOnLoadCallback(drawStarChart);

$( document ).ready(function() {
 $("#long-trip").on("change", function() {
   drawStarChart();
 });
});