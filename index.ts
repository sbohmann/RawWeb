
import { Base } from './Base';

$(function () {
    let bodyContent = $("#bodyContent");
    bodyContent.mouseover(function () {
        bodyContent.addClass("materialize-red-text");
    });
    bodyContent.mouseout(function () {
        bodyContent.removeClass("materialize-red-text");
        Base.create(1).f()
    })
});
