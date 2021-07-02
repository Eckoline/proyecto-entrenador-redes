// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5VczfWR-ygZK9Xauh33nWlzUnl7E-ZtI",
    authDomain: "proyecto2-6f9f7.firebaseapp.com",
    databaseURL: "https://proyecto2-6f9f7-default-rtdb.firebaseio.com",
    projectId: "proyecto2-6f9f7",
    storageBucket: "proyecto2-6f9f7.appspot.com",
    messagingSenderId: "1004034037233",
    appId: "1:1004034037233:web:fd61e6c00dcd46288c6050"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = document.getElementById('app')

var dbRef = firebase.database()
var Entrada_analog = dbRef.ref('val_analogico')

var sec = false;

var E1 = dbRef.ref('E0')
var E2 = dbRef.ref('E1')
var E3 = dbRef.ref('E2')
var E4 = dbRef.ref('E3')
var E5 = dbRef.ref('E4')
var E6 = dbRef.ref('E5')
var E7 = dbRef.ref('E6')
var E8 = dbRef.ref('E7')
var S0 = dbRef.ref('S0')
var S1 = dbRef.ref('S1')
var S2 = dbRef.ref('S2')
var S3 = dbRef.ref('S3')
var S4 = dbRef.ref('S4')
var S5 = dbRef.ref('S5')
var S6 = dbRef.ref('S6')
var S7 = dbRef.ref('S7')
//const enviar = document.getElementById('btn')

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     if(sec)
//     {
//         dbRef.ref('/Secuencia').set({
//             secuencia: 1  
//         });
//         sec = !sec
//     }
//     else
//     {
//         dbRef.ref('/Secuencia').set({
//             secuencia: 0  
//         });
//         sec = !sec
//     }
// });

iniciar_sec.addEventListener('click', (e) =>{
    e.preventDefault();
         setTimeout(function(){
             dbRef.ref('/Arranque').set({
                 arranque: 0  
             });
          }, 3000);

         dbRef.ref('/Arranque').set({
             arranque: 1  
         });
 });



Entrada_analog.on('value', function(snap) {
    //app.innerHTML = snap.val()
    document.getElementById('analog').value = snap.val();
})
Entrada_analog.on('value', function(snap) {
    //app.innerHTML = snap.val()
    document.getElementById('analog_etiqueta').innerHTML = snap.val();
})
E1.on('value', function(snap) {
    //app.innerHTML = snap.val()
    //document.getElementById('insert').innerHTML = snap.val();
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E1');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E1');
        led.src = "led_off.png";
    }
})
E2.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E2');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E2');
        led.src = "led_off.png";
    }
})
E3.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E3');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E3');
        led.src = "led_off.png";
    }
})
E4.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E4');
        led.src = "led_on.png";

        var s = document.getElementById('secue');
        s.src = "Secuencia 2_p4.png";
        s.style.height = '170px';
        s.style.width = '500px';
    }
    else
    {
        var led = document.getElementById('led_E4');
        led.src = "led_off.png";

        var s = document.getElementById('secue');
        s.src = "Secuencia 1_p4.png";
        s.style.height = '170px';
        s.style.width = '450px';
    }
})
E5.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E5');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E5');
        led.src = "led_off.png";
    }
})
E6.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E6');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E6');
        led.src = "led_off.png";
    }
})
E7.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E7');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E7');
        led.src = "led_off.png";
    }
})
E8.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('led_E8');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('led_E8');
        led.src = "led_off.png";
    }
})


//Compuertas

S5.on('value', function(snap) {
    if(snap.val()>0)
    {
        var c_and = document.getElementById('and');
        c_and.src = "and_on.png";
    }
    else
    {
        var c_and = document.getElementById('and');
        c_and.src = "and_off.png";
    }
})

S4.on('value', function(snap) {
    if(snap.val()>0)
    {
        var c_and = document.getElementById('or');
        c_and.src = "or_on.png";
    }
    else
    {
        var c_and = document.getElementById('or');
        c_and.src = "or_off.png";
    }
})
S6.on('value', function(snap) {
    if(snap.val()>0)
    {
        var c_and = document.getElementById('not');
        c_and.src = "not_on.png";
    }
    else
    {
        var c_and = document.getElementById('not');
        c_and.src = "not_off.png";
    }
})
S7.on('value', function(snap) {
    if(snap.val()>0)
    {
        var c_and = document.getElementById('if');
        c_and.src = "if_on.png";
    }
    else
    {
        var c_and = document.getElementById('if');
        c_and.src = "if_off.png";
    }
})


var sound = document.getElementById('sonidos');
//Pistones--------------------------------------------------------------------------------------------------
S0.on('value', function(snap) {
    sound.innerHTML = '<audio src="piston.mp3" autoplay></audio>';
    if(snap.val()>0)
    {
        var led = document.getElementById('C1');
        led.src = "cilindro_abierto.png";
        led.style.height = '50px';
        led.style.width = '120px';

    }
    else
    {
        var led = document.getElementById('C1');
        led.src = "cilindro_cerrado.png";
        led.style.height = '50px';
        led.style.width = '100px';
    }
})
S1.on('value', function(snap) {
    sound.innerHTML = '<audio src="piston.mp3" autoplay></audio>';
    if(snap.val()>0)
    {
        var led = document.getElementById('C2');
        led.src = "cilindro_abierto.png";
        led.style.height = '50px';
        led.style.width = '120px';
    }
    else
    {
        var led = document.getElementById('C2');
        led.src = "cilindro_cerrado.png";
        led.style.height = '50px';
        led.style.width = '100px';
    }
})
S2.on('value', function(snap) {
    sound.innerHTML = '<audio src="piston.mp3" autoplay></audio>';
    if(snap.val()>0)
    {
        var led = document.getElementById('C3');
        led.src = "cilindro_abierto.png";
        led.style.height = '50px';
        led.style.width = '120px';
    }
    else
    {
        var led = document.getElementById('C3');
        led.src = "cilindro_cerrado.png";
        led.style.height = '50px';
        led.style.width = '100px';
    }
})

//Salidas Practica 2
S0.on('value', function(snap) {
    //app.innerHTML = snap.val()
    //document.getElementById('insert').innerHTML = snap.val();
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_0');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_0');
        led.src = "led_off.png";
    }
})
S1.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_1');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_1');
        led.src = "led_off.png";
    }
})
S2.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_2');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_2');
        led.src = "led_off.png";
    }
})
S3.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_3');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_3');
        led.src = "led_off.png";
    }
})
S4.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_4');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_4');
        led.src = "led_off.png";
    }
})
S5.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_5');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_5');
        led.src = "led_off.png";
    }
})
S6.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_6');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_6');
        led.src = "led_off.png";
    }
})
S7.on('value', function(snap) {
    if(snap.val()>0)
    {
        var led = document.getElementById('Sal_p2_7');
        led.src = "led_on.png";
    }
    else
    {
        var led = document.getElementById('Sal_p2_7');
        led.src = "led_off.png";
    }
})
