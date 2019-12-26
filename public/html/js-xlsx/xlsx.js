$(document).ready(function() {
    const title = document.getElementById('title');
          subject = document.getElementById('subject');
          user = document.getElementById('user');
          context = document.getElementById('context');   

   $(".js-btn-2").click(function() {
     let arr = [];
     let text;

     let date = new Date();
     let today =[date.getFullYear(),date.getMonth() + 1,date.getDate()];

     (today[1] < 10) ? today[1] = "0" + today[1] : today[1] = today[1];
     (today[2] < 10) ? today[2] = "0" + today[2] : today[2] = today[2];
     
     for (let index = 0;index < context.value.length;index = (index + 5)) {
        text = context.value.substring(index,index + 5);
        arr.push(text);
     }  
     
     // 엑셀파일 을 생성함
     var wb = XLSX.utils.book_new();    
        // 제목,주제,사용자,날짜 순으로 옵션을 설정 
        wb.Props = {
             Title: title.value,
             Subject: subject.value,
             Author: user.value,
             CreatedDate: new Date()
         };
             
         // sheet 명칭을 지정
         wb.SheetNames.push("Create Excel");
             var ws_data = [arr];
             var ws = XLSX.utils.aoa_to_sheet(ws_data);
                 wb.Sheets["Create Excel"] = ws;
                 
                 // 파일형식 을 xlsx 로 지정
                 var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
                 function s2ab(s) {
                     var buf = new ArrayBuffer(s.length);
                     var view = new Uint8Array(buf);
                         
                     for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                             return buf;
                 }
             
             // 저장할 파일 이름 지정    
             saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Create Excel.xlsx');
         });
    });