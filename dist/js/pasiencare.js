$(document).ready(function () {
    $('.slider-testimony-home').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        leftMode: true,
        focusOnSelect: false
    });

    $('.single-slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        focusOnSelect: false
    });


    // SideBar

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });


    $('#inputGroupFile02').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    })


    // DatePicker
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepicker_start_sertification').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepicker_end_sertification').datepicker({
        uiLibrary: 'bootstrap4'
    });


    // Append Element on click
    $('#appendService').click(function () {
        $('#serviceAppend').append(
            '<div class="row mb-3">' +
                '<div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">Jenis Layanan</label>' +
                        '<div class="col-12">' +
                            '<select class="form-control">' +
                            '<option value="Perawatan Luka">Perawatan Luka</option>' +
                            '<option value="Stoma">Stoma</option>' +
                            '<option value="Khitan">Khitan</option>' +
                            '<option value="Stroke">Stroke</option>' +
                            '<option value="Penyakit Jantung">Penyakit Jantung</option>' +
                        '</select>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">Harga</label>' +
                        '<div class="col-12">' +
                            '<div class="input-group border rounded">' +
                                '<div class="input-group-prepend">' +
                                    '<span class="input-group-text">Rp</span>' +
                                '</div>' +
                                '<input type="number" class="form-control border-0 pl-0">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });

    $('#appendSupport').click(function () {
        $('#supportAppend').append(
            '<div class="row mb-3">' +
                '<div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">Nama</label>' +
                        '<div class="col-12">' +
                            '<input type="text" class="form-control">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">No Anggota</label>' +
                        '<div class="col-12">' +
                            '<input type="text" class="form-control">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">Profesi</label>' +
                        '<div class="col-12">' +
                            '<select class="form-control">' +
                                '<option value="Perawat">Perawat</option>' +
                                '<option value="Dokter">Dokter</option>' +
                                '<option value="Dokter Bedah">Dokter Bedah</option>' +
                            '</select>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });
    
    $('#addJobInfo').click(function () {
       $('#jobInfoAppend').append(
           '<div class="row">' +
                '<div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">' +
                    '<div class="row">' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Unit Kerja</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Unit Kerja">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Alamat</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Alamat">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">No Telepon</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="No Telepon">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">No SIP</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="No SIP">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">&nbsp;</label>' +
                        '<div class="col-12">' +
                            '<a href="app_member_pekerjaan.html" class="invisible-link">' +
                                '<button type="button" class="btn btn-primary-default btn-block">Detail</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
           '</div>'
       );
    });


    $('#addCompetenceInfo').click(function () {
        $('#competenceInfoAppend').append(
            '<div class="row">' +
                '<div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">' +
                    '<div class="row">' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Kompetensi</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Kompetensi">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">No Sertifikat</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="No Sertifikat">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Masa Berlaku</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Masa Berlaku">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Lembaga</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Lembaga">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">&nbsp;</label>' +
                        '<div class="col-12">' +
                            '<a href="app_member_pekerjaan.html" class="invisible-link">' +
                                '<button type="button" class="btn btn-primary-default btn-block">Detail</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });


    $('#addEducationInfo').click(function () {
        $('#educationInfoAppend').append(
            '<div class="row">' +
                '<div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">' +
                    '<div class="row">' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Jenjang</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Jenjang">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Institusi</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Institusi">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Jurusan</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Jurusan">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
                            '<div class="row form-group">' +
                                '<label class="col-12 col-form-label fw5">Tahun Lulus</label>' +
                                '<div class="col-12">' +
                                    '<input type="text" class="form-control" placeholder="Tahun Lulus">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">' +
                    '<div class="row form-group">' +
                        '<label class="col-12 col-form-label fw5">&nbsp;</label>' +
                        '<div class="col-12">' +
                            '<a href="app_member_pendidikan.html" class="invisible-link">' +
                                '<button type="button" class="btn btn-primary-default btn-block">Detail</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });

});

function trainingStatementNo(){
    document.getElementById('trainingForm').style.display = 'none';
}
function trainingStatementYes(){
    document.getElementById('trainingForm').style.display = 'block';
}


// Photo Profile Upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imgPicker')
                .attr('src', e.target.result);
            $('#imgPicker').addClass('d-block');
            $('#emptyPhotoProfile').addClass('d-none');
            $('#fillPhotoProfile').removeClass('d-none');
            $('#saveBtnPhotoProfile').removeAttr('disabled');
        };

        reader.readAsDataURL(input.files[0]);
    }
}


// Multi Select Form
(function ($) {
    $(function () {
        $('.multi-select-form').fSelect();
    });
})(jQuery);


var scrollPixel = 0;
$(window).scroll(function() {
    if($(this).scrollTop() > scrollPixel) {
        if ($(this).scrollTop() > 150){
            $('header').addClass("after-scroll");
        }
    } else {
        if ($(this).scrollTop() < 150){
            $('header').removeClass("after-scroll");
        }
    }
    scrollPixel = $(this).scrollTop();
});