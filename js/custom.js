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
        items: 3,
        dotsEach: 3, // Количество слайдов в одной точке
        // Включаем стандартные кнопки
        // nav: true,

        // Можно еще задать тексты кнопок
        // navText: [
        //     '<i class="fas fa-chevron-circle-left"></i> Влево',
        //     'Вправо <i class="fas fa-chevron-circle-right"></i>'
        // ],
        // Показывать слайды покругу
        loop: true,

        // Отступ
        margin: 20,

        // Автоматическое проигрывание
        // autoplay: true,
        // autoplayTimeout: 2000
    });
});