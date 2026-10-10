// ═══════════════════════════════════════════════════════════
//  PRECIOS DE NOVADESK  (en dólares, USD)
//  Para cambiar un precio: edita solo el número después de "precio:".
//  Respeta las comillas, las comas y las llaves. Ejemplo:
//     {label:"Perfil individual", precio:3.50},
//  Planes con precio propio por duración (en vez de precio × meses):
//     {label:"Invitación", meses:{1:0.50, 3:1.25, 6:2.00, 12:3.00}},
//  Solo se podrán elegir las duraciones que escribas ahí
//  (1 = 1 mes, 3 = 3 meses, 6 = 6 meses, 12 = 1 año).
//  Para ocultar un plan, bórralo o ponle // al inicio de la línea.
// ═══════════════════════════════════════════════════════════
const PRECIOS = {

  "Netflix": [
    {label:"Perfil Individual", precio:4.00, oferta:3.50},
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
    {label:"Invitación", meses:{1:0.50, 3:1.25, 6:2.00, 12:3.00}, oferta:{12:1.50}},
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
    {label:"Invitación", meses:{1:3.50, 3:7.00, 12:14.00}},
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
    {label:"5 dispositivos (3 meses de garantía)", meses:{12:20.00}},
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

// ═══════════════════════════════════════════════════════════
//  MÉTODOS DE PAGO  (se muestran en la tienda)
//  "min:15" = ese método solo se usa en pedidos mayores a $15.
//  Para que muestre logo, sube img/pago-nombre.png (ej: pago-zelle.png)
// ═══════════════════════════════════════════════════════════
const PAGOS = [
  {n:"Pago Móvil"},
  {n:"Transferencia Bancaria"},
  {n:"Binance Pay"},
  {n:"Wally"},
  {n:"Zinli", min:15},
  {n:"Zelle", min:15},
  {n:"Uglycash", min:15},
  {n:"OKX", min:15},
  {n:"Belo", min:15},
  {n:"Pesos colombianos (Bre-b)", min:15},
  {n:"Pesos chilenos (transferencia)", min:15},
];

// ═══════════════════════════════════════════════════════════
//  OFERTA CON CUENTA REGRESIVA
//  activa:true para mostrarla. "hasta" = fecha y hora en que termina
//  (año-mes-día T hora:minutos:segundos). Al terminar se oculta sola.
// ═══════════════════════════════════════════════════════════
//  Los precios de oferta se escriben en cada plan con "oferta:":
//     {label:"Perfil Individual", precio:4.00, oferta:3.50},      (precio normal 4.00, en oferta 3.50)
//     {label:"Invitación", meses:{...}, oferta:{12:1.50}},         (oferta solo para 1 año)
//  Solo se aplican mientras la oferta esté activa; al terminar vuelve el precio normal.
const OFERTA = {activa:true, texto:"🔥 Oferta: Netflix Perfil Individual $3.50 · Canva 1 año $1.50", hasta:"2026-10-17T23:45:00"};
