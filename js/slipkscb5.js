// ฟังก์ชันเพื่อโหลดฟอนต์
function loadFonts() {
    const fonts = [
        new FontFace('SukhumvitSetThin', 'url(assets/fonts/SukhumvitSet-Thin.woff)'),
        new FontFace('SukhumvitSetText', 'url(assets/fonts/SukhumvitSet-Text.woff)'),
        new FontFace('SukhumvitSetLight', 'url(assets/fonts/SukhumvitSet-Light.woff)'),
        new FontFace('SukhumvitSetMedium', 'url(assets/fonts/SukhumvitSet-Medium.woff)'),
        new FontFace('SukhumvitSetSemiBold', 'url(assets/fonts/SukhumvitSet-SemiBold.woff)'),
        new FontFace('SukhumvitSetBold', 'url(assets/fonts/SukhumvitSet-Bold.woff)'),
        new FontFace('SukhumvitSetExtraBold', 'url(assets/fonts/SukhumvitSet-Extra%20Bold.woff)'),
        new FontFace('SFThonburiLight', 'url(assets/fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(assets/fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(assets/fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(assets/fonts/SFThonburi-Bold.woff)'),
        new FontFace('KanitThin', 'url(assets/fonts/Kanit-Thin.woff)'),
        new FontFace('KanitExtraLight', 'url(assets/fonts/Kanit-ExtraLight.woff)'),
        new FontFace('KanitLight', 'url(assets/fonts/Kanit-Light.woff)'),
        new FontFace('KanitRegular', 'url(assets/fonts/Kanit-Regular.woff)'),
        new FontFace('KanitMedium', 'url(assets/fonts/Kanit-Medium.woff)'),
        new FontFace('KanitSemiBold', 'url(assets/fonts/Kanit-SemiBold.woff)'),
        new FontFace('KanitBold', 'url(assets/fonts/Kanit-Bold.woff)'),
        new FontFace('KanitExtraBold', 'url(assets/fonts/Kanit-ExtraBold.woff)'),
        new FontFace('KanitBlack', 'url(assets/fonts/Kanit-Black.woff)'),
        new FontFace('BangkokTime1', 'url(assets/fonts/Bangkok-Time1.woff)'),
        new FontFace('BangkokTime2', 'url(assets/fonts/Bangkok-Time2.woff)'),
        new FontFace('BangkokMoney', 'url(assets/fonts/Bangkok-Money.woff)'),
        new FontFace('BangkokTime', 'url(assets/fonts/Bangkok-Time.woff)'),
        new FontFace('BangkokMoneyRegular', 'url(assets/fonts/Bangkok-Money-Regular.woff)'),
        new FontFace('BangkokMoneyMedium', 'url(assets/fonts/Bangkok-Money-Medium.woff)'),
        new FontFace('BangkokMoneySemiBold', 'url(assets/fonts/Bangkok-Money-SemiBold.woff)'),
        new FontFace('BangkokMoneyBold', 'url(assets/fonts/Bangkok-Money-Bold.woff)'),
        new FontFace('TTBMoneyRegular', 'url(assets/fonts/TTB-Money-Regular.woff)'),
        new FontFace('TTBMoneyMedium', 'url(assets/fonts/TTB-Money-Medium.woff)'),
        new FontFace('TTBMoneySemiBold', 'url(assets/fonts/TTB-Money-SemiBold.woff)'),
        new FontFace('TTBMoneyBold', 'url(assets/fonts/TTB-Money-Bold.woff)'),
        new FontFace('TTBMoneyExtraBold', 'url(assets/fonts/TTB-Money-ExtraBold.woff)'),
        new FontFace('krungsriRegular', 'url(assets/fonts/krungsri_con-webfont.woff)'),
        new FontFace('krungsriMedium', 'url(assets/fonts/krungsri_con_med-webfont.woff)'),
        new FontFace('krungsriBold', 'url(assets/fonts/krungsri_con_bol-webfont.woff)'),
        new FontFace('THSarabunRegular', 'url(assets/fonts/THSarabun.woff)'),
        new FontFace('THSarabunBold', 'url(assets/fonts/THSarabun-Bold.woff)'),
        new FontFace('THSarabunItalic', 'url(assets/fonts/THSarabun-Italic.woff)'),
        new FontFace('THSarabunBoldItalic', 'url(assets/fonts/THSarabun-BoldItalic.woff)'),
        new FontFace('THSarabunNew', 'url(assets/fonts/THSarabunNew.woff)'),
        new FontFace('THSarabunNewBold', 'url(assets/fonts/THSarabunNew-Bold.woff)'),
        new FontFace('THSarabunNewItalic', 'url(assets/fonts/THSarabunNew-Italic.woff)'),
        new FontFace('THSarabunNewBoldItalic', 'url(assets/fonts/THSarabunNew-BoldItalic.woff)'),
        new FontFace('DBHelvethaicaMonX', 'url(assets/fonts/DBHelvethaicaMonX.woff)'),
        new FontFace('DBHelvethaicaMonXCond', 'url(assets/fonts/DBHelvethaicaMonXCond.woff)'),
        new FontFace('DBHelvethaicaMonXMed', 'url(assets/fonts/DBHelvethaicaMonXMed.woff)'),
        new FontFace('DBHelvethaicaMonXMedCond', 'url(assets/fonts/DBHelvethaicaMonXMedCond.woff)'),
        new FontFace('DBHelvethaicaMonXBold', 'url(assets/fonts/DBHelvethaicaMonXBd.woff)'),
        new FontFace('DBHelvethaicaMonXBoldCond', 'url(assets/fonts/DBHelvethaicaMonXBdCond.woff)'),
        new FontFace('DBHelvethaicaMonXBlk', 'url(assets/fonts/DBHelvethaicaMonXBlk.woff)'),
        new FontFace('DXKrungthaiSemiBold', 'url(assets/fonts/DX-Krungthai-SemiBold.woff)'),
        new FontFace('DXKrungthaiThin', 'url(assets/fonts/DX-Krungthai-Thin.woff)'),
        new FontFace('DXSCB', 'url(assets/fonts/DX-SCB.woff)'),
        new FontFace('DXTTBBold', 'url(assets/fonts/DX-TTB-bold.woff)'),
        new FontFace('DXTTBRegular', 'url(assets/fonts/DX-TTB-regular.woff)'),
        new FontFace('DXKrungthaiBold', 'url(assets/fonts/DX-Krungthai-Bold.woff)'),
        new FontFace('DXKrungthaiMedium', 'url(assets/fonts/DX-Krungthai-Medium.woff)'),
        new FontFace('DXKrungthaiRegular', 'url(assets/fonts/DX-Krungthai-Regular.woff)'),
        new FontFace('TTBMoney', 'url(assets/fonts/TTB Money.woff)'),
        new FontFace('CoreSansLight', 'url(assets/fonts/Core-Sans-E-W01-35-Light.woff)'),
        new FontFace('CoreSansBold', 'url(assets/fonts/Core-Sans-N-65-Bold.woff)'),
        new FontFace('THSarabun', 'url(assets/fonts/THSarabun.woff)')
    ];

    return Promise.all(fonts.map(font => font.load().catch(e => console.warn(e)))).then(function(loadedFonts) {
        loadedFonts.forEach(function(font) {
            if (font) document.fonts.add(font);
        });
    });
}

window.onload = function() {
    setCurrentDateTime();
    loadFonts().then(function() {
        document.fonts.ready.then(function() {
            updateDisplay();
        });
    }).catch(function() {
        updateDisplay();
    });
};

function setCurrentDateTime() {
    const now = new Date();
    const localDateTime = now.toLocaleString('sv-SE', { timeZone: 'Asia/Bangkok', hour12: false });
    const formattedDateTime = localDateTime.replace(' ', 'T');
    const dtElem = document.getElementById('datetime');
    if(dtElem && !dtElem.value) dtElem.value = formattedDateTime;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDate(date) {
    if (!date || date === '-') return '-';
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const parts = formattedDate.split(' ');
    if (parts.length < 3) return formattedDate;
    const day = padZero(parts[0]);
    const month = months[new Date(date).getMonth()];
    let year = parts[2];
    year = `25${year}`;
    return `${day} ${month} ${year}`;
}

function generateUniqueID() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const randomNumber = Math.floor(Math.random() * 10);
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 0; i < 16; i++) {
        if (Math.random() < 0.05) randomString += Math.floor(Math.random() * 10);
        else randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `${year}${month}${day}${randomNumber}${randomString}`;
}

function loadImage(src) {
    return new Promise((resolve) => {
        if (!src) { resolve(null); return; }
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null); 
        img.src = src;
    });
}

window.updateDisplay = async function() {
    const sendername = document.getElementById('sendername')?.value || '-';
    const senderaccount = document.getElementById('senderaccount')?.value || '-';
    const receivername = document.getElementById('receivername')?.value || '-';
    const receiveraccount = document.getElementById('receiveraccount')?.value || '-';
    const bank = document.getElementById('bank')?.value || '-';
    const amount11 = document.getElementById('amount11')?.value || '-';
    const datetime = document.getElementById('datetime')?.value || '-';
    const QRCode = document.getElementById('QRCode')?.value || '';
    
    const noteToggleElem = document.getElementById('modeSwitch') || document.getElementById('noteToggle');
    const isNoteMode = noteToggleElem ? noteToggleElem.checked : false;
    const AideMemoire = document.getElementById('AideMemoire') ? document.getElementById('AideMemoire').value : '-';

    const selectedImage = document.getElementById('imageSelect')?.value || '';
    const backgroundSelect = document.getElementById('backgroundSelect')?.value || '';

    let bankLogoUrl = '';
    switch (bank) {
        case 'กสิกรไทย': bankLogoUrl = 'assets/image/logo/A-KBANK.png'; break;
        case 'กรุงไทย': bankLogoUrl = 'assets/image/logo/A-KTB.png'; break;
        case 'กรุงเทพ': bankLogoUrl = 'assets/image/logo/A-BBL.png'; break;
        case 'ไทยพาณิชย์': bankLogoUrl = 'assets/image/logo/A-SCB.png'; break;
        case 'กรุงศรี': bankLogoUrl = 'assets/image/logo/A-BAY.png'; break;
        case 'ทีเอ็มบีธนชาต': bankLogoUrl = 'assets/image/logo/A-TTB.png'; break;
        case 'ออมสิน': bankLogoUrl = 'assets/image/logo/A-O.png'; break;
        case 'ธ.ก.ส.': bankLogoUrl = 'assets/image/logo/A-T.png'; break;
        case 'อาคารสงเคราะห์': bankLogoUrl = 'assets/image/logo/A-C.png'; break;
        case 'เกียรตินาคินภัทร': bankLogoUrl = 'assets/image/logo/A-K.png'; break;
        case 'ซีไอเอ็มบีไทย': bankLogoUrl = 'assets/image/logo/A-CIMB.png'; break;
        case 'ยูโอบี': bankLogoUrl = 'assets/image/logo/A-UOB2.png'; break;
        case 'แลนด์ แอนด์ เฮาส์': bankLogoUrl = 'assets/image/logo/A-LHBANK.png'; break;
        case 'ไอซีบีซี': bankLogoUrl = 'assets/image/logo/A-ICBC.png'; break;
        case 'พร้อมเพย์เบอร์': bankLogoUrl = 'assets/image/logo/P-SCB.png'; break;
        case 'พร้อมเพย์บัตรประชาชน': bankLogoUrl = 'assets/image/logo/P-SCB1.1.png'; break;
        case 'พร้อมเพย์ e-Wallet TrueMoney': bankLogoUrl = 'assets/image/logo/P-SCB2.png'; break;
        case 'พร้อมเพย์ e-Wallet Jaew': bankLogoUrl = 'assets/image/logo/P-SCB2.png'; break;
        case 'พร้อมเพย์ e-Wallet K Plus W': bankLogoUrl = 'assets/image/logo/P-SCB2.png'; break;
        case 'MetaAds': bankLogoUrl = 'assets/image/logo/Meta3.png'; break;
        default: bankLogoUrl = '';
    }

    const formattedDate = formatDate(datetime);
    let formattedTime = '';
    if (datetime && datetime !== '-') {
        const d = new Date(datetime);
        if (!isNaN(d.getTime())) formattedTime = d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    }

    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const senderNameFont = isNoteMode ? '42.3px DBHelvethaicaMonXMed' : '44.3px DBHelvethaicaMonXMed';
    ctx.font = senderNameFont;
    
    const senderNameWidth = ctx.measureText(sendername).width;
    const senderImageWidth = 55;
    const senderSpacing = 10;
    const senderTotalWidth = senderImageWidth + senderSpacing + senderNameWidth;
    
    const alignRightEdge = isNoteMode ? 698 : 769; 
    const senderStartX = alignRightEdge - senderTotalWidth;
    
    const senderImageX = senderStartX;
    const senderNameX = senderImageX + senderImageWidth + senderSpacing;
    
    const receiverNameWidth = ctx.measureText(receivername).width;
    const bankLogoWidth = 55;
    const receiverSpacing = 10;
    const receiverTotalWidth = bankLogoWidth + receiverSpacing + receiverNameWidth;
    
    const receiverStartX = alignRightEdge - receiverTotalWidth;
    const bankLogoX = receiverStartX;
    const receiverNameX = bankLogoX + bankLogoWidth + receiverSpacing;

    let backgroundImageSrc = backgroundSelect || 'assets/image/bs/SCB1.jpg';

    if (isNoteMode) {
        const bgNoteElem = document.getElementById('bg_note');
        if(bgNoteElem && bgNoteElem.value) {
            backgroundImageSrc = bgNoteElem.value;
        }
        
        backgroundImageSrc = backgroundImageSrc.replace('.jpt', '.jpg');

        if (!backgroundImageSrc.includes('T.jpg')) {
            backgroundImageSrc = backgroundImageSrc.replace('.jpg', 'T.jpg');
        }
    } else {
        backgroundImageSrc = backgroundImageSrc.replace('.jpt', '.jpg');
    }

    let originalBgSrc = backgroundImageSrc; 

    if (isNoteMode) {
        if (bank === 'พร้อมเพย์ e-Wallet TrueMoney' || bank === 'พร้อมเพย์ e-Wallet Jaew' || bank === 'พร้อมเพย์ e-Wallet K Plus W') {
            canvas.width = 743; canvas.height = 1399;
            backgroundImageSrc = backgroundImageSrc.replace('/SCB', '/SCBB'); 
        } else if (bank === 'MetaAds') {
            canvas.width = 743; canvas.height = 1349;
            backgroundImageSrc = backgroundImageSrc.replace('/SCB', '/SSCB'); 
        } else {
            canvas.width = 743; canvas.height = 1280;
        }
    } else {
        if (bank === 'พร้อมเพย์ e-Wallet TrueMoney' || bank === 'พร้อมเพย์ e-Wallet Jaew' || bank === 'พร้อมเพย์ e-Wallet K Plus W') {
            canvas.width = 818; canvas.height = 1413;
            backgroundImageSrc = backgroundImageSrc.replace('/SCB', '/SCBB'); 
        } else if (bank === 'MetaAds') {
            canvas.width = 818; canvas.height = 1356;
            backgroundImageSrc = backgroundImageSrc.replace('/SCB', '/SSCB'); 
        } else {
            canvas.width = 818; canvas.height = 1280;
        }
    }

    let bgImg = await loadImage(backgroundImageSrc);
    let pathErrorLog = backgroundImageSrc;

    if (!bgImg && backgroundImageSrc !== originalBgSrc) {
        bgImg = await loadImage(originalBgSrc);
        pathErrorLog = originalBgSrc; 
    }

    const [bankLogoImg, senderLogoImg, ppLogoImg, metaLogoImg, stickerImg] = await Promise.all([
        loadImage(bankLogoUrl),
        loadImage('assets/image/logo/A-SCB.png'),
        loadImage('assets/image/logo/P-SCB1.png'),
        loadImage('assets/image/logo/Meta3.png'),
        loadImage((selectedImage && !selectedImage.includes('NO.png')) ? selectedImage : null)
    ]);

    if (bgImg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = '#1e293b'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff4d4f'; ctx.font = '30px Kanit, sans-serif';
        ctx.fillText('❌ หาไฟล์พื้นหลังนี้ไม่เจอ!', 50, canvas.height / 2 - 40);
        ctx.fillStyle = '#ffffff'; ctx.font = '22px Kanit, sans-serif';
        ctx.fillText('Path: ' + pathErrorLog, 50, canvas.height / 2);
    }

    if (isNoteMode) {
        if(senderLogoImg) ctx.drawImage(senderLogoImg, senderImageX, 408, senderImageWidth, 55);
        drawText(ctx, `${sendername}`, senderNameX, 443.8, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
        drawText(ctx, `${senderaccount}`, 698, 488.4, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
        drawText(ctx, `${formattedDate} - ${formattedTime}`, 370, 301.9, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 3, 0, 0, 800, 0);

        if (bank === 'พร้อมเพย์ e-Wallet TrueMoney') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 520.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 424.5, 520.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 490, 557.0, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 698, 602.3, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (TrueMoney)`, 42.3, 836.4, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${AideMemoire}`, 42.3, 953, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 698, 717.2, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 370, 342.8, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        
        } else if (bank === 'พร้อมเพย์ e-Wallet Jaew') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 520.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 424.5, 520.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 490, 557.0, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 698, 602.3, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (Jaew)`, 42.3, 836.4, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${AideMemoire}`, 42.3, 953, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 698, 717.2, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 370, 342.8, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);

        } else if (bank === 'พร้อมเพย์ e-Wallet K Plus W') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 520.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 424.5, 520.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 490, 557.0, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 698, 602.3, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (K Plus W)`, 42.3, 836.4, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${AideMemoire}`, 42.3, 953, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 698, 717.2, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 370, 342.8, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        
        } else if (bank === 'MetaAds') {
            if(metaLogoImg) ctx.drawImage(metaLogoImg, 406, 520.7, 53, 53);
            drawText(ctx, `META ADS (KGP)`, 471, 557.0, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `Biller ID : ${receivername}`, 698, 602.3, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `หมายเลขอ้างอิง 1 : ${receiveraccount}`, 698, 640, 35.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `หมายเลขอ้างอิง 2 : ${receiveraccount}`, 698, 674, 35.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${AideMemoire}`, 42.3, 903, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 698, 785.5, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 370, 342.8, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        
        } else {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 520.7, bankLogoWidth, 55);
            drawText(ctx, `${receivername}`, receiverNameX, 557.3, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 698, 602.3, 35.0, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${AideMemoire}`, 42.3, 836.4, 32.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${amount11}`, 698, 717.2, 42.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 370, 342.8, 35.0, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        }

    } else {
        if(senderLogoImg) ctx.drawImage(senderLogoImg, senderImageX, 449, senderImageWidth, 55);
        drawText(ctx, `${sendername}`, senderNameX, 488.4, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
        drawText(ctx, `${senderaccount}`, 769, 538, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
        drawText(ctx, `${formattedDate} - ${formattedTime}`, 407, 332.4, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 3, 0, 0, 800, 0);

        if (bank === 'พร้อมเพย์ e-Wallet TrueMoney') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 573.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 486, 573.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 551, 613.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 769, 662.4, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (TrueMoney)`, 47, 924.5, 35.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 769, 791.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 407, 377.5, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        
        } else if (bank === 'พร้อมเพย์ e-Wallet Jaew') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 573.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 486, 573.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 551, 613.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 769, 662.4, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (Jaew)`, 47, 924.5, 35.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 769, 791.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 407, 377.5, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);

        } else if (bank === 'พร้อมเพย์ e-Wallet K Plus W') {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 573.7, bankLogoWidth, 55);
            if(ppLogoImg) ctx.drawImage(ppLogoImg, 486, 573.7, 55, 55);
            drawText(ctx, `เติมเงินพร้อมเพย์`, 551, 613.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 769, 662.4, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${receivername} (K Plus W)`, 47, 924.5, 35.5, 'DXSCB', '#76737b', 'left', 1.5, 3, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 769, 791.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 407, 377.5, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);

        } else if (bank === 'MetaAds') {
            if(metaLogoImg) ctx.drawImage(metaLogoImg, 464, 573.7, 53, 53);
            drawText(ctx, `META ADS (KGP)`, 530, 613.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `Biller ID : ${receivername}`, 769, 662.4, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 800, 0);
            drawText(ctx, `หมายเลขอ้างอิง 1 : ${receiveraccount}`, 769, 703, 39, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 800, 0);
            drawText(ctx, `หมายเลขอ้างอิง 2 : ${receiveraccount}`, 769, 740, 39, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 800, 0);
            drawText(ctx, `${amount11}`, 769, 865.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 407, 377.5, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        
        } else {
            if(bankLogoImg) ctx.drawImage(bankLogoImg, bankLogoX, 573.7, bankLogoWidth, 55);
            drawText(ctx, `${receivername}`, receiverNameX, 613.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'left', 1.5, 3, 0, 0, 1500, 0);
            drawText(ctx, `${receiveraccount}`, 769, 662.4, 38.5, 'DXSCB', '#76737b', 'right', 1.5, 1, 0, 0, 500, 0);
            drawText(ctx, `${amount11}`, 769, 791.0, 44.3, 'DBHelvethaicaMonXMed', '#47424e', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `รหัสอ้างอิง: ${generateUniqueID()}`, 407, 377.5, 38.5, 'DXSCB', '#76737b', 'center', 1.5, 1, 0, 0, 800, 0);
        }
    }

    drawText(ctx, `${QRCode}`, 238.9, 599.0, 33, 'DBHelvethaicaMonXMed', '#4e4e4e', 'left', 1.5, 5, 0, 0, 500, 0);

    if (stickerImg) {
        ctx.drawImage(stickerImg, 0, 0, canvas.width, canvas.height);
    }
};

function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor || 'transparent';
    ctx.shadowBlur = shadowBlur || 0;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
        const words = [...segmenter.segment(paragraph)].map(segment => segment.segment);

        let lines = [];
        let currentLine = '';

        words.forEach((word) => {
            const testLine = currentLine + word;
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

            if (testWidth > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) {
            lines.push(currentLine);
        }

        lines.forEach((line, index) => {
            let currentX = x;

            if (align === 'center') {
                currentX = x - (ctx.measureText(line).width / 2) - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }

            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
        currentY += lineHeight;
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' });
    const characters = [...segmenter.segment(text)].map(segment => segment.segment);
    let currentPosition = x;

    characters.forEach((char, index) => {
        ctx.fillText(char, currentPosition, y);
        const charWidth = ctx.measureText(char).width;
        currentPosition += charWidth + letterSpacing;
    });
}

window.downloadImage = function() {
    const canvas = document.getElementById('canvas');
    if(!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'scb_slip.png';
    link.click();
}

document.getElementById('generate')?.addEventListener('click', updateDisplay);

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}