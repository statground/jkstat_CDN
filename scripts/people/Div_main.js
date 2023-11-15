function Div_main() {
	function Div_person(props) {
		return (
			<div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
				<div class="p-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900">
						{props.name}
					</h3>
					<span class="text-gray-500">
						{props.affiliation}
					</span>
				</div>
			</div> 
		)
	}

	return (
		<div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
				구성원
				</h2>
			</div>
		
			<div class="grid grid-cols-4 gap-8 md:grid-cols-2 my-8">
				<Div_person name={"김재광"} affiliation={"미국 아이오와주립대학 통계학과"} />
				<Div_person name={"신동완"} affiliation={"이화여자대학교 통계학과"} />
				<Div_person name={"박준용"} affiliation={"서울대학교 통계학과"} />
				<Div_person name={"정상아"} affiliation={"서울대학교 자연과학대학"} />
				<Div_person name={"황영덕"} affiliation={"미국 뉴욕시립대학 경영대학"} />
				<Div_person name={"조인호"} affiliation={"미국 아이오와주립대학 공과대학"} />
			</div>
		</div>
	)
}