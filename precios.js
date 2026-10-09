// ═══════════════════════════════════════════════════════════
//  PRECIOS DE NOVADESK  (en dólares, USD)
//  Para cambiar un precio: edita solo el número después de "precio:".
//  Respeta las comillas, las comas y las llaves. Ejemplo:
//     {label:"Perfil individual", precio:3.50},
//  "fijo:true" significa que el plan ya viene con su duración
//  (por ejemplo "Invitación anual") y no se multiplica por meses.
//  Para ocultar un plan, bórralo o ponle // al inicio de la línea.
// ═══════════════════════════════════════════════════════════
const PRECIOS = {

  "Netflix": [
    {label:"Perfil Individual", precio:4.00},
    {label:"Perfil Extra (a tu correo personal)", precio:5.00},
    {label:"Cuenta completa Estándar (3 perfiles)", precio:11.00},
    {label:"Cuenta completa Premium (5 perfiles)", precio:15.00},
  ],

  "Disney+": [
    {label:"Perfil Estándar (2 ESPN)", precio:2.50},
    {label:"Perfil Premium (3 ESPN)", precio:3.50},
  ],

  "HBOMAX": [
    {label:"Perfil Estándar", precio:1.80},
    {label:"Perfil Platino (2 dispositivos)", precio:3.50},
  ],

  "Prime Video": [
    {label:"Perfil Individual", precio:3.00},
  ],

  "Crunchyroll": [
    {label:"Perfil Individual", precio:2.00},
  ],

  "Canva": [
    {label:"Invitación mensual", precio:0.50, fijo:true},
    {label:"Invitación trimestral", precio:1.25, fijo:true},
    {label:"Invitación semestral", precio:2.00, fijo:true},
    {label:"Invitación anual", precio:3.00, fijo:true},
  ],

  "Apple TV": [
    {label:"Dispositivo", precio:4.00},
  ],

  "CapCut": [
    {label:"Dispositivo", precio:7.50},
    {label:"Cuenta completa (2 dispositivos)", precio:15.00},
  ],

  "ChatGPT": [
    {label:"Usuario compartido", precio:9.50},
    {label:"Cuenta completa Individual", precio:22.75},
  ],

  "Gemini AI Pro + 1TB": [
    {label:"Invitación mensual", precio:3.50, fijo:true},
    {label:"Invitación trimestral", precio:7.00, fijo:true},
    {label:"Invitación anual", precio:14.00, fijo:true},
  ],

  "Spotify Premium": [
    {label:"Individual invitada a plan familiar", precio:4.50},
    {label:"Solo para web (no reproduce en app)", precio:2.00},
  ],

  "FlujoTV": [
    {label:"Dispositivo", precio:4.50},
    {label:"Cuenta completa (3 dispositivos)", precio:12.00},
  ],

  "YouTube Premium": [
    {label:"Individual mensual", precio:6.50},
  ],

  "Telelatino": [
    {label:"Dispositivo", precio:4.00},
  ],

  "Office 365": [
    {label:"5 dispositivos (1 año · 3 meses garantía)", precio:20.00, fijo:true},
  ],

  "Plex": [
    {label:"Perfil", precio:4.50},
    {label:"Cuenta completa (3 dispositivos)", precio:12.00},
  ],

  "Deezer": [
    {label:"Individual", precio:5.00},
  ],

  "TIDAL": [
    {label:"Individual", precio:5.50},
  ],
};

// Descuento por cantidad de meses (0.10 = 10%).
const DESCUENTOS = {1:0, 3:0.10, 6:0.15, 12:0.20};
