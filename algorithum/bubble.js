let arr = [64, 34, 25, 12, 22, 11, 90 ] 

console.log(arr);

function bubbleSort(arr, n) 
{ 
	if (n == 1) 
		return; 

	for (var i = 0; i < n - 1; i++) 

		if (arr[i] > arr[i + 1]) 
		{ 
			var temp = arr[i]; 
			arr[i] = arr[i + 1]; 
			arr[i + 1] = temp; 
		} 

	bubbleSort(arr, n - 1); 

} 

bubbleSort(arr, arr.length); 

console.log(arr);


