 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 工具库 -> 基准测试工具类
   * 备注：基准测试工具，可以让你标记点，并计算它们之间的时间差。还可以显示内存消耗。
   * 也可以参考第三方库：https://www.npmjs.com/package/current-processes
-----------------------------------------------------------------------------------------------------------------------------------------------------**/

class Benchmark {
    constructor() {
        this.markers = {} ;
    }
    mark(marker) {
        this.markers[marker] = new Date().getTime() ;  //返回的是从从1970.1.1 00:00:00开始的毫秒数
    }
    elapsed(marker1, marker2) {
        return this.mark(marker2) - this.mark(marker1) ;
    }
    memoryUsage() {
        let mem = process.memoryUsage() ;
        //未完待续
    }
}
export default Benchmark ;  //导出