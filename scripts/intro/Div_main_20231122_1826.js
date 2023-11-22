function Div_main() {
	function Div_li(props) {
		return (
			<li class="flex items-center">
				<img src="https://cdn.jsdelivr.net/gh/statground/jkstat_CDN/images/svg/paper.svg" class="w-4 h-4 mr-2" />
				{props.text}
			</li>
		)
	}

	return (
		<main class="flex flex-col pb-16 lg:pb-24 bg-white antialiased">
			<header class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] bg-no-repeat bg-cover bg-center bg-blend-darken
						   w-full h-[300px] md:h-[560px] relative">
				<div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

				<div class="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
					<h1 class="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
						JK 통계 연구소 소개
					</h1>
					<p class="text-lg font-normal text-gray-300">
						JK 통계 연구소는 대한민국 내에서 통계학과 그 응용분야에 대한 공동연구, 교육, 자문 활동을 하고 하기 위한 목적으로 설립되었습니다.
					</p>
					<p class="text-lg font-normal text-gray-300">
						연구소 대표인 김재광 교수는 샘플링과 결측자료 분석 분야에서 세계적으로 인정받는 통계학자로서 미국 아이오와 주립대에서 왕성한 연구 활동을 하고 있으며 한국사회의 통계학 발전에 기여하기 위해 2023년 6월에 JK 통계 연구소를 설립해서 한국에서도 활동할 기반을 마련했습니다.
					</p>
					<p class="text-lg font-normal text-gray-300">
						연구소에서는 유투브나 줌을 이용해서 최신 통계학 기법들에 대한 무료 온라인 강의를 하고 있고 최신 통계학 기법에 대한 세미나도 개최하고 있습니다. 
					</p>
				</div>
			</header>
			
			<div class="flex z-20 justify-between p-6 mx-4 bg-white rounded w-full">
				<article class="w-full max-w-none format format-sm format-blue">
					<div class="flex flex-col justify-between space-y-4">
						<p class="text-lg font-normal">
							김재광 교수의 연구 실적은 개인 홈페이지(
								<a href="https://sites.google.com/view/jaekwangkim/research?authuser=0" target="_blank" class="text-blue-500">
									링크
								</a>
							)에서 확인할수 있으며 그동안 진행했던 컨설팅 프로젝트 명단은 다음과 같습니다.
						</p>

						<ul class="w-full space-y-1 text-gray-500 list-inside space-y-3">
							<Div_li text={"가계 조사 소지역 추정 개선 연구 용역, United Nations, FPA (2021-2022)"} />
							<Div_li text={"품질관리를 위한 샘플링 연구,  삼성전자. (2018-2019)"} />
							<Div_li text={"심근경색환자 FPC to door time 성공률 추정 연구, 대한심혈관 중재학회 (2018)"} />
							<Div_li text={"Combining survey data and admin data in national household income survey, Statistics Korea (2018)"} />
							<Div_li text={"빅데이터를 활용한 “외래관광객 실태조사” 지역관광통계 개선 용역, 한국관광공사 (2017-2018)"} />
							<Div_li text={"Survey Integration: Combining information from multiple sources, Census Bureau (2016-2018)"} />
							<Div_li text={"Dual-Frame Estimates of Indicators for Feed the Future (FTF) Zone of Influence (ZOI) and Food for Peace (FFP) Project Implementation Area in Guatemala and Nepal, FHI360 and USAID (2016-2017)"} />
							<Div_li text={"NTTO Variance Project, CIC Research, Inc. (2016)"} />
							<Div_li text={"\"Improvement of the collection and management of data from administrative sources\", Food and Agriculture Organization, United Nations (2014-2016)"} />
							<Div_li text={"SMART survey for election prediction for the 6th local election in Korea, JTBC. (2014)"} />
							<Div_li text={"\"New approaches for area frame development, area sample design, and geospatial data collection\", National Agricultural Statistical Service, USDA (2013-2015)"} />
							<Div_li text={"Analysis of Mixed mode surveys, Statistical Research Institute, Statistics Korea (2012)"} />
							<Div_li text={"Small area estimation for Korean household income and expenditure survey, Statistical Research Institute, Statistics Korea (2011)"} />
							<Div_li text={"Sampling design and propensity weighting for on-line panel survey, Korean Broadcasting Service (2011)"} />
							<Div_li text={"Principal investigator for the small area research project for the income and poverty estimates, Mexico (2010)"} />
							<Div_li text={"Weighting project for the panel sample of Korean Retirement and Income Study, National Pension Research Institute, Korea (2007)"} />
							<Div_li text={"Imputation project for Korean Labor and Income Dynamics Panel Survey, Korean Labor Institute, Korea (2007)"} />
							<Div_li text={"National election exit poll surveys, KBS & SBS, Korea (2004-2006)"} />
							<Div_li text={"SAIPE variance improvement project, Census Bureau (2003-2006)"} />
						</ul>
					</div>
				</article>
			</div>
		</main>
	)
}