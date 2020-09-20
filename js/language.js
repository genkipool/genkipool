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
        'textService': 'To create GENKIPOOL, 4 servers have been configured, the producer node has been installed on the first server, 2 relay nodes have been installed on the second server, 2 other relay nodes have been installed on the third server, and prometheus has been installed on the fourth. and grafana to be able to monitor the operation of the producer node 24 hours a day.The servers have high availability and a high level of security 24 hours a day.Specs: Operating system: Linux 64-bit (Ubuntu 20.04 LTS), Processor: dual-core CPU, Memory: 4GB RAM Storage: 40 GB,Internet: 24/7 broadband Internet connection with speeds of at least 1Gbit, Energy: 24/7 electric power.',
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
        'textService': 'Para crear GENKIPOOL se han configurado 4 servidores, en el primer servidor se ha instalado el nodo prodcuctor, en el segundo servidor se han instalado 2 nodos relays, en el tercer servidor se han instalado otros 2 nodos relays, en el cuarto se ha instalado prometheus y grafana para poder monitorear las 24 horas el funcionamiento del nodo productor. Los servidores cuentan con alta disponibilidad y un alto nivel de seguridad las 24 horas del día. Especificaciones: Sistema operativo: Linux de 64 bits (Ubuntu 20.04 LTS), Procesador: CPU de doble núcleo, Memoria: 4 GB de RAM Almacenamiento: 40 GB, Internet: conexión a Internet de banda ancha 24/7 con velocidades de al menos 1Gbit, Energía: energía eléctrica 24/7.',
         'communityPa': 'Únete a la comunidad y ayuda a dar a conocer a GENKIPOOL compartiendo tus propias imágenes y publicitando GENKIPOOL en las redes sociales, ',
        'communityPa2': 'las mejores imágenes serán publicadas en la web y en las redes sociales, juntos seremos más fuertes y obtendremos más recompensas.',
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












