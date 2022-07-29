
   //Called after application is started.
    window.onload = function() {
        var nub = document.getElementById("preview");
        nub.style.display = "none"; }
    
    window.onclick = function(event) {
        var modal = document.getElementById ('id01');
        var modal2 = document.getElementById('id02');
        if (event.target == modal) { modal.style.display = "none"; }
        if (event.target == modal2) { modal2.style.display = "none"; }
     } 
    
    $(document).ready(function() { 
        $("#imageFile").change(function(event) { 
            var files = event.target.files; 
            var file = files[0]; 
            if (file) { 
                var reader = new FileReader(); 
                reader.onload = function(e) { 
                    var pic = document.getElementById("preview");
                    pic.style.display = "inline";
                    pic.src = e.target.result; }; 
                reader.readAsDataURL(file); }
                }); 
       });
     ////////number of multiple///////
    var multi = 1;
    
    function num2(){
        multi = 2;
        var ii = document.getElementById("ii");
        var iv = document.getElementById("iv");
        var vi = document.getElementById("vi");
        var viii = document.getElementById("viii");
        var x = document.getElementById("x");
        var xii = document.getElementById("xii");
    
        ii.style.background = "#000000";
        iv.style.background = "#FF0000";
        vi.style.background = "#FF0000";
        viii.style.background = "#FF0000"; }
    
    function num4(){
        multi = 4;
        var ii = document.getElementById("ii");
        var iv = document.getElementById("iv");
        var vi = document.getElementById("vi");
        var viii = document.getElementById("viii");
        var x = document.getElementById("x");
        var xii = document.getElementById("xii");
    
        ii.style.background = "#FF0000";
        iv.style.background = "#000000";
        vi.style.background = "#FF0000";
        viii.style.background = "#FF0000"; }
    
    function num6(){
        multi = 6;
        var ii = document.getElementById("ii");
        var iv = document.getElementById("iv");
        var vi = document.getElementById("vi");
        var viii = document.getElementById("viii");
        var x = document.getElementById("x");
        var xii = document.getElementById("xii");
    
        ii.style.background = "#FF0000";
        iv.style.background = "#FF0000";
        vi.style.background = "#000000";
        viii.style.background = "#FF0000"; }
    
    function num8(){
        multi = 8;
        var ii = document.getElementById("ii");
        var iv = document.getElementById("iv");
        var vi = document.getElementById("vi");
        var viii = document.getElementById("viii");
        var x = document.getElementById("x");
        var xii = document.getElementById("xii");
    
        ii.style.background = "#FF0000";
        iv.style.background = "#FF0000";
        vi.style.background = "#FF0000";
        viii.style.background = "#000000"; }
        
    ////image type/////////////
   var type = "image/png";

   function jpeg(){
       type = "image/jpeg";
       var jpeg = document.getElementById("jpeg");
       var png = document.getElementById("png");

       jpeg.style.background = "#000000";
       png.style.background = "#FF0000"; }

 function png(){
       type = "image/png";
       var jpeg = document.getElementById("jpeg");
       var png = document.getElementById("png");

       jpeg.style.background = "#FF0000";
       png.style.background = "#000000"; }
       
     ////operator
    var operator;
    function times(){
        var times = document.getElementById("times");
        var divide = document.getElementById("divide");
       
        times.style.background = "#000000";
        divide.style.background = "#FF0000";
       
        document.getElementById("work").style.display = "block";
       
        operator = 1;  }
     
    function divide(){
        var times = document.getElementById("times");
        var divide = document.getElementById("divide");
       
        times.style.background = "#FF0000";
        divide.style.background = "#000000";
       
        document.getElementById("work").style.display = "block";
       
        operator = 0;  }
     
    //////////download 
     function download() { 
         var piv = document.getElementById ("preview");
         var img = new Image ();
         img.src = piv.src;
                 
         // Create your canvas 
         var canvas = document.createElement("canvas"); 
         var ctx = canvas.getContext("2d"); 
         ctx.drawImage(img, 0, 0);
                 
         if ( operator == 1){           
             var width = img.width * multi; 
             var height = img.height * multi; 
              
             if (width >  5000 || height > 5000){
                 /// width and height cannot be greater than 5000
                 document.getElementById("id01").style.display = "inline";
                 document.getElementById("id02").style.display = "none";
             }
             else{
                 //Specify the resizing result 
                 canvas.width = width; 
                 canvas.height = height; 
                 var ctx = canvas.getContext("2d"); 
                 ctx.drawImage(img, 0, 0, width, height);

                 var dataurl = canvas.toDataURL(type); 
                  
                 ////link
                 var link = document.createElement("a");
                 document.body.appendChild(link);
                 link.download = "pix_image";
                 link.href = dataurl;
                 link.target = '_blank';
                 link.click(); }
             }
         
         else if ( operator == 0){           
             var width = img.width / multi; 
             var height = img.height / multi; 
                 
            if (width <  150 || height < 150){
                 /// width and height cannot be less than 150
                 document.getElementById("id02").style.display = "inline";
                 document.getElementById("id01").style.display = "none";
             }
             else{
                //Specify the resizing result 
                canvas.width = width; 
                canvas.height = height; 
                var ctx = canvas.getContext("2d"); 
                ctx.drawImage(img, 0, 0, width, height);

                var dataurl = canvas.toDataURL(type); 
                  
                 ////link
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "pix_image";
                link.href = dataurl;
                link.target = '_blank';
                link.click(); }
                 }
                }
            
