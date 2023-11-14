function Div_menu() {
	function click_dropdown(id) {
		let class_div_sub_menu_pc = "bg-white border-gray-200 shadow-sm border-b block md:hidden"
		let class_div_sub_menu_mobile = "flex flex-col w-full justify-center items-start px-[30px] pt-[10px] pb-[20px] space-y-4 border-b-4"
	
		if (id == "news" && !toggle_menu_news) {
			document.getElementById("menu_dropdown_news").className = class_div_sub_menu_pc
			document.getElementById("div_menu_mobile_news").className = class_div_sub_menu_mobile
			toggle_menu_news = true
		} else {
			document.getElementById("menu_dropdown_news").className = "hidden"
			document.getElementById("div_menu_mobile_news").className = "hidden"
			toggle_menu_news = false
		}

		if (id == "archive" && !toggle_menu_archive) {
			document.getElementById("menu_dropdown_archive").className = class_div_sub_menu_pc
			document.getElementById("div_menu_mobile_archive").className = class_div_sub_menu_mobile
			toggle_menu_archive = true
		} else {
			document.getElementById("menu_dropdown_archive").className = "hidden"
			document.getElementById("div_menu_mobile_archive").className = "hidden"
			toggle_menu_archive = false
		}
	}


	// 햄버거 버튼 클릭
	function click_hamburger() {
		if (toggle_menu_hamburger) {
			document.getElementById("div_menu_mobile").className = "hidden"
			toggle_menu_hamburger = false
		} else {
			document.getElementById("div_menu_mobile").className = "hidden md:flex md:flex md:flex-col md:visible md:mt-[20px]"
			toggle_menu_hamburger = true
		}
	}

	function Div_menu_logo() {
		return (
			<a href="/" class="flex items-center text-xl font-bold w-[150px] min-w-[150px] max-w-[150px]">
				JK통계컨설팅
			</a>
		)
	}

	function Div_menu_hamburger() {
		return (
			<div class="hidden md:flex md:visible">
				<button type="button" onClick={() => click_hamburger()}
						class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
							   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<span class="sr-only">Open main menu</span>
					<img src="https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_hamburger.svg" class="w-8 h-8" />
				</button>
			</div>
		)
	}

	function Div_menu_pc_title(props) {
		return (
			<button id={props.id} class="text-sm w-[120px] h-[25px] rounded-lg hover:bg-gray-200"
					onClick={props.function}>
				{props.title}
			</button>
		)
	}

	function Div_menu_pc_sub_li(props) {
		return (
			<ul class="flex justify-center items-center h-[50px] cursor-pointer
					   hover:bg-gray-100" onClick={props.function}>
				<li class="flex justify-center items-center">
					<span class="text-sm text-gray-500">{props.title}</span>
				</li>
			</ul>
			
		)
	}


	function Div_menu_mobile_title(props) {
		return (
			<div id={props.id} class="flex flex-col justify-center items-start w-full h-[50px] px-[20px] cursor-pointer hover:bg-blue-200"
				 onClick={props.function}>
				<span class="flex flex-row justify-center items-center">
					{props.title}
				</span>
			</div>
		)
	}

	function Div_menu_mobile_li(props) {
		return (
			<div class="flex justify-center items-start w-full h-[20px] cursor-pointer hover:bg-blue-100" onClick={() => location.href=props.url}>
				<span class="flex flex-row w-full">
					- {props.title}
				</span>
			</div>
		)
	}


	return (
		<div class="flex flex-col">
			<nav class="flex flex-row justify-between items-center bg-white h-[50px] px-[200px] md:px-[50px]">
				<Div_menu_logo />
				<Div_menu_hamburger />

				<div id="mega_menu_icons" class="flex flex-row justify-between items-center w-fit
												 md:hidden">
					<Div_menu_pc_title id={"menu_intro"} title={"연구소 소개"} function={() => location.href='/intro/'} />
					<Div_menu_pc_title id={"menu_people"} title={"구성원"} function={() => location.href='/people/'} />
					<Div_menu_pc_title id={"menu_news"} title={"뉴스 및 공지사항"} function={() => click_dropdown("news")} />
					<Div_menu_pc_title id={"menu_archive"} title={"자료실"} function={() => click_dropdown("archive")} />
					<Div_menu_pc_title id={"menu_community"} title={"회원 코너"} function={() => location.href='/community/'} />

					<button id="menu_login" onClick={() => location.href='/account/'}
							class="text-sm text-white w-[100px] h-[25px] rounded-lg bg-blue-500 ml-[50px] hover:bg-blue-400">
						로그인
					</button>
				</div>
			</nav>

			<div id="menu_dropdown_news" class="hidden">
				<div class="grid grid-cols-2 max-w-screen-xl px-4 mx-auto text-gray-900">
					<Div_menu_pc_sub_li title={"연구원 소식"} function={() => location.href='/news/'} />
					<Div_menu_pc_sub_li title={"공지사항"} function={() => location.href='/news/notice/'} />
				</div>
			</div>

			<div id="menu_dropdown_archive" class="hidden">
				<div class="grid grid-cols-2 max-w-screen-xl px-4 mx-auto text-gray-900">
					<Div_menu_pc_sub_li title={"블로그"} function={() => location.href='/archive/blog/'} />
					<Div_menu_pc_sub_li title={"자료실"} function={() => location.href='/archive/'} />
				</div>
			</div>


			<div id="div_menu_mobile" class="hidden">
				<div class="flex flex-col justify-center items-start w-full h-[50px] px-[20px] cursor-pointer hover:bg-blue-200 border border-4-gray-500"
					 onClick={() => location.href='/account/'} >
				   <span class="flex flex-row justify-center items-center">
					   로그인
				   </span>
			   </div>

				<Div_menu_mobile_title title={"연구소 소개"} function={() => location.href='/intro/'} />    
				<Div_menu_mobile_title title={"구성원"} function={() => location.href='/people/'} />

				<Div_menu_mobile_title id={"menu_mobile_news"} title={"뉴스 및 공지사항"} function={() => click_dropdown("news")} />
				<div id="div_menu_mobile_news" class="hidden">
					<Div_menu_mobile_li title={"연구원 소식"} function={() => location.href='/news/'} />
					<Div_menu_mobile_li title={"공지사항"} function={() => location.href='/news/notice/'} />
				</div>

				<Div_menu_mobile_title id={"menu_mobile_archive"} title={"자료실"} function={() => click_dropdown("archive")} />
				<div id="div_menu_mobile_archive" class="hidden">
					<Div_menu_mobile_li title={"블로그"} function={() => location.href='/archive/blog/'} />
					<Div_menu_mobile_li title={"자료실"} function={() => location.href='/archive/'} />
				</div>

				<Div_menu_mobile_title title={"회원 코너"} function={() => location.href='/community/'} />
			</div>
		</div>
	)
}