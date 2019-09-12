declare namespace repeat {
  interface RepeatInstance {
    <TResult>(target: () => TResult): () => Promise<TResult>
    <T1, TResult>(target: (t1: T1) => TResult): (t1: T1) => Promise<TResult>
    <T1, T2, TResult>(target: (t1: T1, t2: T2) => TResult): (t1: T1, t2: T2) => Promise<TResult>
    <T1, T2, T3, TResult>(target: (t1: T1, t2: T2, t3: T3) => TResult): (t1: T1, t2: T2, t3: T3) => Promise<TResult>
    <T1, T2, T3, T4, TResult>(target: (t1: T1, t2: T2, t3: T3, t4: T4) => TResult): (t1: T1, t2: T2, t3: T3, t4: T4) => Promise<TResult>
    <T1, T2, T3, T4, T5, TResult>(target: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => Promise<TResult>
    <T1, T2, T3, T4, T5, T6, TResult>(target: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => TResult): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => Promise<TResult>
    <T1, T2, T3, T4, T5, T6, T7, TResult>(target: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => TResult): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => Promise<TResult>
    <T1, T2, T3, T4, T5, T6, T7, T8, TResult>(target: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => TResult): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => Promise<TResult>
  }
}

declare function repeat(times: number): repeat.RepeatInstance
export = repeat;
