$('.nav-btn').on('click', function () {
    $('.dashboard_page-container').toggleClass('sbar_collapsed');
});


$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});


$('.input-number').change(function () {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }

});

$(document).ready(function(){
  AOS.init();
    $(".teacher_btn").on("click",function(){
        $("#Teacher_body").removeClass("modal_hide");
        $("#Parent_body").addClass("modal_hide");
        $("#Student_body").addClass("modal_hide");
    });
    $(".parent_btn").on("click",function(){
        $("#Parent_body").removeClass("modal_hide");
        $("#Teacher_body").addClass("modal_hide");
        $("#Student_body").addClass("modal_hide");
    });
    $(".student_btn").on("click",function(){
        $("#Student_body").removeClass("modal_hide");
        $("#Parent_body").addClass("modal_hide");
        $("#Teacher_body").addClass("modal_hide");
    });


    // $(".step1").on("click",function(){
    //     $("#step_cont1").removeClass("modal_hide");
    //     $("#step_cont2").addClass("modal_hide");
    //     $("#step_cont3").addClass("modal_hide");
    // });
    // $(".step2").on("click",function(){
    //     $("#step_cont2").removeClass("modal_hide");
    //     $("#step_cont3").addClass("modal_hide");
    //     $("#step_cont1").addClass("modal_hide");
    // });
    // $(".step3").on("click",function(){
    //     $("#step_cont3").removeClass("modal_hide");
    //     $("#step_cont2").addClass("modal_hide");
    //     $("#step_cont1").addClass("modal_hide");
    // });
    
    $(".school_btn").on("click",function(){
        $(".school_btn").removeClass("active_school");
        $(this).addClass("active_school");
    })



            


    $(function valida() {
        $(".set").click(function () {
                var form = $("#form1");
                var select1 = $("#select1");
                var select2 = $("#select2");

                if (select1.val() !== null & select2.val() !== null ) {
                    $("#step_cont2").removeClass("modal_hide");
                    $("#step_cont3").addClass("modal_hide");
                    $("#step_cont1").addClass("modal_hide");

                } 
                else {
                    $(select1).addClass("invalid");
                    $(select2).addClass("invalid");
                    $("form").removeClass("was-validated");
                    $("#step_cont2").addClass("modal_hide");                              
                }
        });
        $(".set2").click(function () {
                var select3 = $(".select3");
                if (select3.val() !== "") {
                    $("#step_cont3").removeClass("modal_hide");
                    $("#step_cont2").addClass("modal_hide");

                } 
                else {
                    $(select3).addClass("invalid");
                    $("form").removeClass("was-validated");
                    $("#step_cont3").addClass("modal_hide");                              
            }
        });
        var select4 = $(".select4");
        var select5 = $("#select5");
        var selectes = select5,select4
        $(selectes).change(function () {


                if (select4.val() !== "" & select5.val() !== null ) {
                   document.getElementById('set3').disabled = false;
                } 
                else {
                    document.getElementById('set3').disabled = true;
                    $(select4).addClass("invalid");
                    $(select5).addClass("invalid");
                                       
            }
        });
    });


    $("#quest1_button").on("click",function(){
       $("#id1").addClass("active_step");
        $(".active_step").children(".fas").addClass("green_fa");
        $(".people").removeClass("active_people");
        $(".id2").addClass("active_people");
        $(".loader").css("width","20%");
        $(".num").html("1");
    })
    $("#quest2_button").on("click",function(){
        $("#id2").addClass("active_step");
        $(".active_step").children(".fas").addClass("green_fa");
        $(".people").removeClass("active_people");
        $(".id3").addClass("active_people");
        $(".loader").css("width","40%");
        $(".num").html("2");

    })
    $("#quest3_button").on("click",function(){
        $("#id3").addClass("active_step");
        $(".active_step").children(".fas").addClass("green_fa");
        $(".people").removeClass("active_people");
        $(".id4").addClass("active_people");
        $(".loader").css("width","60%");
        $(".num").html("3");

    })
    $("#quest4_button").on("click",function(){
        $("#id4").addClass("active_step");
        $(".active_step").children(".fas").addClass("green_fa");
        $(".people").removeClass("active_people");
        $(".id5").addClass("active_people");
        $(".loader").css("width","80%");
        $(".num").html("4");
    })
    $("#quest5_button").on("click",function(){
        $("#id5").addClass("active_step");
        $(".active_step").children(".fas").addClass("green_fa");
        $(".loader").css("width","100%");
        $(".num").html("5");

    })
    

});






// owl
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
    });
});



// graphic
Highcharts.chart('container', {
    colors: ['#fea900', '#ff7215'],
    title: {
        text: ''
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'At Home',
        data: [0,3,0,0,2,0]
    }, {
        name: 'In Class',
        data: [0,0,1,0,2,1]
    }]
});
// graphic pie
Highcharts.chart('container1', {
    colors: ['#fea900', '#ff7215'],
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Placement test results'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['At Home', 45.0],
            ['In Class', 26.8],
            
        ]
    }]
});