function checkMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
   }

   if (!checkMobile()) { // not mobile
    $('#flipbook').turn({
        display:'double',
        height:'100vh',
        autoCenter: true,
        duration: 2000,
    });
   }
   else {
    $('#flipbook').turn({
        display:'single',
        height:'85vh',
        autoCenter:true,
        duration:2000,
    });
   }
/* $('#flipbook').turn({
    width: '100%',
    height: '100vh',
    autoCenter: true,
    duration: 2000,
}) */