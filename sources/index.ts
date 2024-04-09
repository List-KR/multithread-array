export type MultithreadArrayOptions = {
  /**
   * A count of the number of threads to use.
   * The number should be integer and greater than 0.
   * @example
   * ```
   * typeof window === 'undefined' ? os.cpus().length : navigator.hardwareConcurrency
   * ```
   */
  Count: number
}

function ProcessMultithreadArrayParameters(Options: MultithreadArrayOptions) {
  if (!Number.isInteger(Options.Count)) {
    throw new Error('MultithreadArrayOptions.Count should be an integer')
  }
  if (Options.Count <= 0) {
    throw new Error('MultithreadArrayOptions.Count should be greater than 0')
  }
}

/**
 * Splits an array into multiple subarrays based on the specified options.
 * The reminder elements are added into the subarrays in order.
 * @template T - The type of elements in the array.
 * @param ArrayPara - The array to be split.
 * @param Options - The options for splitting the array.
 * @returns An array of subarrays, each containing a portion of the original array.
 */
export function MultithreadArray<T>(ArrayPara: T[], Options: MultithreadArrayOptions): T[][] {
  ProcessMultithreadArrayParameters(Options)
  
  const Result: T[][] = []
  for (var I = 0; I < Options.Count; I++) {
    Result.push(ArrayPara.slice(I * Math.floor(ArrayPara.length / Options.Count), (I + 1) * Math.floor(ArrayPara.length / Options.Count)))
  }

  ArrayPara = ArrayPara.slice(Options.Count * Math.floor(ArrayPara.length / Options.Count))
  for (var J = 0; J < ArrayPara.length; J++) {
    Result[J].push(ArrayPara[J])
  }

  return Result
}


/**
 * Splits elements of an array into subarrays that have specified lengths.
 * 
 * @template T - The type of elements in the array.
 * @param ArrayPara - The array to be split.
 * @param Options - The options for splitting the array.
 * @returns An array of subarrays, where each subarray contains a specified number of elements from the original array.
 */
export function SplitElementsIntoSubArrayLength<T>(ArrayPara: T[], Options: MultithreadArrayOptions): T[][] {
  ProcessMultithreadArrayParameters(Options)

	const SplittedArray = new Array<T[]>(Math.ceil(ArrayPara.length / Options.Count))
	for (var I = 0; I < SplittedArray.length; I++) {
		SplittedArray[I] = ArrayPara.slice(I === 0 ? I : I * Options.Count, (I + 1) * Options.Count > ArrayPara.length ? ArrayPara.length : (I + 1) * Options.Count)
	}

	return SplittedArray
}