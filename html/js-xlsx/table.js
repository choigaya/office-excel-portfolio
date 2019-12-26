// HTML 코드 로 작성한 테이블을 엑셀 로 변환 하는 작업
// xlsx로 파일을 쓰게 됨.

$(document).ready(function() {
    
   $(".js-btn-1").click(function() {
      // sheet 이름을 지정
      // xlsx 형식으로 저장
      var wb = XLSX.utils.table_to_book(document.getElementById('earthquake-table'), {sheet:'kma-earthquake-table'}); 
      var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'}); 
    
    
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'kma-earthquake-table.xlsx');
   }); 
});