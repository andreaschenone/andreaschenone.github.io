class Site {
    constructor() {
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.bindWindowScroll();
    }

    bindWindowScroll() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $("#header").addClass("scroll");
            } else {
                $("#header").removeClass("scroll");
            }
        });
    }
}