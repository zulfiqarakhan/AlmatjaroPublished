// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var InitDataTable = function (selector) {
    $(selector).DataTable();


}

var SwalDelete = function (Id, Url, refreshList) {
    swal.fire({
        title: "Delete?",
        text: "Please ensure and then confirm!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: !0
    }).then(function (e) {
        if (e.value === true) {
            $.ajax({
                type: 'POST',
                url: Url,
                data: { Id: Id },
                //dataType: 'JSON',
                success: function (results) {
                    if (results.success === true) {
                        swal.fire("Done!", results.message, "success");
                        if (refreshList != null && refreshList != undefined) {
                            refreshList();
                        }
                    } else {
                        swal.fire("Error!", results.message, "error");
                    }
                }
            });

        } else {
            e.dismiss;
        }
    }, function (dismiss) {
        return false;
    })
};
var RefreshPage = function () {
    setTimeout(function () {
        location.reload();
    },1500);   
};

var isNullOrEmpty = function (value) {
    return !(typeof value === "string" && value.length > 0);
}

