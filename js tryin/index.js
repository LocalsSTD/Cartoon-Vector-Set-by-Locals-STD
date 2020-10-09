$("a[href$='booya']").click(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#magic'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;
    
    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});