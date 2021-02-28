var arrLang = {
      'en': {
        'dataGenkiPool': 'Data GenkiPool',
        'rewards': 'Rewards',
        'guide': 'Delegation Guide',
        'service': 'Service',
        'community': 'Community',
        'contact': 'Contact',
        'info': 'More Info',
        'Specifications': 'Specifications',
        'power': 'His Power Is Over 9000!',
        'daedalus': 'Delegate with Daedalus wallet.',
        'download': 'Download',
        'downloadD': 'Download Daedalus',
        'blockchain': 'Cardano Blockchain Explorer.',
        'explorer': 'Explorer',
        'specifications': 'SPECIFICATIONS (GENKI)',
        'rewardG': 'Rewards With GenkiPool',
        'guideD': 'DELEGATION GUIDE',
        'search': 'Search GENKIPOOL',
        'selectG': 'Select GENKIPOOL',
        'selectW': 'Select Wallet',
        'checkG': 'Check GENKIPOOL',
        'enterP': 'Enter Password',
        'serviceD': 'SERVICE',
        'textService': 'The network infrastructure is made up of 7 servers, 4 relay servers, 2 pool nodes and 1 server for monitoring. The 4 relay nodes are in different locations for better redundancy, communication and speed in the propagation of blocks in the blockchain. 2 nodes are located in Nuremberg, 1 node in Falkenstein and 1 node in Tuusula. All nodes are monitored 24 hours a day with Grafana, Prometheus, Loki and with sending of alarms by Telegram. The second pool node is off and is only used when it is necessary to make an update in the main pool node, in this way the pool is working 24 hours and ready to sign blocks.',
        'communityPa': 'Join the community and help to publicize GENKIPOOL by sharing your own images and advertising GENKIPOOL on social networks, ',
        'communityPa2': 'the best images will be published on the web and on social networks, together we will be stronger and we will get more rewards.',
        'contactMe': 'Contact Me',
        'perfil': 'Hi, my name is Luis, I have 7 years of experience as a network administrator and Network Security Assessment, I also have advanced knowledge in Linux and I know how to program in various languages, especially in bash and python.'
      },
      'es': {
        'dataGenkiPool': 'Datos GenkiPool',
        'rewards': 'Recompensas',
        'guide': 'Delegar',
        'service': 'Servicio',
        'community': 'Comunidad',
        'contact': 'Contacto',
        'info': 'Más Información',
        'Specifications': 'Especificaciones',
        'power': 'Su poder es más de 9000!',
        'daedalus': 'Delega con Daedalus.',
        'download': 'Descargar',
        'downloadD': 'Descargar Daedalus',
        'blockchain': 'Explorar Blockchain Cardano.',
        'explorer': 'Explorar',
        'specifications': 'ESPECIFICACIONES (GENKI)',  
        'rewardG': 'Recompensas Con GenkiPool',
        'guideD': 'COMO DELEGAR',
        'search': 'Buscar GENKIPOOL',
        'selectG': 'Seleccionar GENKIPOOL',
        'selectW': 'Seleccionar Billetera',
        'checkG': 'Verificar GENKIPOOL',
        'enterP': 'Introducir Password',
        'serviceD': 'SERVICIO',
        'textService': 'La infraestructura de red esta formada por 7 servidores, 4 Servidores relays, 2 nodos pool y 1 servidor para monitorización. Los 4 nodos relays se encuentran en distintas localizaciones para una mejor redundancia, comunicación y rapidez en la propagación de bloques en la blockchain. 2 nodos se encuentran ubicados en Nuremberg, 1 nodo en Falkenstein y 1 nodo en Tuusula. Todos los nodos son monitorizados 24 horas con Grafana, Prometheus, Loki y con envío de alarmas por Telegram. El segundo nodo pool se encuentra apagado y solo se utiliza cuando es necesario hacer una actualización en el nodo pool principal, de esta manera el pool esta 24 horas funcionado y listo para firmar bloques.',
        'communityPa': 'Únete a la comunidad y ayuda a dar a conocer a GENKIPOOL compartiendo tus propias imágenes y publicitando GENKIPOOL en las redes sociales, ',
        'communityPa2': 'las mejores imágenes serán publicadas en la web y en las redes sociales, juntos seremos más fuertes y obtendremos más recompensas.',
        'contactMe': 'Contactame',
        'perfil': 'Hola, mi nombre es Luis, tengo 7 años de experiencia como administrador de redes y como auditor de seguridad de redes informaticas, también tengo conocimientos avanzados en Linux y sé programar en varios lenguajes, especialmente en bash y python.'
        
      }
};

    // Process translation

$(function() {
     $(document).on('change', '#select', function() {  
     	var lang = $(this).children(":selected").attr("id");
        $('.lang').each(function(index, item) {
        	$(this).text(arrLang[lang][$(this).attr('key')]);
        });
      
	if(document.getElementById('Pastake')){
		var element = document.getElementById("Pastake");
		element.parentNode.removeChild(element);
		var selectVal = $(this).children("option:selected").val();
		var Pa = document.createElement('p');
		var Strong = document.createElement('strong');
		var Strong2 = document.createElement('strong');
			
	}
		
	if(document.getElementById('PaReward')){
		var element = document.getElementById("PaReward");
		element.parentNode.removeChild(element);
		var selectVal = $(this).children("option:selected").val();
		var PaR = document.createElement('p');
		var StrongR = document.createElement('strong');
			
	}

	if(selectVal == 'English'){
		
		var TextPa = document.createTextNode("Stake in ");
		var TextStrong = document.createTextNode("GENKIPOOL ");
		var TextPa2 = document.createTextNode("to help Goku beat the ");
		var TextStrong2 = document.createTextNode("banking system.");	
		var TextPaR = document.createTextNode("Earn staking rewards in ADA crypto currency by downloading the Daedalus Mainnet or Yoroi staking wallet and choosing ");
		var TextPaR2 = document.createTextNode("GenkiPool ");
		var TextPaR3 = document.createTextNode("as your staking pool.");

	} else {
		var TextPa = document.createTextNode("Delega en ");
		var TextStrong = document.createTextNode("GENKIPOOL ");
		var TextPa2 = document.createTextNode("para ayudar a Goku a vencer al ");
		var TextStrong2 = document.createTextNode("sistema bancario.");
		var TextPaR = document.createTextNode("Gane recompensas de apuesta en criptomoneda ADA descargando la billetera Daedalus o Yoroi y eligiendo ");
		var TextPaR2 = document.createTextNode("GenkiPool ");
		var TextPaR3 = document.createTextNode("como su grupo de particiapación.");
				
	}
		
	Pa.appendChild(TextPa);   
	Pa.appendChild(Strong);
	Strong.appendChild(TextStrong);  
	Pa.appendChild(TextPa2);
	Pa.appendChild(Strong2);
	Strong2.appendChild(TextStrong2);
	Pa.setAttribute('id', 'Pastake');  
	Strong.setAttribute('class', 'theme-color');
	Strong2.setAttribute('class', 'theme-color');
						 
	var beforeElement = document.getElementById("separate"); 
		
	var elementParent = beforeElement.parentNode;
	elementParent.insertBefore(Pa, beforeElement.nextSibling);
		
		
	PaR.appendChild(TextPaR);   
	PaR.appendChild(StrongR);
	StrongR.appendChild(TextPaR2);  
	PaR.appendChild(TextPaR3);
	PaR.setAttribute('id', 'PaReward');  
		
						 
	var beforeElement = document.getElementById("titleReward"); 
	var elementParent = beforeElement.parentNode;
	elementParent.insertBefore(PaR, beforeElement.nextSibling);
     });

});












