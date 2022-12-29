$(document).ready(function(){
        $.get("http://localhost:3000/ProfileArtist/${name}",
        function (data, status) {
            console.log(status);    
            console.log(data);
            
            for(var i = 0; i < data.length; i++) {
                var obj = data[i];
                let str = (obj.image); 
                console.log(str);
                let str3 = str.replace("C:\\fakepath\\", "./images/");
                console.log(str3);
             
                document.getElementById("posts").innerHTML+=`
                <div class="d-flex align-items-center justify-content-center">
                    <div  class="card" style="width: 48rem;margin-top: 50px;box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
                        <span style="padding: 8px;">Profile Name</span>
                        <img src="${str3}" class="card-img-top img" alt="post_image" />
                        <div class="card-body">
                            <a href="#" class="btn btn-light" style="font-size: 43px; padding: 0px;color: black;">&#9825;</a>
                            <h5 class="card-title">312 Likes</h5>
                        </div>
                    </div>
                </div>`;
            }
        });
    })