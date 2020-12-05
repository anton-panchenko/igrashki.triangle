window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    let form = document.getElementById("my-form");
    let button = document.getElementById("my-form-button");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style.display = 'none';
        status.innerHTML = "Дякуємо! Ми Вам напишемо!";
    }

    function error() {
        status.innerHTML = "Шкода, але виникла проблема з відправкою.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        dotsEach: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            100: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    let $productsContainers = $('.products-container');
    let $bizyboardContainer = $('#bizyboardContainer');

    $.each($productsContainers, function () {
        $(this).hide(0);
    });
    $bizyboardContainer.show(100);

    $('#categoryNav li').on('click', function (e) {

        e.preventDefault();
        let $categoryContainer= $('#categoryContaner');
        let $title = $('#categoryTitle');
        let $description = $('#categoryDesctiption');

        $.each($productsContainers, function () {
            $(this).hide(100);
        });

        let $that = $(this);
        $.each($productsContainers, function () {
            if ($(this).attr('id') === $that.attr('data-container')) {
                $(this).show(100);
            }
        });

        $.each($('#categoryNav li'), function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        $categoryContainer.slideUp(100);
        $title.html($(this).attr('data-title'));
        $description.html($(this).attr('data-description'));
        $categoryContainer.slideDown(100);

    });

});