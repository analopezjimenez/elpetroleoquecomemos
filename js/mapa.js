var map = L.map('mapid').setView([12.238333, -1.561593], 3);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  //maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);


  var bananaIcon = L.icon({
    iconUrl: 'assets/icon/banana.png',

    iconSize:     [65, 65], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [24, 62], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([9.081999, 8.675277], {icon: bananaIcon}).addTo(map).bindPopup("<h6><b>BANANA</b></br></br>Origen: África</br>Supermercado: Simply</br>Petróleo: 0,10 Kg</h6>");
	L.marker([4.570868, -74.297333], {icon: bananaIcon}).addTo(map).bindPopup("<h6><b>BANANA</b></br></br>Origen: Colombia</br>Supermercado: DÍA</br>Petróleo: 0,11 Kg</h6>");
	L.marker([-1.831239, -78.18340599], {icon: bananaIcon}).addTo(map).bindPopup("<h6><b>BANANA</b></br></br>Origen: Ecuador</br>Supermercado: Simply</br>Petróleo: 0,08 Kg</h6>");

	var mangoIcon = L.icon({
		iconUrl: 'assets/icon/mango.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [84, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([12.7690126, -85.60236429], {icon: mangoIcon}).addTo(map).bindPopup("<h6><b>MANGO</b></br></br>Origen: América</br>Supermercado: Simply</br>Petróleo: 0,13 Kg</h6>");

	var zanahoriaIcon = L.icon({
		iconUrl: 'assets/icon/zanahoria.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [34, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([50.503887, 4.469936], {icon: zanahoriaIcon}).addTo(map).bindPopup("<h6><b>ZANAHORIAS</b></br></br>Origen: Bélgica</br>Supermercado: Mercadona</br>Petróleo: 0,07 Kg</h6>");

	var melonIcon = L.icon({
		iconUrl: 'assets/icon/melon.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [34, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([-14.235004, -51.92528], {icon: melonIcon}).addTo(map).bindPopup("<h6><b>MELÓN</b></br></br>Origen: Brasil</br>Supermercado: DÍA</br>Petróleo: 0,13 Kg</h6>");

	var nectarinaIcon = L.icon({
		iconUrl: 'assets/icon/nectarina.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [34, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([-35.675147, -71.542969], {icon: nectarinaIcon}).addTo(map).bindPopup("<h6><b>NECTARINAS</b></br></br>Origen: Chile</br>Supermercado: Simply</br>Petróleo: 0,12 Kg</h6>");

	var esparragosIcon = L.icon({
		iconUrl: 'assets/icon/esparrago.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [0, 10], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([35.86166, 104.195397], {icon: esparragosIcon}).addTo(map).bindPopup("<h6><b>ESPÁRRAGOS</b></br></br>Origen: China</br>Supermercado: Simply</br>Petróleo: 0,19 Kg</h6>");

	var cocoIcon = L.icon({
		iconUrl: 'assets/icon/coco.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [34, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([7.5399889, -5.547079], {icon: cocoIcon}).addTo(map).bindPopup("<h6><b>COCO</b></br></br>Origen: Costa de Marfil</br>Supermercado: Simply</br>Petróleo: 0,08 Kg</h6>");

	var piñaIcon = L.icon({
		iconUrl: 'assets/icon/piña.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [30, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([9.748916999, -83.753428], {icon: piñaIcon}).addTo(map).bindPopup("<h6><b>PIÑA</b></br></br>Origen: Costa Rica</br>Supermercado: Simply</br>Petróleo: 0,07 Kg</h6>");

	var nuezIcon = L.icon({
		iconUrl: 'assets/icon/nuez.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [30, 62], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([37.09024, -95.712891], {icon: nuezIcon}).addTo(map).bindPopup("<h6><b>NUECES</b></br></br>Origen: Estados Unidos</br>Supermercado: Carrefour</br>Petróleo: 0,15 Kg</h6>");

	var patataIcon = L.icon({
		iconUrl: 'assets/icon/patata.png',

		iconSize:     [65, 65], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [20, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([46.227638, 2.213749], {icon: patataIcon}).addTo(map).bindPopup("<h6><b>PATATAS</b></br></br>Origen: Francia</br>Supermercado: Simply</br>Petróleo: 0,05 Kg</h6>");

	var manzanaIcon = L.icon({
		iconUrl: 'assets/icon/manzana.png',

		iconSize:     [60, 60], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [20, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([41.87194, 12.56738], {icon: manzanaIcon}).addTo(map).bindPopup("<h6><b>MANZANA</b></br></br>Origen: Italia</br>Supermercado: Simply</br>Petróleo: 0,09 Kg</h6>");

	var judiasIcon = L.icon({
		iconUrl: 'assets/icon/judias.png',

		iconSize:     [60, 60], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [20, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([-18.766947, 12.56738], {icon: judiasIcon}).addTo(map).bindPopup("<h6><b>JUDÍAS BIO</b></br></br>Origen: Madagascar</br>Supermercado: Simply</br>Petróleo: 0,1 Kg</h6>");
	L.marker([31.791702, -7.0926199], {icon: judiasIcon}).addTo(map).bindPopup("<h6><b>JUDÍAS VERDES</b></br></br>Origen: Marruecos</br>Supermercado: Simply</br>Petróleo: 0,04 Kg</h6>");


	var alcachofaIcon = L.icon({
		iconUrl: 'assets/icon/alcachofa.png',

		iconSize:     [60, 60], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [20, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([-9.189967, -75.015152], {icon: alcachofaIcon}).addTo(map).bindPopup("<h6><b>ALCACHOFAS</b></br></br>Origen: Perú</br>Supermercado: Eroski</br>Petróleo: 0,11 Kg</h6>");

	var vinoIcon = L.icon({
		iconUrl: 'assets/icon/vino.png',

		iconSize:     [60, 60], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [40, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([39.39987199, -8.224454], {icon: vinoIcon}).addTo(map).bindPopup("<h6><b>VINO ROSADO</b></br></br>Origen: Portugal</br>Supermercado: Mercadona</br>Petróleo: 0,02 Kg</h6>");

	var naranjaIcon = L.icon({
		iconUrl: 'assets/icon/naranja.png',

		iconSize:     [60, 60], // size of the icon
		// shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [20, 32], // point of the icon which will correspond to marker's location
		// shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([-30.559482, 22.937506], {icon: naranjaIcon}).addTo(map).bindPopup("<h6><b>NARANJAS</b></br></br>Origen:Sudáfrica</br>Supermercado: DÍA/br>Petróleo: 0,10 Kg</h6>");
