				var form1=document.getElementById("form1")
				var uemail1=document.getElementById("uname1")
				var upass1=document.getElementById("upass1")
				var error1=document.querySelectorAll(".error1")
				
		form1.addEventListener("submit",function(e1){
				e1.preventDefault();
				
				test1(uemail1,0,"type e-mail")
				test1(upass1,1,"type password")
				
				let checkuemail1=JSON.parse(localStorage.getItem("data2"))
				let checkupass1=JSON.parse(localStorage.getItem("data3"))

				if(uemail1.value==checkuemail1&&upass1.value==checkupass1){	
				   location.href="home.html"
				}
				
				else{
						// upass1.style.border="1px solid green"
						alert("password wrong")
				}
				
				
		})


		function test1(check,index,message){
					
					if(check.value.trim()==""){
						error1[index].innerHTML=message
						error1[index].style.color="red"
						check.style.border="1px solid red"
						
					}
					else{
						error1[index].innerHTML=""
						check.style.border="1px solid green"
						
					}
		
		}
		
