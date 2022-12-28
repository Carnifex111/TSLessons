
type animationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

function createAnimatiom (
    id: AnimationId, 
    animationName: string, 
    timingFunc: animationTimingFunc = "ease",
    duration: number,
    iterCount: "infinite" | number
    ) : void {
    console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
}