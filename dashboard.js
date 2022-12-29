$(document).ready(function () {


    $("#btn_prof").click(function () {
        $("#dashboard_form").toggle();
        $(".profile").hide();


    });
    $("#btn_contact").click(function () {
        alert("kindly mail your Queries on admin@kalakendra.com")
    });

    $("#dashboard_btn").click(function () {
        let catego = $("#iscat").val();
        let ppic = $("#pcustomFile").val();
        let img1 = $("#icustomFile").val();
        let video = $("#vcustomFile").val();
        let bio = $("#bio").val();
        let eved = $("#eved").val();
        let eventFees = $("#Evfesss").val();
        let RegFees = $("#Rfees").val();
        console.log("sajhgavsd");
        $.post("http://localhost:3000/ProfileArtist",
            {
                categ: catego,
                profile_pic: ppic,
                image: img1,
                video: video,
                bio: bio,
                Event_details: eved,
                event_fees:eventFees,
                R_Fees:RegFees
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });

    });
   
});
