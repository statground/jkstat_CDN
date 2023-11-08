function Div_main() {
	return (
		<div class="p-16">
			<div class="relative overflow-x-auto sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" class="w-1/4 px-6 py-3 text-center">
								카테고리
							</th>
							<th scope="col" class="w-2/4 px-6 py-3">
								제목
							</th>
							<th scope="col" class="w-1/4 px-6 py-3 text-center">
								날짜
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								카테고리
							</th>
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								공지사항 제목
							</th>
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								날짜
							</th>
						</tr>
					</tbody>
				</table>

				<nav class="flex items-center justify-between pt-4">
					<span class="text-sm font-normal text-gray-500">
						Showing <span class="font-semibold text-gray-900">1-10</span> of <span class="font-semibold text-gray-900">1000</span>
					</span>
					<ul class="inline-flex -space-x-px text-sm h-8">
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
						</li>
					</ul>
				</nav>

			</div>
		</div>
	)
}