// let h1= $("h1").text("hello java")
// console.log(h1);

// $('#hide').click(()=>{
//     $("h1").hide()
// })

// $('#show').click(()=>{
//     $("h1").show()
// })

// $('#fadein').click(()=>{
//     $("h1").fadeIn(111)
// })

// $('#fadeout').click(()=>{
//     $("h1").fadeOut(111)
// })

// $('#slideup').click(()=>{
//     $("h1").slideUp()
// })

// $('#slidedown').click(()=>{
//     $("h1").slideDown()
// })

// $('#stop').click(()=>{
//     $("#img").stop()
// })

// $("#animate").click(function(){
//     $("#img").animate({
//       left: '25px',
//       height: '+=15px',
//       width: '+=15px'
//     },1000);
//   }); 

$("#d1").hide()
$("#d2").hide()
$("#d3").hide()
$("#d4").hide()
$("#d5").hide()


$("#register").click(function(){
    $("#d2").toggle()
})

$("#getuser").click(function(){
    $("#d1").toggle()
})

$("#fpassword").click(function(){
    $("#d3").toggle()
})

$("#deleteuser").click(function(){
    $("#d4").toggle()
})

$("#login").click(function(){
    $("#d5").toggle()
})


//     $("document").ready(function(){

//         //ajax-GET request

$("#get").click(function(){
    $.ajax({
        url:"http://localhost:8080/getUsers",
        type:"GET",
        success:function(data){
            console.log(data);
            let temp=`
            <tr>
                     <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>created at</th>
                    <th>status</th>
             </tr>
            `
            for(let ele of data){
                console.log(ele);
                let tdata=`
                <tr>
                    <td>${ele.id}</td>
                    <td>${ele.username}</td>
                    <td>${ele.email}</td>
                    <td>${ele.createdAt}</td>
                    <td>${ele.status}</td>
                </tr>
            `
            temp+=tdata
            } 
            $("#table").html(temp)
            // $('#get').click(function(){
            //     $("#table").html(temp)
            // })
        },
        error:function(data){
            console.log(data);
        }
    })
})

$("#hide").click(function(){
    $("#table").hide()
})

// //ajax post request

/
$(document).ready(function(){

    $("#form").submit(function(event){
    
        event.preventDefault();
    
        var formData = {
            username: $("#exampleinputUsername3").val(),
            email: $("#exampleInputEmail3").val(),
            password: $("#exampleInputPassword3").val(),
          };
      
          $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/register",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function (result) {
              console.log(result);
              alert(" registed successfully")
            },
            error: function (e) {
              console.log("ERROR: ", e);
            },
          });
          $("#exampleinputUsername3").val("")
          $("#exampleInputEmail3").val("")
          $("#exampleInputPassword3").val("")
        })
})

$("#forml").submit(function(event){
    
    event.preventDefault();

    var formData = {
        email: $("#exampleInputEmail4").val(),
        password: $("#exampleInputPassword4").val(),
      };
  
      $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/login",
        data: JSON.stringify(formData),
        dataType: "json",
        success: function (result) {
          console.log(result);
        },
        error: function (e) {
          console.log("ERROR: ", e);
        },
      });
      $("#exampleInputEmail4").val("")
      $("#exampleInputPassword4").val("")
    })

//ajax put request

$("#formfp").submit(function(event){
    event.preventDefault();

    var formData={
        email:$("#exampleInputEmail1").val(),
        password:$("#exampleInputPassword1").val()
    }
    $.ajax({
        method:"PUT",
        url:"http://localhost:8080/forgotPassword",
        contentType: "application/json",
        data: JSON.stringify(formData),
        dataType: "json",
        success: function (result) {
              console.log(result);
            },
        error: function (e) {
              console.log("ERROR: ", e);
            },
          });

          $("#exampleInputEmail1").val("")
          $("#exampleInputPassword1").val("")
    })

//ajax delete request

$("#formdu").submit(function(event){
    event.preventDefault();

    var formData={
        email:$("#exampleInputEmail2").val()
    }

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/deleteUser",
        data:JSON.stringify(formData),
        contentType:"application/json",
        dataType:"json",
        success:function(res){
            console.log(res);
        },
        error:function(e){
            console.log(e);
        }
    })
    $("#exampleInputEmail2").val("")
    
})