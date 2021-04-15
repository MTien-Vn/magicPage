$(document).ready(function() {
    alert("Chào bạn, mình đứng đây tuuuuuu chiều !\n Để đợi bạn vào đây đấy");
    var cf = confirm("Bạn tên là Ngọc Anh đúng không nhờ ?");
    if (cf == true) {
        alert("Chắc bạn đang nghĩ: 'Sao cái page này biết hay vậy :))))'");
    } else {
        alert("Đừng lừa tớ, tớ đoán có bao giờ sai đâu :)))");
    }
    alert("Khi bạn nhấn vào link là Page biết\nmọi thông tin về bạn rồi kể cả crush của bạn !");
    alert("Mình đùa thôi :))");

})

$(window).bind("beforeunload", function() {
    alert("Sao bạn vội đi thế, mình chưa hịp chào nhau cơ mà :D");
})

window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "\o/";

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Webkit, Safari, Chrome
});

$('#dontClickMe').click(function() {
    alert("Đã bảo là đừng có click rồi mà :((");
    alert("Thôi, đã click rồi thì thôi.\n Dỗi thực sự á :((");
    alert("Đây là infor của bạn cute nhé :))");
})

$('#clickMeBtn').click(function() {
    var status = $('#clickMeBtn').attr('status');
    if (status === '0') {
        $('#clickMeBtn').attr('status', '1');
        $('#clickMeBtn').css({ "position": "absolute", "right": "0" });
    } else if (status === '1') {
        $('#clickMeBtn').attr('status', '2');
        $('#clickMeBtn').removeAttr('style');
        $('#clickMeBtn').css({ "position": "absolute", "left": "0" });
    } else if (status === '2') {
        $('#clickMeBtn').attr('status', '3');
        $('#clickMeBtn').removeAttr('style');
        alert("Ấn lần nữa đi, nó không chạy nữa đâu !");
    } else if (status === '3') {
        alert("Mình sẽ có câu hỏi cho bạn ở cuối bài nhé !\n Đừng vội rời đi, buồn lắm đó\n Bạn thử kéo xuống dưới xem sao.");
    }
})

$('#bordBtn').click(function() {
    $('#bordBtn').text('Rất thú zị');
})

$('#interesBtn').click(function() {
    alert("Cảm ơn, bạn đáng yêu quá");
    $('#question').removeAttr('style');
    $('#question').css({ "display": "block" });
})

$('#noBtn').click(function() {
    $('#noBtn').text('Có');
})

$('#yesBtn').click(function() {
    alert("Đây là người muốn rủ bạn đi chơi");
    alert("Thế là bạn đồng ý rồi nhé");
})