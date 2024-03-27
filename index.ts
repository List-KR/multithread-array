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
