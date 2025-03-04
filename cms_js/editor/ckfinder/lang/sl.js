﻿/*
 * CKFinder
 * ========
 * http://ckfinder.com
 * Copyright (C) 2007-2011, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file, and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying, or distributing this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
 *
 */

/**
* @fileOverview Defines the {@link CKFinder.lang} object for the Slovenian
*		language.
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKFinder.lang['sl'] =
{
	appTitle : 'CKFinder',

	// Common messages and labels.
	common :
	{
		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nedostopen</span>',
		confirmCancel	: 'Nekatere opcije so bile spremenjene. Ali res želite zapreti pogovorno okno?',
		ok				: 'Potrdi',
		cancel			: 'Prekliči',
		confirmationTitle	: 'Potrditev',
		messageTitle	: 'Informacija',
		inputTitle		: 'Vprašanje',
		undo			: 'Razveljavi',
		redo			: 'Obnovi',
		skip			: 'Preskoči',
		skipAll			: 'Preskoči vse',
		makeDecision	: 'Katera aktivnost naj se izvede?',
		rememberDecision: 'Zapomni si mojo izbiro'
	},


	// Language direction, 'ltr' or 'rtl'.
	dir : 'ltr',
	HelpLang : 'en',
	LangCode : 'sl',

	// Date Format
	//		d    : Day
	//		dd   : Day (padding zero)
	//		m    : Month
	//		mm   : Month (padding zero)
	//		yy   : Year (two digits)
	//		yyyy : Year (four digits)
	//		h    : Hour (12 hour clock)
	//		hh   : Hour (12 hour clock, padding zero)
	//		H    : Hour (24 hour clock)
	//		HH   : Hour (24 hour clock, padding zero)
	//		M    : Minute
	//		MM   : Minute (padding zero)
	//		a    : Firt char of AM/PM
	//		aa   : AM/PM
	DateTime : 'd.m.yyyy H:MM',
	DateAmPm : ['AM', 'PM'],

	// Folders
	FoldersTitle	: 'Mape',
	FolderLoading	: 'Nalagam...',
	FolderNew		: 'Vnesite ime za novo mapo: ',
	FolderRename	: 'Vnesite ime nove mape: ',
	FolderDelete	: 'Ali ste prepričani, da želite zbrisati mapo "%1"?',
	FolderRenaming	: ' (Preimenujem...)',
	FolderDeleting	: ' (Brišem...)',

	// Files
	FileRename		: 'Vnesite novo ime datoteke: ',
	FileRenameExt	: 'Ali ste prepričani, da želite spremeniti končnico datoteke? Možno je, da potem datoteka ne bo uporabna.',
	FileRenaming	: 'Preimenujem...',
	FileDelete		: 'Ali ste prepričani, da želite izbrisati datoteko "%1"?',
	FilesLoading	: 'Nalagam...',
	FilesEmpty		: 'Prazna mapa',
	FilesMoved		: 'Datoteka %1 je bila premaknjena v %2:%3.',
	FilesCopied		: 'Datoteka %1 je bila kopirana v %2:%3.',

	// Basket
	BasketFolder		: 'Koš',
	BasketClear			: 'Izprazni koš',
	BasketRemove		: 'Odstrani iz koša',
	BasketOpenFolder	: 'Odpri izvorno mapo',
	BasketTruncateConfirm : 'Ali res želite odstraniti vse datoteke iz koša?',
	BasketRemoveConfirm	: 'Ali res želite odstraniti datoteko "%1" iz koša?',
	BasketEmpty			: 'V košu ni datotek. Lahko jih povlečete in spustite.',
	BasketCopyFilesHere	: 'Kopiraj datoteke iz koša',
	BasketMoveFilesHere	: 'Premakni datoteke iz koša',

	BasketPasteErrorOther	: 'Napaka z datoteko %s: %e',
	BasketPasteMoveSuccess	: 'Seznam premaknjenih datotek: %s',
	BasketPasteCopySuccess	: 'Seznam kopiranih datotek: %s',

	// Toolbar Buttons (some used elsewhere)
	Upload		: 'Naloži na strežnik',
	UploadTip	: 'Naloži novo datoteko na strežnik',
	Refresh		: 'Osveži',
	Settings	: 'Nastavitve',
	Help		: 'Pomoč',
	HelpTip		: 'Pomoč',

	// Context Menus
	Select			: 'Izberi',
	SelectThumbnail : 'Izberi malo sličico (predogled)',
	View			: 'Predogled',
	Download		: 'Prenesi na svoj računalnik',

	NewSubFolder	: 'Nova podmapa',
	Rename			: 'Preimenuj',
	Delete			: 'Zbriši',

	CopyDragDrop	: 'Kopiraj datoteko',
	MoveDragDrop	: 'Premakni datoteko',

	// Dialogs
	RenameDlgTitle		: 'Preimenuj',
	NewNameDlgTitle		: 'Novo ime',
	FileExistsDlgTitle	: 'Datoteka že obstaja',
	SysErrorDlgTitle : 'Sistemska napaka',

	FileOverwrite	: 'Prepiši',
	FileAutorename	: 'Avtomatsko preimenuj',

	// Generic
	OkBtn		: 'Potrdi',
	CancelBtn	: 'Prekliči',
	CloseBtn	: 'Zapri',

	// Upload Panel
	UploadTitle			: 'Naloži novo datoteko na strežnik',
	UploadSelectLbl		: 'Izberi datoteko za prenos na strežnik',
	UploadProgressLbl	: '(Prenos na strežnik poteka, prosimo počakajte...)',
	UploadBtn			: 'Prenesi izbrano datoteko na strežnik',
	UploadBtnCancel		: 'Prekliči',

	UploadNoFileMsg		: 'Prosimo izberite datoteko iz svojega računalnika za prenos na strežnik.',
	UploadNoFolder		: 'Izberite mapo v katero se bo naložilo datoteko!',
	UploadNoPerms		: 'Nalaganje datotek ni dovoljeno.',
	UploadUnknError		: 'Napaka pri pošiljanju datoteke.',
	UploadExtIncorrect	: 'V tej mapi ta vrsta datoteke ni dovoljena.',

	// Flash Uploads
	UploadLabel			: 'Files to Upload', // MISSING
	UploadTotalFiles	: 'Total Files:', // MISSING
	UploadTotalSize		: 'Total Size:', // MISSING
	UploadAddFiles		: 'Add Files', // MISSING
	UploadClearFiles	: 'Clear Files', // MISSING
	UploadCancel		: 'Cancel Upload', // MISSING
	UploadRemove		: 'Remove', // MISSING
	UploadRemoveTip		: 'Remove !f', // MISSING
	UploadUploaded		: 'Uploaded !n%', // MISSING
	UploadProcessing	: 'Processing...', // MISSING

	// Settings Panel
	SetTitle		: 'Nastavitve',
	SetView			: 'Pogled:',
	SetViewThumb	: 'majhne sličice',
	SetViewList		: 'seznam',
	SetDisplay		: 'Prikaz:',
	SetDisplayName	: 'ime datoteke',
	SetDisplayDate	: 'datum',
	SetDisplaySize	: 'velikost datoteke',
	SetSort			: 'Razvrščanje:',
	SetSortName		: 'po imenu datoteke',
	SetSortDate		: 'po datumu',
	SetSortSize		: 'po velikosti',

	// Status Bar
	FilesCountEmpty : '<Prazna mapa>',
	FilesCountOne	: '1 datoteka',
	FilesCountMany	: '%1 datotek(e)',

	// Size and Speed
	Kb				: '%1 kB',
	KbPerSecond		: '%1 kB/sek',

	// Connector Error Messages.
	ErrorUnknown	: 'Prišlo je do napake. (Napaka %1)',
	Errors :
	{
	 10 : 'Napačen ukaz.',
	 11 : 'V poizvedbi ni bil jasen tip (resource type).',
	 12 : 'Tip datoteke ni primeren.',
	102 : 'Napačno ime mape ali datoteke.',
	103 : 'Vašega ukaza se ne da izvesti zaradi težav z avtorizacijo.',
	104 : 'Vašega ukaza se ne da izvesti zaradi težav z nastavitvami pravic v datotečnem sistemu.',
	105 : 'Napačna končnica datoteke.',
	109 : 'Napačna zahteva.',
	110 : 'Neznana napaka.',
	115 : 'Datoteka ali mapa s tem imenom že obstaja.',
	116 : 'Mapa ni najdena. Prosimo osvežite okno in poskusite znova.',
	117 : 'Datoteka ni najdena. Prosimo osvežite seznam datotek in poskusite znova.',
	118 : 'Začetna in končna pot je ista.',
	201 : 'Datoteka z istim imenom že obstaja. Naložena datoteka je bila preimenovana v "%1".',
	202 : 'Neprimerna datoteka.',
	203 : 'Datoteka je prevelika in zasede preveč prostora.',
	204 : 'Naložena datoteka je okvarjena.',
	205 : 'Na strežniku ni na voljo začasna mapa za prenos datotek.',
	206 : 'Nalaganje je bilo prekinjeno zaradi varnostnih razlogov. Datoteka vsebuje podatke, ki spominjajo na HTML kodo.',
	207 : 'Naložena datoteka je bila preimenovana v "%1".',
	300 : 'Premikanje datotek(e) ni uspelo.',
	301 : 'Kopiranje datotek(e) ni uspelo.',
	500 : 'Brskalnik je onemogočen zaradi varnostnih razlogov. Prosimo kontaktirajte upravljalca spletnih strani.',
	501 : 'Ni podpore za majhne sličice (predogled).'
	},

	// Other Error Messages.
	ErrorMsg :
	{
		FileEmpty		: 'Ime datoteke ne more biti prazno.',
		FileExists		: 'Datoteka %s že obstaja.',
		FolderEmpty		: 'Mapa ne more biti prazna.',

		FileInvChar		: 'Ime datoteke ne sme vsebovati naslednjih znakov: \n\\ / : * ? " < > |',
		FolderInvChar	: 'Ime mape ne sme vsebovati naslednjih znakov: \n\\ / : * ? " < > |',

		PopupBlockView	: 'Datoteke ni možno odpreti v novem oknu. Prosimo nastavite svoj brskalnik tako, da bo dopuščal odpiranje oken (popups) oz. izklopite filtre za blokado odpiranja oken.',
		XmlError		: 'It was not possible to properly load the XML response from the web server.', // MISSING
		XmlEmpty		: 'It was not possible to load the XML response from the web server. The server returned an empty response.', // MISSING
		XmlRawResponse	: 'Raw response from the server: %s' // MISSING
	},

	// Imageresize plugin
	Imageresize :
	{
		dialogTitle		: 'Spremeni velikost slike %s',
		sizeTooBig		: 'Širina ali višina slike ne moreta biti večji kot je originalna velikost (%size).',
		resizeSuccess	: 'Velikost slike je bila uspešno spremenjena.',
		thumbnailNew	: 'Kreiraj novo majhno sličico',
		thumbnailSmall	: 'majhna (%s)',
		thumbnailMedium	: 'srednja (%s)',
		thumbnailLarge	: 'velika (%s)',
		newSize			: 'Določite novo velikost',
		width			: 'Širina',
		height			: 'Višina',
		invalidHeight	: 'Nepravilna višina.',
		invalidWidth	: 'Nepravilna širina.',
		invalidName		: 'Nepravilno ime datoteke.',
		newImage		: 'Kreiraj novo sliko',
		noExtensionChange : 'Končnica datoteke se ne more spremeniti.',
		imageSmall		: 'Izvorna slika je premajhna.',
		contextMenuName	: 'Spremeni velikost',
		lockRatio		: 'Zakleni razmerje',
		resetSize		: 'Ponastavi velikost'
	},

	// Fileeditor plugin
	Fileeditor :
	{
		save			: 'Shrani',
		fileOpenError	: 'Datoteke ni mogoče odpreti.',
		fileSaveSuccess	: 'Datoteka je bila shranjena.',
		contextMenuName	: 'Uredi',
		loadingFile		: 'Nalaganje datoteke, prosimo počakajte ...'
	},

	Maximize :
	{
		maximize : 'Maksimiraj',
		minimize : 'Minimiraj'
	}
};
;