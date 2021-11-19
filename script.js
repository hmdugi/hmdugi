$(document).ready(function(){
    
    function rand(min,max){
        var result = Math.floor( Math.random()*(max-min+1)+min );
        return result;
    }
    
    function board(){
        $("#thun").attr({
            height: $(window).height(),
            width: $(window).width()
        });
        $("#box1").css({
            height: $(window).height(),
            width: $(window).width()
        });
    }
    board();
    $(window).resize(function(){
        board();
    });
    
    var x0 = $(window).width() / 2;
    var y0 = 0;
    var a;
    var x = x0;
    var y = y0;
    var xx;
    var yy;
    var nnn = 0;
    function lightning(){
        x0 = $(window).width() / 2;
        a += rand(1,5);
        xx = x + rand(-a,a);
        yy = y + rand(1,a);
        
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line2');
        newLine.setAttribute('x1',x);
        newLine.setAttribute('y1',y);
        newLine.setAttribute('x2',xx);
        newLine.setAttribute('y2',yy);
        $("#thun").append(newLine);
        
        nnn += 1;
        var mmm = 10*rand(2,5);
        var ppp = rand(30,35);
        if(nnn == mmm || nnn == ppp){
            var xn = x;
            var yn = y;
            var xxn = xx;
            var yyn = yy;
            var an = a;
            var nnewLine;
            function mini(){
                an += rand(1,5);
                xxn = xn + rand(-an,an);
                yyn = yn + rand(1,an);
        
                nnewLine = document.createElementNS('http://www.w3.org/2000/svg','line');
                nnewLine.setAttribute('id','line3');
                nnewLine.setAttribute('x1',xn);
                nnewLine.setAttribute('y1',yn);
                nnewLine.setAttribute('x2',xxn);
                nnewLine.setAttribute('y2',yyn);
                $("#thun").append(nnewLine);
        
                xn = xxn;
                yn = yyn;
                if(yyn<850){mini();}else{nnn=0;}
            }
            mini();
        }
        
        x = xx;
        y = yy;
        if(yy<850){lightning();}
    }
    
    function thunder(){
        $("#thun").empty();
        $("#thun").show();
        var times = rand(1,2);
        for(i=0;i<times;i++){
            x = x0;
            y = y0;
            xx = x0;
            yy = y0;
            a = 0;
            nnn = 0;
            lightning();
        }
        $("#box1").css("background-color","rgb(55,55,55)");
        var delay = rand(2,4);
        setTimeout(function(){
            $("#thun").fadeOut();
            $("#box1").css("background-color","rgb(0,0,0)");
        }, delay*1000);
        setTimeout(function(){
            thunder();
        }, delay*1500+500);
    }
    
    $("#btn1").click(thunder);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});