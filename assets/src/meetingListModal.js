jQuery(document).ready(function($) {
    $(".tt-meeting-list-item .ant-btn").on("click", function() {
        var id = $(this).data("id");
        var getSelectedId = new CustomEvent("getSelectedId", {
            detail: {
                id: id,
                modal: true
            }
        });
        // To trigger the Event
        document.dispatchEvent(getSelectedId);
    });
});

//# sourceURL=webpack://timetics/./assets/src/meetingListModal.js?