	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#492301";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#444444";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Enable";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="403";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="False";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#AB5858";bookConfig.bgEndColor="#AA5555";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#897367";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=30;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2329;;bookConfig.securityType="1";bookConfig.bookTitle="playas de trinidad-ES";bookConfig.bookmarkCR="7c1c6ede6c1ecb84e3f22633b3e1087a17d45c9b";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Spanish",btnFirstPage:"Primera Página",btnNextPage:"Página siguiente",btnLastPage:"Última Página",btnPrePage:"Página Anterior",btnDownload:"Descargar",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Borrar",frmSearchPrompt:"Clear",btnBookMark:"Tabla de contenidos",btnHelp:"Ayuda",btnHome:"Inicio",btnFullScreen:"Permitir Pantalla Completa",btnDisableFullScreen:"Deshabilitar Pantalla Completa",btnSoundOn:"Sonido Encendido",btnSoundOff:"Sonido Apagado",btnShareEmail:"Compartir",btnSocialShare:"Redes Sociales",btnZoomIn:"Agrandar",btnZoomOut:"Alejar",btnDragToMove:"Modo de Arrastre",btnAutoFlip:"Auto pasar",btnStopAutoFlip:"Detener Auto Pasar",btnGoToHome:"Volver al inicio",frmHelpCaption:"Ayuda",frmHelpTip1:"Ayuda uno",frmHelpTip2:"Arrastrar el Borde con el Maus",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas las Páginas",frmPrintPrintCurrentPage:"Imprimir Página actual",frmPrintPrintRange:"Imprimir Páginas:",frmPrintExampleCaption:"Ejemplo: 2,5,8-26",frmPrintPreparePage:"Preparando la Página:",frmPrintPrintFailed:"Error de Impresión:",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",loginCaption:"Entrar",loginInvalidPassword:"Contraseña no válida!",loginPasswordLabel:"Contraseña:",loginBtnLogin:"Entrar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Acerca de",frnAboutCaption:"Acerca de y Contacto",btnSinglePage:"Página Simple",btnDoublePage:"Página doble",btnSwicthLanguage:"Cambiar el Idioma",tipChangeLanguage:"Elegir un Idioma...",btnMoreOptionsLeft:"Mas Opciones",btnMoreOptionsRight:"Mas Opciones",btnFit:"Ajustar la Ventana",smallModeCaption:"Click para ver Pantalla Completa",btnAddAnnotation:"Agregar Notas",btnAnnotation:"Notas",FlipPageEditor_SaveAndExit:"Guardar y Salir",FlipPageEditor_Exit:"Salir",DrawToolWindow_Redo:"Rehacer",DrawToolWindow_Undo:"Deshacer",DrawToolWindow_Clear:"Limpiar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Ancho",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Borrador",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Ancho de Borde",TStuff_BorderAlph:"Borde Alfa",TStuff_BorderColor:"Color del Borde",DrawToolWindow_TextNote:"Texto Nota",AnnotMark:"Marcador",lastpagebtnHelp:"Ultima Página",firstpagebtnHelp:"Primera Página",homebtnHelp:"Volver a la Página Principal",aboubtnHelp:"Acerca de",screenbtnHelp:"Abrir en Pantalla Completa",helpbtnHelp:"Mostrar la Ayuda",searchbtnHelp:"Buscar en Páginas",pagesbtnHelp:"Ver las miniaturas de este Folleto",bookmarkbtnHelp:"Abrir Marcador",AnnotmarkbtnHelp:"Abrir la Tabla de Contenidos",printbtnHelp:"Imprimir el folleto",soundbtnHelp:"Prender o Apagar el Sonido",sharebtnHelp:"Enviar Email a",socialSharebtnHelp:"Redes Sociales",zoominbtnHelp:"Agrandar",downloadbtnHelp:"Descargar el folleto",pagemodlebtnHelp:"Cambiar entre Modo de Página Simple y Doble",languagebtnHelp:"Cambiar Idioma",annotationbtnHelp:"Agregar Anotación",addbookmarkbtnHelp:"Agregar Marcador",removebookmarkbtnHelp:"Eliminar Marcador",updatebookmarkbtnHelp:"Actualizar Marcador",btnShoppingCart:"Carrito de Compras",Help_ShoppingCartbtn:"Ayudar Carrito de Compras",Help_btnNextPage:"Siguiente Página",Help_btnPrePage:"Anterior Página",Help_btnAutoFlip:"Auto pasar",Help_StopAutoFlip:"Detener auto pasar",btnaddbookmark:"Agregar",btndeletebookmark:"Eliminar",btnupdatebookmark:"Actualizar",frmyourbookmarks:"Mis Anotaciones",frmitems:"Artículos",DownloadFullPublication:"Publicación Completa",DownloadCurrentPage:"Página Actual",DownloadAttachedFiles:"Archivos Adjuntos",lblLink:"Enlace",btnCopy:"Botón Copiar",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"¿Desea recuperar la sesión anterior?",tmpl_Backgoundsoundon:"Fondo Sonido Encendido",tmpl_Backgoundsoundoff:"Fondo Sonido Apagado ",tmpl_Flipsoundon:"Flip Sonido Encendido",tmpl_Flipsoundoff:"Flip Sonido Apagado ",Help_PageIndex:"Número de actual Página",tmpl_PrintPageRanges:"Rango de Página",tmpl_PrintPreview:"Previsualizar",btnSelection:"Seleccionar Texto",loginNameLabel:"Nombre:",btnGotoPage:"Ir a Página",btnSettings:"Configuración",soundSettingTitle:"Sonido Configuración",closeFlipSound:"Sonido de pase de cierre",closeBackgroundSound:"Cerrar el Sonido de Fondo",frmShareCaption:"Compartiendo",frmShareLinkLabel:"Enlace:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartir con grupo",TAnnoActionPropertyStuff_GotoPage:"Ir a página ",btnPageBack:"Retroceder",btnPageForward:"Adelante",SelectTextCopy:"Copiar Texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrito de Compras",TStuffCart_DetailedQuantity:"Cantidad",TStuffCart_DetailedPrice:"Precio",ShappingCart_Close:"Cerrar",ShappingCart_CheckOut:"Proceso",ShappingCart_Item:"Artículo",ShappingCart_Total:"Total precio",ShappingCart_AddCart:"Añadir a carrito",ShappingCart_InStock:"En Stock",TStuffCart_DetailedCost:"Costo de transporte",TStuffCart_DetailedTime:"Tiempo de entrega",TStuffCart_DetailedDay:"día(s)",ShappingCart_NotStock:"Poco en stock",btnCrop:"Ajustar",btnDragButton:"Arrastrar",btnFlipBook:"Libro flip",btnSlideMode:"Modo de presentación",btnSinglePageMode:"Modo de página sencilla",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Cerrar",btnDoublePage:"Página doble",btnBookStatus:"Book View",checkBoxInsert:"Ingrese página actual",lblLast:"Esta es la última página.",lblFirst:"Esta es la primera página.",lblFullscreen:"Clic para ver en pantalla completa",lblName:"Nombre",lblPassword:"Contraseña",lblLogin:"Entrar",lblCancel:"Cancelar",lblNoName:"Nombre de usuario no puede estar vacío.",lblNoPassword:"Contraseña no puede estar vacía.",lblNoCorrectLogin:"Ingrese el nombre y contraseña correctos.",btnVideo:"Galería de video",btnSlideShow:"Presentación",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",btnDragToMove:"Modo de Arrastre",btnPositionToMove:"Mover por posición del mouse",lblHelp1:"Arrastre la esquina de la página para ver",lblHelp2:"Doble clic para acercar y alejar",lblCopy:"Copiar",lblAddToPage:"añadir a página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Borrar",lblRemoveAll:"Quitar todo",tltCursor:"cursor",tltAddHighlight:"añadir resaltado",tltAddTexts:"añadir textos",tltAddShapes:"añadir formas",tltAddNotes:"añadir notas",tltAddImageFile:"añadir archivo de imagen",tltAddSignature:"añadir firma",tltAddLine:"añadir línea",tltAddArrow:"añadir flecha",tltAddRect:"añadir recta",tltAddEllipse:"añadir elipse",lblDoubleClickToZoomIn:"Doble clic para acercar",frmShareCaption:"Compartiendo",frmShareLabel:"Comparir",frmShareInfo:"Puedes compartir tu publicación fácilmente a las redes sociales. Sólo haz clic abajo.",frminsertLabel:"Insertar a sitio",frminsertInfo:"Ue el código debajo para insertar en su sitio.",btnQRCode:"Clic para escanear código QR",btnRotateLeft:"Rotar a la izquierda",btnRotateRight:"Rotar a la derecha",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmBookMark:"Marcador",btnFullscreen:"Pantalla completa",btnExitFullscreen:"Salir de pantalla completa",btnMore:"Más",frmPrintall:"Imprimir todas las páginas",frmPrintcurrent:"Imprimir la página actual",frmPrintRange:"Intervalo de impresión",frmPrintexample:"Ejemplo: 2,3,5-10",frmPrintbtn:"impresión",frmaboutcaption:"contacto",frmaboutcontactinformation:"Información de Contacto",frmaboutADDRESS:"Dirección",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Sitio web",frmaboutMOBILE:"Móvil",frmaboutAUTHOR:"Autor",frmaboutDESCRIPTION:"Descripción",frmSearch:"Búsqueda",frmToc:"Tabla de Contenido",btnTableOfContent:"Mostrar Tabla de Contenidos",btnNote:"anotación",lblDescription:"Título",frmLinkLabel:"Enlazar",infNotSupportHtml5:"Su navegador no soporta HTML5.",frmQrcodeCaption:"Escanee el código bidimensional inferior para verlo con el teléfono móvil."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"Email","paypal":"","method":"POST","sandbox":"false","address":"humbertocardoso@nauta.cu","theme":"Hostal","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/><br/>    ${shopping}<br/><br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201919105173322","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.05555555555555555","y":"0.16161616161616163","width":"0.9035947712418299","height":"0.16792929292929293","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"3"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201919105173094","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.05555555555555555","y":"0.3409090909090909","width":"0.9035947712418299","height":"0.16792929292929293","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"10"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201919105175949","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.05555555555555555","y":"0.5227272727272727","width":"0.9035947712418299","height":"0.16792929292929293","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"18"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"201919105174883","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.4411764705882353","y":"0.6944444444444444","width":"0.13071895424836602","height":"0.10101010101010101","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Black Star in Circle.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":[{"title":"","desc":"","url":"./files/pageConfig/la boca trinidad2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/Desembocadura_del_Río_Guaurabo.jpg"},{"title":"","desc":"","url":"./files/pageConfig/la boca trinidad (2).jpg"}],"sliderType":"1"}}],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"201919105171073","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.4411764705882353","y":"0.6944444444444444","width":"0.13071895424836602","height":"0.10101010101010101","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Star in Circle.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":[{"title":"","desc":"","url":"./files/pageConfig/3516b57f1caf4c32ed1a0658c8daa79b.jpg"},{"title":"","desc":"","url":"./files/pageConfig/maria aguilar3.jpg"},{"title":"","desc":"","url":"./files/pageConfig/maria aguilar2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/H-Club-Amigo-Costa-Sur-Travelfab-1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/H-Club-Amigo-Costa-Sur-Travelfab-4.jpg"}],"sliderType":"1"}}],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"20191910517213","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.4411764705882353","y":"0.6944444444444444","width":"0.13071895424836602","height":"0.10101010101010101","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Star in Circle.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":[{"title":"","desc":"","url":"./files/pageConfig/playa-ancon-capture-the-atlas.jpg"},{"title":"","desc":"","url":"./files/pageConfig/149-5107.jpg"},{"title":"","desc":"","url":"./files/pageConfig/dsc_0892.jpg"},{"title":"","desc":"","url":"./files/pageConfig/maxresdefault.jpg"},{"title":"","desc":"","url":"./files/pageConfig/Ancon-Beach-in-Trinidad-of-Cuba-–-Hostal-Felicia-Trinidad.jpg"},{"title":"","desc":"","url":"./files/pageConfig/playa-ancon.jpg"},{"title":"","desc":"","url":"./files/pageConfig/IMG_2817.jpg"},{"title":"","desc":"","url":"./files/pageConfig/P11300982.jpg"},{"title":"","desc":"","url":"./files/pageConfig/Playa-Ancón-recortada.jpg"},{"title":"","desc":"","url":"./files/pageConfig/playa-ancon-privado-trinidad-cuba.jpg"},{"title":"","desc":"","url":"./files/pageConfig/212894-Trinidad.jpg"},{"title":"","desc":"","url":"./files/pageConfig/Trinidad-Ancón-40190018-1200-800.jpg"}],"sliderType":"1"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"201919105178756","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.4411764705882353","y":"0.025252525252525252","width":"0.13071895424836602","height":"0.10101010101010101","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Star in Circle.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":[{"title":"","desc":"","url":"./files/pageConfig/GOPR0041.MP4_snapshot_00.32_[2015.12.06_13.41.13].jpg"},{"title":"","desc":"","url":"./files/pageConfig/GOPR0041.MP4_snapshot_00.57_[2015.12.06_13.41.48].jpg"},{"title":"","desc":"","url":"./files/pageConfig/GOPR0048.MP4_snapshot_00.21_[2015.11.30_18.04.03].jpg"}],"sliderType":"1"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"201919105176936","alpha":"1","location":{"tannoName":"hotSpots1","x":"0.4411764705882353","y":"0.025252525252525252","width":"0.13071895424836602","height":"0.10101010101010101","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Star in Circle.swf","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":[{"title":"","desc":"","url":"./files/pageConfig/club_amigo_ancon_foto_1.jpg"},{"title":"","desc":"","url":"./files/pageConfig/club_amigo_ancon_foto_2.jpg"},{"title":"","desc":"","url":"./files/pageConfig/20150321_095950.jpg"},{"title":"","desc":"","url":"./files/pageConfig/20150321_100047.jpg"},{"title":"","desc":"","url":"./files/pageConfig/1_20150321_105938.jpg"},{"title":"","desc":"","url":"./files/pageConfig/1_20150321_110002.jpg"}],"sliderType":"1"}}],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201919105176401","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.27562","y":"0.944876","width":"0.4486800000000001","height":"-0.056283","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:anilcie.prieto@nauta.cu","linkTarget":"Blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"201919105178451","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.20427900000000002","y":"0.837139","width":"0.59148","height":"-0.051818","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:humbertocardoso@nauta.cu","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20191910517516","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.20098039215686275","y":"0.7828282828282829","width":"0.5931372549019608","height":"0.05555555555555555","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:humbertocardoso@nauta.cu","linkTarget":"_blank"}}],[]]}; bookConfig.isFlipPdf=true;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
