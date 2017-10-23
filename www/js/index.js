// here is ready listener
document.addEventListener("deviceready", onDeviceReady, false);
	// here is resume listener
	document.addEventListener("resume", onResume, false);
        // here is pause listener
	document.addEventListener("pause", onPause, false);
		

// device APIs are available
//
    function onDeviceReady() { 
	   console.log("device ready");
       $('#mypanel').enhanceWithin().panel();
    }


    function onPause() {
        
    }
	

    function onResume() {
		
    }

    function storeItem(key, item){
        window.localStorage.setItem( key, item );
    }

    function getItem(key){
        return window.localStorage.getItem( key );
    }