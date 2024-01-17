			var form=document.getElementById("form");
			var uname=document.getElementById("uname");
			var uemail=document.getElementById("uemail");
			var upass=document.getElementById("upass");
			var ulname=document.getElementById("ulname");
			var error=document.querySelectorAll(".error")
			
		form.addEventListener("submit",function(e){
				e.preventDefault();
		
			test(uname,0,"type first name")
			test(ulname,1,"type last name")
			test(uemail,2,"type email")
			test(upass,3,"type password")
			})

		function test(id,index,message){
			
			if(id.value.trim()==""){
			id.style.border="1px solid red";
			error[index].innerHTML=message;
			error[index].style.color="red";
			error[index].style.transition="0.5s";
			id.style.transition="0.5s";}
			
			else{
			id.style.border="1px solid green";
			error[index].innerHTML="";			
			storage()}
			}
			
		function storage(){
			
			if(uname.value&&uemail.value&&upass.value&&ulname.value){
			localStorage.setItem("data",JSON.stringify(uname.value))
			localStorage.setItem("data1",JSON.stringify(ulname.value))
			localStorage.setItem("data2",JSON.stringify(uemail.value))
			localStorage.setItem("data3",JSON.stringify(upass.value))
			location.href="login.html"}
			
			else{alert("dcdd")}
			}
			
			
			
			
