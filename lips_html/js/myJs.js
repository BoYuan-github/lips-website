// Open the full screen search box 
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box 
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


// var brands =[{"brand":"Dior","imageUrl":"images/brands/dior.png"},{"brand":"YSL","imageUrl":"images/brands/ysl.png"},{"brand":"Dior","imageUrl":"images/brands/dior.png"},{"brand":"YSL","imageUrl":"images/brands/ysl.png"}];
// var brandsDiv = document.getElementById('brands');
// for(var i=0;i<brands.length;i++){
    
//     // step1
//     var colDiv = document.createElement("div");
//     colDiv.setAttribute('class','col');

//     // step2
//     var img = document.createElement("img");
//     img.setAttribute('src',brands[i]['imageUrl']);
//     img.setAttribute('width','300px');
//     img.setAttribute('height','300px');
    
//     // step3
//     var p = document.createElement("p");
//     p.innerHTML =brands[i]['brand'];

//     // step4
//     colDiv.append(img);
//     colDiv.append(p);
//     brandsDiv.append(colDiv);
// }   


var request = new XMLHttpRequest()
var brandsDiv = document.getElementById('brands');
request.open('GET', 'http://100.25.37.218/lips')
request.send()
request.onload = function () {
    data = JSON.parse(request.responseText)
    console.log(data)
    for(var i=0;i<data.length;i++){
    
        // step1
        var colDiv = document.createElement("div");
        colDiv.setAttribute('class','col');
    
        // step2
        var img = document.createElement("img");
        img.setAttribute('src','https://'+data[i]['imgSrc']);
        img.setAttribute('width','200px');
        img.setAttribute('height','200px');
        
        // step3
        var p = document.createElement("p");
        p.innerHTML =data[i]['productName'];
    
        // step4
        var a = document.createElement('a')
        a.setAttribute('href', 'products/product'+i+'.html')

        // step5
        a.append(img)
        colDiv.append(a);
        colDiv.append(p);
        brandsDiv.append(colDiv);
    }
}

