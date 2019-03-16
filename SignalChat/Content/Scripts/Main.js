$(document).ready(function () {

	$("#writer-footer > #message-send").click(function () {
		publishPushAndClearMessage();
	});

	$("#writer-footer > #message-text").keypress(event => {
		if (event.keyCode === 13) {
			publishPushAndClearMessage();
		}
	});

	function publishPushAndClearMessage() {
		var message = $("#writer-footer > #message-text").val();
		if (message === "") {
			return;
		}

		// push
		$("#chat-window").append(
			'<div class="message my-message">' +
				'<b>' + user + '</b><b class="message-time">02:30 am</b>' +
				'<p>' + message + '</p>' +
			'</div>'
		);

		// clear
		$("#writer-footer > #message-text").val(null);
	}
});