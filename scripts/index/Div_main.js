function Div_main() {
	function Div_sub_article(props) {
		return (
			<article>                        
				<div class="mt-5 space-y-3">
					{   props.category == "연구원 소식"
						?   <span class="bg-red-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
								<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/news.svg" class="w-4 h-4 mr-2" />
								{props.category}
							</span>
						: ""
					}
					{   props.category == "공지사항"
						?   <span class="bg-yellow-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
								<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/notice.svg" class="w-4 h-4 mr-2" />
								{props.category}
							</span>
						: ""
					}
					{   props.category == "블로그"
						?   <span class="bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
								<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/blog.svg" class="w-4 h-4 mr-2" />
								{props.category}
							</span>
						: ""
					}
					{   props.category == "자료실"
						?   <span class="bg-green-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
								<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/archive.svg" class="w-4 h-4 mr-2" />
								{props.category}
							</span>
						: ""
					}
					{   props.category == "회원 코너"
						?   <span class="bg-purple-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
								<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/community.svg" class="w-4 h-4 mr-2" />
								{props.category}
							</span>
						: ""
					}
		
					<h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
					<a href={props.url} class="hover:underline">
						{props.title}
					</a>
					</h2>
		
					<p class="text-base font-normal text-gray-500">
						{props.content}
					</p>
		
					<a href={props.url}
					   class="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline">
						Read more
						<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
						</svg>
					</a>
				</div>
			</article>
		)
	}

	return (
		<div class="space-y-8 my-8">
			<section class="bg-white antialiased">
				<div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">

					<h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 md:text-md mt-4">
						<span class="underline underline-offset-3 decoration-4 decoration-blue-400">최신 소식</span>
					</h1>

					<div class="grid grid-cols-2 gap-8 md:grid-cols-1 lg:gap-20">
						<Div_sub_article category={"공지사항"}
										 url={"#"}
										 title={"공지사항 예시"}
										 content={"내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 "} />
				
						<div class="grid grid-cols-2">
							<Div_sub_article category={"블로그"}
											 url={"#"}
											 title={"블로그 예시"}
											 content={"내용"} />
							<Div_sub_article category={"연구원 소식"}
											 url={"#"}
											 title={"연구원 소식 예시"}
											 content={"내용"} />
							<Div_sub_article category={"자료실"}
											 url={"#"}
											 title={"자료실 예시"}
											 content={"내용"} />
							<Div_sub_article category={"회원 코너"}
											 url={"#"}
											 title={"회원 코너 예시"}
											 content={"내용"} />
				
						</div>
					</div>
				</div>
			</section>

			<div class="grid grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto md:grid-cols-1 border border-4-gray-400 shadow">
				<div>
					<h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 md:text-md mt-4">
						<span class="underline underline-offset-3 decoration-4 decoration-blue-400">뉴스레터 신청</span>
					</h1>
					<p class="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-sm">
						JK 통계 컨설팅의 최신 소식을 이메일로 받아보세요!
					</p>
				</div>
				<div class="flex flex-row w-full justify-center items-center">
					<form action="#" class="">
						<div class="flex items-center mb-3">
							<div class="relative w-auto mr-3">
								<label for="member_email" class="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
								</div>
								<input class="block md:w-96 w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" name="member[email]" id="member_email" required="" />
							</div>
							<div>
								<input type="submit" value="Try for free" class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300" name="member_submit" id="member_submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}