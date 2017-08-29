/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (){
    
    var bstop1 = false;
    var bstop2 = false;
    var bstop3 = false;
    
    function pageSw(){
        var pw = new pageSwitch('pages',{
            duration:1000,
            start:0,
            direction:1,
            loop:false,
            ease:'ease',
            transition: 'flip3d',
            freeze:false,
            mouse:true,
            mousewheel:true,
            arrowkey:true
        });

        pw.on('after', function (index){
            
            $('#pageMenu').children('li').attr('class', '')
            $('#pageMenu').children('li').eq(index)
            $('#pageMenu').children('li').eq(index).addClass('active')
                       
            if( index == $('#pageMenu').children('li').length-1){
                $('.up').hide()
            }else{
                $('.up').show()
            }
        })
        window.pw = pw;
    }
    
    $('#js-infotext').on('keyup', function (e){
        if(e.keyCode=="13"){
            $("#js-infobtn").trigger("click");
        }
    })
    
    $('#error').on('click', function (){
        $(this).hide()
        $('#js-infotext').focus()
    })
    
    /* initialized left li list */
    function build(){
        var len = $('.page').length;
        var str = '';
        // for(var i=0; i<len; i++){
        //     if(i == 0){
        //         str += '<li class="active" data-index="'+i+'"></li>';
        //     } else {
        //         str += '<li class="" data-index="'+i+'"></li>';
        //     }
        // }
        str += '<li id="li1" class="active" data-index="'+0+'"></li>';
        str += '<li id="li2" data-index="'+1+'"></li>';
        str += '<li id="li3" data-index="'+2+'"></li>';
        str += '<li id="li4" data-index="'+3+'"></li>';
        str += '<li id="li5" data-index="'+4+'"></li>';
        str += '<li id="li6" data-index="'+5+'"></li>';

       
        $('#pageMenu').html(str)
    }
    
    
    function init(){
        pageSw()
        build() 
        
        // $('.js-returnhome').on('click', function (){
        //     pw.slide(0)
        // })
        
        $('#pageMenu').on('click', 'li', function (){
            var index = $(this).attr('data-index');
            pw.slide(index)
        })
    }
    init()
})()
