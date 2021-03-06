
var noteLetters = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

var scaleModes = {
    major: {
        ionian:  	[2,2,1,2,2,2,1], // last 1 added for 'wrap around'
        dorian: 	[2,1,2,2,2,1,2],
        phyrigian:  [1,2,2,2,1,2,2],
        lydian:     [2,2,2,1,2,2,1],
        mixolydian: [2,2,1,2,2,1,2],
        aeolian:    [2,1,2,2,1,2,2],
        locrian:    [1,2,2,1,2,2,2]
    },
    harmonic_minor: {
        harmminor: 		[2,1,2,2,1,3,1],
        locriansharpsix:[1,2,2,1,3,1,2],
        ionianaug:     	[2,2,1,3,1,2,1],
        romanian: 		[2,1,3,1,2,1,2],
        phrygiandom:   	[1,3,1,2,1,2,2],
        lydiansharptwo: [3,1,2,1,2,2,1],
        ultralocrian:   [1,2,1,2,2,1,3]
    },
    melodic_minor: {
        jazz_minor: 		[2,1,2,2,2,2,1],
        dorianflatnine: 	[1,2,2,2,2,1,2],
        lydianaug: 			[2,2,2,2,1,2,1],
        lydiandom: 			[2,2,2,1,2,1,2],
        mixolydianflatsix: 	[2,2,1,2,1,2,2],
        semilocrian: 		[2,1,2,1,2,2,2],
        superlocrian: 		[1,2,1,2,2,2,2]
    }
};



function getOctaveFromNoteNumber(noteNumber){
    //return Math.floor(noteNumber/12) - 1;  // Possibly -1 depending on which 'standard' you work with
    return Math.floor(noteNumber/12);
}


function noteNumberToNoteName(noteNumber, showOctave){

    var noteName = noteLetters[noteNumber % 12];
    if(showOctave){
        noteName += getOctaveFromNoteNumber(noteNumber);
    }

    return noteName;
}
