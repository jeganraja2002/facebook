
			var  form=document.getElementById("form");
			var input=document.getElementById("input");
			var content=document.getElementById("content");
			var replace=document.getElementById("replace")
			let object={};

			replace.innerHTML="TEXT"

	form.addEventListener("submit",function (e) {
		e.preventDefault()
		
			replace.innerHTML="TEXT"		
			
			img()
			
			time()
			

			if (input.value=="") {
					console.log("type content must")}

			else if (input.value!="") {
				store()}

		})


	function store() {
				
				object["type"]=input.value
				// console.log(object)
				showcontent();
				}

	function showcontent() {
		content.innerHTML +=`			
				<div class="text-center" style="background:white">
					<p class="text-success fs-3">${object.type}</p>
					<span class="d-flex justify-content-around">
						<i class="bi bi-pencil-square fs-4 drop-shadow-icons text-primary" style="cursor:pointer;" onclick="editcontent(this)"></i>
						<i class="bi bi-x-square fs-4 drop-shadow-icons text-primary" style="cursor:pointer;" onclick="del(this)"></i>
					</span>
				</div>`

		input.value=""
	}

	function editcontent(e) {
		input.value=e.parentElement.previousElementSibling.innerHTML;
		e.parentElement.parentElement.remove();		
	}

	function del(e) {
		e.parentElement.parentElement.remove();
	}





	//................................................... img.................................



			var block=document.getElementById("block")
			var count=document.getElementById("count")
			var prompt=document.getElementById("prompt")


	function img() {
		let a = ["img/person/lilly.jpeg","img/person/lilly1.jpg","img/person/lilly2.jpeg","img/person/lilly3.jpeg"]
		block.classList.remove("display-none-button")
		let ran = Math.floor(Math.random()*a.length)	
		let image = document.querySelector(".imgchange")
			image.src=a[ran]
	}
			

	function dele() {
			block.classList.add("display-none-button")
			replace.innerHTML="TEXT"
			
			if (a==1) {
				count.innerHTML=--a+"like"}

			else if (a==0) {
				count.innerHTML=""+"like"}
			
			else{
				alert("syntax error")}
	}


			let a=0

	function like() {

			if (a==0) {
				count.innerHTML=(++a+"Like")
			}
			else if (a==1) {
				count.innerHTML=--a+"Like"}
			
			else{
				alert("syntax error")}
	}



	function pedit() {
			replace.innerHTML="img edit"
			block.classList.add("display-none-button")
	}


	function share() {
			prompt.classList.remove("modals");
			prompt.setAttribute("class","position-fixed bottom-0 end-0 w-100")
			console.log("gh")
			commentcontent.classList.add("d-none")
	}


	function klose() {
			prompt.classList.add("modals")
			console.log("f")
	}

	function time() {
		
			let time1=new Date();
			var time=document.getElementById("time");
			let time3 =time1.toLocaleTimeString();
			time.innerHTML=time3		
	}




	//comments............................................................................................



			var commentcontent=document.getElementById("commentcontent")
			var input1=document.getElementById("input1")
			var inputtype=document.getElementById("inputtype")
			let object1={}

	function comments() {
			commentcontent.classList.toggle("d-none")
				
	}



		function commentspost() {
			object1["type"]=input1.value
			
			if (input1.value=="") {
			console.log("empty")}	

			else if(input1.value!=""){
			inputtype.innerHTML+=`
			<div>
					<p>${object1.type}</p>
				<span class="d-flex justify-content-around">
					<i class="bi bi-pencil-square fs-4 drop-shadow-icons text-primary" style="cursor:pointer;" onclick="editmessage(this)"></i>
					<i class="bi bi-x-square fs-4 drop-shadow-icons text-primary" style="cursor:pointer;" onclick="delmessage(this)"></i>
				</span>
			</div>`
			input1.value=""}
		}


		function editmessage(e) {
			input1.value=e.parentElement.previousElementSibling.innerHTML;
			e.parentElement.parentElement.remove();
		}

		function delmessage(e) {
			e.parentElement.parentElement.remove();
		}