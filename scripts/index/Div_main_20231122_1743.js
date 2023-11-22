function Div_main() {
	function Div_sub_title(props) {
		return (
			<p class="mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 md:text-md mt-4">
				<span class="underline underline-offset-3 decoration-4 decoration-blue-400">
					{props.title}
				</span>
			</p>
		)
	}

	function Div_sub_article(props) {
		return (
			<article>
				<div class="space-y-3 border border-2-gray-200 p-4">
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
		<div class="my-8">
			<section class="bg-white antialiased sm:space-y-16 space-y-8">

				<div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
					<p class="mb-4 text-xl text-gray-900 dark:text-white md:text-md">
						<span class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400
									 md:text-2xl">
							JK 통계 연구소
						</span>는<br/>
						대한민국 내에서 통계학과 그 응용분야에 대한 공동연구, 교육, 자문 활동을 하고 하기 위한 목적으로 설립되었습니다.
					</p>
				</div>

				<div class="max-w-screen-xl mx-auto lg:px-6">
					<Div_sub_title title={"최신 소식"} />

					<div class="grid grid-cols-2 md:grid-cols-1 gap-4">
						<Div_sub_article category={"공지사항"}
										 url={"#"}
										 title={"공지사항 예시"}
										 content={"내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 "} />
				
						<div class="grid grid-cols-2 md:grid-cols-1 gap-4">
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

				<div class="max-w-screen-xl mx-auto lg:px-6">
					<Div_sub_title title={"뉴스레터 신청"} />

					<div class="flex flex-between max-w-screen-xl px-4 py-8 mx-auto md:grid-cols-1 border border-4-gray-400 shadow md:flex-col md:space-y-4">
						<div class="flex flex-row w-full justify-start items-center">
							<p class="max-w-xl font-light text-gray-500 md:text-sm">
								JK 통계 컨설팅의 최신 소식을 이메일로 받아보세요!
							</p>
						</div>
						<div class="flex flex-row w-full justify-center items-center">
							<div class="relative w-auto mr-3">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
								</div>
								<input class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
											  focus:ring-primary-500 focus:border-primary-500" 
									   placeholder="Enter your email" type="email" name="member[email]" id="member_email" />
							</div>

						</div>
					</div>
				</div>
			</section>
		</div>
	)
}