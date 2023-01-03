enum Color {
    RED,
    WHITE,
    BLACK
}

enum TimingFunc{
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear'
}

function animText(color: Color, timingFunc: TimingFunc) {
    if (color === Color.WHITE) {
        console.log(timingFunc)
    }
}

animText(Color.WHITE, TimingFunc.EASE_IN);