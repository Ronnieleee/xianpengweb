(function($){
    function formResult(msg, state) {
        layer.closeAll();
        if(state === 0) {
            if(msg !== '' && msg !== null) {
                layer.alert(msg, {icon: 5});
            }else{
                layer.alert("error!", {icon: 5});
            }

        } else {
            if(msg !== '' && msg !== null){
                layer.confirm(msg, {icon: 6, title:'系统提示', btn: ['确定']}, function(index){
                    location.href = $('#post-form').attr('callback');
                });
            }else{
                location.href = $('#post-form').attr('callback');
            }
        }
    }

    $(function(){
        window.formResult = formResult;
        $("#post-form").submit(function () {
            layer.load(2);
            return true;
        });
    })

})(jQuery);

